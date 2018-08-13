package com.ezbudget2.EZBudget;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class BooksController {
    @RequestMapping(method = RequestMethod.GET, path = "/helloworld")
    public String helloWorld() {
        return "Hello World!";
    }

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return Arrays.asList(new Book(1l, "Mastering Spring 5.1", "John Park."));
    }

    @PostMapping("/books")
    public Book createBook() {
        return new Book(2l, "TCPL", "John Park");
    }
}
