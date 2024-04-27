package com.urlshortener.urlshortener.Run;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;


@RestController
public class LinkController {
    private final LinkRepositary linkRepository;

    public LinkController(LinkRepositary linkRepository) {
        this.linkRepository = linkRepository;
    }

    @PostMapping("/api/link")
    public Url shortenLink(@RequestBody Link link) {
        return linkRepository.shortenLink(link);
    }

    @PostMapping("/api/links")
    public String sendUrl(@RequestBody Url url) {

        return linkRepository.getLink(url);
    }
    @GetMapping("/{url}")
    public ResponseEntity<Void> getUrl(@PathVariable Url url) {

        String redirectedUrl = linkRepository.getLink(url);

//        return redirectedUrl;
        if (redirectedUrl != null && !redirectedUrl.isEmpty()) {
            return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
                    .header("Location", redirectedUrl)
                    .build();
        } else {
            // If URL not found, return 404 Not Found
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/api")
    public Map<String, Link> getLinks() {

        return linkRepository.getDictionary();
    }

}
