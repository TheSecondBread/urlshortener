package com.urlshortener.urlshortener.Run;
import org.springframework.stereotype.Repository;
import java.util.Hashtable;
import java.util.Map;
import java.util.HashMap;


@Repository
public class LinkRepositary{
    private final Map<String, Link> dictionary = new Hashtable<>();

    public Url shortenLink(Link link){
        double x = Math.random();
        String url = Double.toString(x);
        dictionary.put(url, link);
        return new Url(url);
    }

    public String getLink(Url url){
        Link link = dictionary.get(url.url());
        return (link != null) ? link.link() : null;
    }

    public Map<String, Link> getDictionary(){
        return new HashMap<>(dictionary);
    }

    // You may also add @PostConstruct method here to initialize data.
}

