package com.dev.osapp.api.resource;

import org.springframework.data.domain.Pageable;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dev.osapp.api.event.RecursoCriadoEvent;
import com.dev.osapp.api.model.Tecnico;
import com.dev.osapp.api.repository.TecnicoRepository;
import com.dev.osapp.api.service.TecnicoService;

@RestController
@RequestMapping("/tecnicos")
public class TecnicoResource {
	
	@Autowired
	private TecnicoRepository tecnicoRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private TecnicoService tecnicoService;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_TECNICO')")
	public Page<Tecnico> pesquisar(@RequestParam(required = false, defaultValue = "") String nome, Pageable pageable) {
		return tecnicoRepository.findByNomeContaining(nome, pageable);
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_TECNICO') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Tecnico> criar(@Valid @RequestBody Tecnico tecnico, HttpServletResponse response){
		Tecnico tecnicoSalvo = tecnicoRepository.save(tecnico);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, tecnicoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(tecnicoSalvo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_TECNICO') and hasAuthority('SCOPE_read')")
	public ResponseEntity<Tecnico> buscaPeloCodigo(@PathVariable Long codigo){
		Tecnico tecnico = tecnicoRepository.findById(codigo).orElse(null);
		return tecnico != null ? ResponseEntity.ok(tecnico) : ResponseEntity.notFound().build();
	}
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVER_TECNICO') and hasAuthority('SCOPE_write')")
	public void remover(@PathVariable Long codigo) {
		tecnicoRepository.deleteById(codigo);
	}
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_TECNICO') and hasAuthority('SCOPE_write')")
	public ResponseEntity<Tecnico> atualizar(@PathVariable Long codigo, @Valid @RequestBody Tecnico tecnico){
		Tecnico tecnicoSalvo = tecnicoService.atualizar(codigo, tecnico);
		return ResponseEntity.ok(tecnicoSalvo);
	}
	@PutMapping("/{codigo}/ativo")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_TECNICO') and hasAuthority('SCOPE_write')")
	public void atualizarPropriedadeAtivo(@PathVariable Long codigo, @RequestBody Boolean ativo) {
		tecnicoService.atualizarPropriedadeAtivo(codigo, ativo);
	}
}
