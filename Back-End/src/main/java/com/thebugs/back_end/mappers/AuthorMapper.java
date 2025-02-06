package com.thebugs.back_end.mappers;

import org.springframework.stereotype.Component;

import com.thebugs.back_end.dto.AuthorDTO;
import com.thebugs.back_end.entities.Author;

@Component
public class AuthorMapper {
        public AuthorDTO toDTO(Author author) {
                if (author == null) {
                        return null;
                }

                AuthorDTO authorDTO = new AuthorDTO();
                authorDTO.setId(author.getId());
                authorDTO.setName(author.getName());
                return authorDTO;
        }
}
