package com.dev.osapp.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dev.osapp.api.event.RecursoCriadoEvent;
import com.dev.osapp.api.model.Statusos;
import com.dev.osapp.api.repository.StatusosRepository;

@RestController
@RequestMapping("/statusos")
public class StatusosResource {
	
	@Autowired
	private StatusosRepository statusosRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_STATUS') and hasAuthority('SCOPE_read')")
	public List<Statusos> listar(){
		return statusosRepository.findAll();
	}
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_STATUS') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Statusos> criar(@RequestBody Statusos statusos, HttpServletResponse response) {
		Statusos statusosSalva = statusosRepository.save(statusos);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, statusosSalva.getCodigo()));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(statusosSalva);
	}
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_STATUS') and hasAuthority('SCOPE_read')")
	public Statusos buscarPeloCodigo(@PathVariable Long codigo) {
		return statusosRepository.findById(codigo).orElse(null);
	}
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_STATUS') and hasAuthority('SCOPE_write')")
	public void remover(@PathVariable Long codigo) {
		statusosRepository.deleteById(codigo);
	}
}
