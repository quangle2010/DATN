package com.thebugs.back_end.services;

import java.util.ArrayList;
import java.util.Comparator;

import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.dto.GenreDTO;
import com.thebugs.back_end.entities.Genre;
import com.thebugs.back_end.entities.ProductGenre;
import com.thebugs.back_end.mappers.GenreMapper;
import com.thebugs.back_end.repository.GenreJPA;
import com.thebugs.back_end.repository.ProductGenreJPA;

@Service
public class GenreService {

        private final GenreJPA genreJPA;
        private final ProductGenreJPA productGenreJPA;
        private final GenreMapper genreMapper;

        public GenreService(GenreJPA genreJPA, ProductGenreJPA productGenreJPA, GenreMapper genreMapper) {
                this.genreJPA = genreJPA;
                this.productGenreJPA = productGenreJPA;
                this.genreMapper = genreMapper;
        }

        public ArrayList<GenreDTO> getAllGenreDTOs() {
                ArrayList<Genre> genres = (ArrayList<Genre>) genreJPA.findAll();
                return genres.stream()
                                .map(genreMapper::toDTO)
                                .sorted(Comparator.comparing(GenreDTO::getId).reversed())
                                .collect(Collectors.toCollection(ArrayList::new));
        }

        public ArrayList<GenreDTO> getGenresByKeywordWithPagination(String keyword, Pageable pageable) {
                Page<Genre> genrePage;
                if (keyword == null || keyword.isEmpty()) {
                        genrePage = genreJPA.findAll(pageable);
                } else {
                        genrePage = genreJPA.findByName(keyword, pageable);
                }

                return genrePage.stream()
                                .map(genreMapper::toDTO)
                                .collect(Collectors.toCollection(ArrayList::new));

        }

        public GenreDTO save(Genre genre) {
                if (genre.getId() != null) {
                        Genre existingGenre = genreJPA.findById(genre.getId())
                                        .orElseThrow(() -> new IllegalArgumentException(
                                                        "Không tìm thấy đối tượng có id=" + genre.getId()));
                        if (existingGenre.getId() == 1) {
                                throw new IllegalArgumentException("Không thể cập nhật genre với ID = 1");
                        }
                }
                genreJPA.findByNameExist(genre.getId(), genre.getName())
                                .ifPresent(existingGenre -> {
                                        throw new IllegalArgumentException("Tên thể loại đã tồn tại");
                                });
                Genre saved = genreJPA.save(genre);
                return genreMapper.toDTO(saved);
        }

        public int totalItems(String keyword) {
                return genreJPA.countfindByName(keyword);
        }

        public boolean deleteGenre(int id) {
                boolean check = false;
                if (id == 1) {
                        check = true;
                }
                Genre genre = genreJPA.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException(
                                                "Không tìm thấy đối tượng có id=" + id));

                for (ProductGenre productGenre : productGenreJPA.findAll()) {
                        if (productGenre.getGenre().getId() == id) {
                                check = true;
                                break;
                        }
                }
                if (!check) {
                        genreJPA.delete(genre);
                }
                return check;
        }
}
