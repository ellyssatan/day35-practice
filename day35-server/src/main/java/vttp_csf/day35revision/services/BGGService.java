package vttp_csf.day35revision.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp_csf.day35revision.models.Game;
import vttp_csf.day35revision.repositories.GameRepository;

@Service
public class BGGService {
    
    @Autowired
    private GameRepository gameRepo;

    public List<Game> findGameByName(String name) {
        return gameRepo.findGamesByName("%%%s%%".formatted(name));
    }
}
