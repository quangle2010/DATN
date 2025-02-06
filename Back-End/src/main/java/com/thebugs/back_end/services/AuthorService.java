package com.thebugs.back_end.services;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.dto.AuthorDTO;
import com.thebugs.back_end.entities.Author;
import com.thebugs.back_end.entities.ProductAuthor;
import com.thebugs.back_end.mappers.AuthorMapper;
import com.thebugs.back_end.repository.AuthorJPA;
import com.thebugs.back_end.repository.ProductAuthorJPA;

@Service
public class AuthorService {

        private final ProductAuthorJPA productAuthorJPA;

        private final AuthorMapper authorMapper;

        private final AuthorJPA authorJPA;

        public AuthorService(ProductAuthorJPA productAuthorJPA, AuthorMapper authorMapper, AuthorJPA authorJPA) {
                this.productAuthorJPA = productAuthorJPA;
                this.authorMapper = authorMapper;
                this.authorJPA = authorJPA;
        }

        public List<AuthorDTO> getAllListAuthorWithPagination() {
                // Pageable pageable = PageRequest.of(page, size);
                List<Author> authorsPage = authorJPA.findAll();
                // List<Author> authors = authorJPA.findAll();
                return authorsPage.stream()
                                .map(authorMapper::toDTO)
                                .sorted(Comparator.comparing(AuthorDTO::getId).reversed())
                                .collect(Collectors.toCollection(ArrayList::new));
        }

        public int getTotal(String keyword) {
                return authorJPA.countfindByName(keyword);
        }

        public List<AuthorDTO> searchKeyWordAndPagination(String keyword, int page, int pageSize) {
                Pageable pageable = PageRequest.of(page, pageSize, Sort.by(Sort.Direction.DESC, "id"));
                Page<Author> authorPageable;

                if (keyword == null || keyword.isEmpty()) {
                        authorPageable = authorJPA.findAll(pageable);
                } else {
                        authorPageable = authorJPA.findByNameAuthor(keyword, pageable);
                }

                return authorPageable.stream()
                                .map(authorMapper::toDTO)
                                .collect(Collectors.toList());

        }

        public AuthorDTO createAuthorName(Author author) {
                Author saveAuthor = authorJPA.save(author);
                AuthorDTO authorDTO = authorMapper.toDTO(saveAuthor);
                return authorDTO;
        }

        public boolean deleteAuthor(int id) {
                Boolean isExitAuthor = false;
                for (ProductAuthor productAuthor : productAuthorJPA.findAll()) {

                        if (productAuthor.getId() == id) {
                                isExitAuthor = true;
                                break;
                        }

                }
                if (isExitAuthor == true) {
                        return false;
                } else {
                        authorJPA.deleteById(id);
                        return true;
                }

        }

}