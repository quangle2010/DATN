package com.thebugs.back_end.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.beans.AuthorBean;
import com.thebugs.back_end.dto.AuthorDTO;
import com.thebugs.back_end.entities.Author;
import com.thebugs.back_end.repository.AuthorJPA;
import com.thebugs.back_end.resp.ResponPagination;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.AuthorService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/admin/author")
public class AuthorController {
        @Autowired
        AuthorService authorService;

        @Autowired
        AuthorJPA authorJPA;

        @GetMapping("/list")
        public ResponseEntity<ResponPagination> getAllListAuthor(@RequestParam(required = false) String keyword,
                        @RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "5") int pageSize) {
                try {
                        return ResponseEntity
                                        .ok(new ResponPagination(true, "Load danh sách thành công",
                                                        authorService.searchKeyWordAndPagination(keyword, page - 1,
                                                                        pageSize),
                                                        authorService.getTotal(keyword)));
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponPagination(false, "Error Messeage:" + e.getMessage(), null,
                                                        null));
                }
        }

        @PostMapping("/saveAuthor")
        public ResponseEntity<ResponseData> postMethodName(@Valid @RequestBody AuthorBean authorBean,
                        BindingResult result) {
                if (result.hasErrors()) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false,
                                                        "Validation Message:" + result.getAllErrors().get(0)
                                                                        .getDefaultMessage(),
                                                        null));
                }
                try {

                        Author author = new Author();
                        author.setName(authorBean.getName());
                        AuthorDTO authorDTO = authorService.createAuthorName(author);
                        return ResponseEntity
                                        .ok(new ResponseData(true, "Thêm tác giả thành công", authorDTO));
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false, "Error Messeage:" + e.getMessage(), null));
                }

        }

        @PutMapping("/updateAuthor/{id}")
        public ResponseEntity<ResponseData> updateAuthorName(@Valid @RequestBody AuthorBean authorBean,
                        BindingResult result, @PathVariable int id) {
                if (result.hasErrors()) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false,
                                                        "Validation Message: " + result.getAllErrors().get(0)
                                                                        .getDefaultMessage(),
                                                        null));
                }
                try {
                        Optional<Author> optionalAuthor = authorJPA.findById(id);
                        if (optionalAuthor.isPresent()) {
                                Author author = optionalAuthor.get();
                                author.setName(authorBean.getName());
                                AuthorDTO updatedAuthor = authorService.createAuthorName(author);
                                return ResponseEntity.ok(
                                                new ResponseData(true, "Cập nhật tác giả thành công", updatedAuthor));
                        }
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false, "Không tìm thấy tác giả", null));
                } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false, "Error Message: " + e.getMessage(), null));
                }
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<ResponseData> deleteAuthor(@PathVariable int id) {
                boolean deleteAuthor = authorService.deleteAuthor(id);
                if (deleteAuthor) {
                        return ResponseEntity.ok(new ResponseData(true, "Đã xoá tác giả thành công", null));
                } else {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                        .body(new ResponseData(false, "Không thể xoá tác giả vì đã sử dụng", null));
                }
        }

}