package com.thebugs.back_end.mappers;

import org.springframework.stereotype.Component;

import com.thebugs.back_end.dto.PublisherDTO;
import com.thebugs.back_end.entities.Publisher;

@Component
public class PublisherMapper {
        public PublisherDTO toDTO(Publisher publisher) {
                if (publisher == null) {
                        return null;
                }
                PublisherDTO publisherDTO = new PublisherDTO();
                publisherDTO.setId(publisher.getId());
                publisherDTO.setName(publisher.getName());
                return publisherDTO;
        }
}
