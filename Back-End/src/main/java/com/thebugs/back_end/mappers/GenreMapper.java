package com.thebugs.back_end.mappers;

import org.springframework.stereotype.Component;

import com.thebugs.back_end.dto.GenreDTO;
import com.thebugs.back_end.entities.Genre;

@Component
public class GenreMapper {
        public GenreDTO toDTO(Genre genre) {
                if (genre == null) {
                        return null;
                }
                GenreDTO genreDTO = new GenreDTO();
                genreDTO.setId(genre.getId());
                genreDTO.setName(genre.getName());
                return genreDTO;
        }
}
