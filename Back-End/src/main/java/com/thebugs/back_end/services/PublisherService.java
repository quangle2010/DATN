package com.thebugs.back_end.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thebugs.back_end.repository.ProductJPA;
import com.thebugs.back_end.repository.PublisherJPA;
import com.thebugs.back_end.dto.PublisherDTO;
import com.thebugs.back_end.entities.Product;
import com.thebugs.back_end.entities.Publisher;
import com.thebugs.back_end.mappers.PublisherMapper;

import java.util.List;

@Service
public class PublisherService {

        @Autowired
        private PublisherJPA publisherJPA;
        @Autowired
        private ProductJPA productJPA;
        @Autowired
        private PublisherMapper publisherMapper;

        public List<PublisherDTO> getAllPublishers() {
                return publisherJPA.findAll().stream()
                                .map(publisherMapper::toDTO)
                                .toList();
        }

        public PublisherDTO getPublisherById(Integer id) {
                return publisherJPA.findById(id)
                                .map(publisherMapper::toDTO)
                                .orElseThrow(() -> new IllegalArgumentException("không tìm thấy" + id));
        }

        public PublisherDTO save(Publisher publisher) {
                Publisher saved = publisherJPA.save(publisher);
                return publisherMapper.toDTO(saved);

        }

        public boolean delete(int id) {
                boolean check = false;
                if (id == 1) {
                        check = true;
                }
                Publisher publisher = publisherJPA.findById(id)
                                .orElseThrow(() -> new IllegalArgumentException(
                                                "Không tìm thấy đối tượng có id=" + id));

                for (Product product : productJPA.findAll()) {
                        if (product.getPublisher().getId() == id) {
                                check = true;
                                break;
                        }
                }
                if (!check) {
                        publisherJPA.delete(publisher);
                }
                return check;
        }

}