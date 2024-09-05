package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.FichaTecnica;
import com.example.demo.repository.FichaTecnicaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class FichaTecnicaController {

	@Autowired
	private FichaTecnicaRepository fichaTecnicaRepository;

	// get all technical Sheets
	@GetMapping("/fichas")
	public List<FichaTecnica> getAllFichasTecnicas(){
		return fichaTecnicaRepository.findAll();
	}

  	// create FichaTecnica rest api
	@PostMapping("/fichas")
	public FichaTecnica createFichaTecnica(@RequestBody FichaTecnica fichaTecnica) {
		return fichaTecnicaRepository.save(fichaTecnica);
	}

	// get FichaTecnica by id rest api
	@GetMapping("/fichas/{id}")
	public ResponseEntity<FichaTecnica> getFichaTecnicaById(@PathVariable Long id) {
		FichaTecnica fichaTecnica = fichaTecnicaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe Ficha Técnica com id :" + id));
		return ResponseEntity.ok(fichaTecnica);
	}

	// update FichaTecnica rest api

	@PutMapping("/fichas/{id}")
	public ResponseEntity<FichaTecnica> updateFichaTecnica(@PathVariable Long id, @RequestBody FichaTecnica fichaTecnicaDetalhes){
		FichaTecnica fichaTecnica = fichaTecnicaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe Ficha Técnica com id :" + id));

        System.out.println("ID recebido: " + id);
        System.out.println("Detalhes da Ficha Técnica recebidos: " + fichaTecnicaDetalhes);

        fichaTecnica.setName(fichaTecnicaDetalhes.getName());
        fichaTecnica.setSuggestedPrice(fichaTecnicaDetalhes.getSuggestedPrice());
        fichaTecnica.setTotalCost(fichaTecnicaDetalhes.getTotalCost());


        // Limpa a coleção existente e adiciona os novos ingredientes
        fichaTecnica.getIngredients().clear();
        fichaTecnica.getIngredients().addAll(fichaTecnicaDetalhes.getIngredients());

		    FichaTecnica updatedFichaTecnica = fichaTecnicaRepository.save(fichaTecnica);
		    return ResponseEntity.ok(updatedFichaTecnica);
	}

	// delete FichaTecnica rest api
	@DeleteMapping("/fichas/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFichaTecnica(@PathVariable Long id){
		FichaTecnica fichaTecnica = fichaTecnicaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Não existe Ficha Técnica com id :" + id));

        fichaTecnicaRepository.delete(fichaTecnica);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

