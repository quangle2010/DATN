package com.thebugs.back_end.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.thebugs.back_end.beans.GenreBean;
import com.thebugs.back_end.dto.GenreDTO;
import com.thebugs.back_end.entities.Genre;
import com.thebugs.back_end.resp.ResponseDataPagination;
import com.thebugs.back_end.resp.ResponseData;
import com.thebugs.back_end.services.GenreService;

import jakarta.validation.Valid;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/admin/genre")
public class GenreController {

        @Autowired
        private GenreService genreService;

        @GetMapping("/all")
        public ResponseEntity<ResponseData> getAll() {
                ResponseData responseData = new ResponseData();
                try {
                        responseData.setStatus(true);
                        responseData.setMessage(null);
                        responseData.setData(genreService.getAllGenreDTOs());
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage(null);
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

        @GetMapping("/list")
        public ResponseEntity<ResponseData> getPage(@RequestParam(required = false) String keyword,
                        @RequestParam(defaultValue = "1") int page) {
                Pageable pageable = PageRequest.of(page - 1, 10, Sort.by(Sort.Order.desc("id")));
                ResponseDataPagination rpPagination = new ResponseDataPagination();
                rpPagination.setObjects(genreService.getGenresByKeywordWithPagination(keyword, pageable));
                rpPagination.setTotalItems(genreService.totalItems(keyword));
                return ResponseEntity.ok(new ResponseData(true, "thành công", rpPagination));
        }

        @PostMapping("/delete")
        public ResponseEntity<ResponseData> postDeleteGenre(@RequestParam int id) {
                try {
                        boolean delete = genreService.deleteGenre(id);
                        if (delete) {
                                return ResponseEntity.status(401).body(new ResponseData(false, "Không thể xóa", null));
                        } else {
                                return ResponseEntity.ok(new ResponseData(true, "Xóa thành công", null));
                        }
                } catch (Exception e) {
                        return ResponseEntity.status(401).body(new ResponseData(false, e.getMessage(), null));
                }
        }

        @PostMapping("/save")
        public ResponseEntity<ResponseData> postSaveGenre(@RequestBody @Valid GenreBean genreBean,
                        BindingResult result) {
                ResponseData responseData = new ResponseData();
                try {
                        if (result.hasErrors()) {
                                String errorMessages = result.getAllErrors().stream()
                                                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                                                .collect(Collectors.joining(", "));
                                responseData.setStatus(false);
                                responseData.setMessage(errorMessages);
                                responseData.setData(null);
                                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                                .body(responseData);
                        }
                        Genre genre = new Genre();
                        if (genreBean.getId() != null) {
                                genre.setId(genreBean.getId());
                        }
                        genre.setName(genreBean.getName());
                        GenreDTO genreDTO = genreService.save(genre);
                        responseData.setStatus(true);
                        responseData.setMessage("Lưu thành công");
                        responseData.setData(genreDTO);
                        return ResponseEntity.ok(responseData);
                } catch (Exception e) {
                        responseData.setStatus(false);
                        responseData.setMessage(e.getMessage());
                        responseData.setData(null);
                        return ResponseEntity.status(401).body(responseData);
                }

        }

}
