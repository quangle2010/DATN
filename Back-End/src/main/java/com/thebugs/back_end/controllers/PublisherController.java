package com.thebugs.back_end.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.beans.PublisherBean;
import com.thebugs.back_end.dto.PublisherDTO;
import com.thebugs.back_end.entities.Publisher;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.PublisherService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/admin/publisher")
public class PublisherController {

        @Autowired
        private PublisherService publisherService;

        @GetMapping("/list")
        public ResponseEntity<ResponseData> getAllPublishers() {
                List<PublisherDTO> publishers = publisherService.getAllPublishers();
                ResponseData responseData = new ResponseData();
                try {
                        responseData.setStatus(true);
                        responseData.setMessage("pass");
                        responseData.setData(publishers);
                        return ResponseEntity.ok(responseData);

                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Đã xảy ra lỗi: " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

        @PostMapping("/save")
        public ResponseEntity<ResponseData> postSave(@RequestBody PublisherBean publisherBean) {
                ResponseData responseData = new ResponseData();
                try {
                        Publisher publisher = new Publisher();
                        if (publisherBean.getId() != null) {
                                publisher.setId(publisherBean.getId());
                        }
                        publisher.setName(publisherBean.getName());
                        PublisherDTO publisherDTO = publisherService.save(publisher);
                        responseData.setStatus(true);
                        responseData.setMessage("Lưu thành công");
                        responseData.setData(publisherDTO);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Đã xảy ra lỗi: " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

        @PostMapping("/delete")
        public ResponseEntity<ResponseData> deletePublisher(@RequestParam Integer id) {
                ResponseData responseData = new ResponseData();
                try {
                        boolean delete = publisherService.delete(id);
                        if (delete) {
                                responseData.setStatus(false);
                                responseData.setMessage("Không thể xóa vì Publisher đã liên kết với sản phẩm.");

                        } else {
                                responseData.setStatus(true);
                                responseData.setMessage("Xóa Publisher thành công.");
                        }
                        responseData.setData(null);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage("Đã xảy ra lỗi: " + e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }
        }
}
