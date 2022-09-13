package com.dev.osapp.api.resource;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dev.osapp.api.event.RecursoCriadoEvent;
import com.dev.osapp.api.exceptionhandler.OsappExceptionHandler.Erro;
import com.dev.osapp.api.model.OrdemServico;
import com.dev.osapp.api.model.Statusos;
import com.dev.osapp.api.model.Tecnico;
import com.dev.osapp.api.repository.OrdemServicoRepository;
import com.dev.osapp.api.repository.StatusosRepository;
import com.dev.osapp.api.repository.TecnicoRepository;
import com.dev.osapp.api.repository.filter.OrdemServicoFilter;
import com.dev.osapp.api.repository.projection.ResumoOrdemServico;
import com.dev.osapp.api.service.OrdemServicoService;
import com.dev.osapp.api.service.exception.TecnicoInexistenteOuInativoException;

@RestController
@RequestMapping("/ordensdeservico")
public class OrdemServicoResource {
	
	@Autowired
	private OrdemServicoRepository ordemservicoRepository;
	
	@Autowired
	private TecnicoRepository tecnicoRepository;
	
	@Autowired
	private OrdemServicoService ordemservicoService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private StatusosRepository statusosRepository; 
	
	@Autowired
	private MessageSource messageSource;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ORDEMSERVICO') and hasAuthority('SCOPE_read')")
	public Page<OrdemServico> pesquisar(OrdemServicoFilter ordemservicoFilter, Pageable pageable){
		return ordemservicoRepository.filtrar(ordemservicoFilter, pageable);
	}
	@GetMapping(params = "resumo")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ORDEMSERVICO') and hasAuthority('SCOPE_read')")
	public Page<ResumoOrdemServico> resumir(OrdemServicoFilter ordemservicoFilter, Pageable pageable){
		return ordemservicoRepository.resumir(ordemservicoFilter, pageable);
	}
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ORDEMSERVICO') and hasAuthority('SCOPE_read')")
	public ResponseEntity<OrdemServico> buscarPeloCodigo(@PathVariable Long codigo){
		OrdemServico ordemservico = ordemservicoRepository.findById(codigo).orElse(null);
		return ordemservico != null ? ResponseEntity.ok(ordemservico) : ResponseEntity.notFound().build();
	}
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ORDEMSERVICO') and hasAuthority('SCOPE_write')")
	public ResponseEntity<OrdemServico> criar(@Valid @RequestBody OrdemServico ordemservico, HttpServletResponse response) {
		
		if( ordemservico.getStatusos()==null && ordemservico.getTecnico()==null){
		Statusos statusos = statusosRepository.findByNome("Nova");
		Tecnico tecnico = tecnicoRepository.findByNome("Nao definido");
		
		ordemservico.setStatusos(statusos);
		ordemservico.setTecnico(tecnico);
		}
		OrdemServico ordemservicoSalva = ordemservicoService.salvar(ordemservico);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, ordemservicoSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ordemservicoSalva);
	}
	@PutMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ORDEMSERVICO') and hasAuthority('SCOPE_write')")
	public ResponseEntity<OrdemServico> atualizar(@PathVariable Long codigo, @Valid @RequestBody OrdemServico os){
		OrdemServico ordemservicoSalva = ordemservicoService.atualizar(codigo, os);
		return ResponseEntity.ok(ordemservicoSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_REMOVER_ORDEMSERVICO') and hasAuthority('SCOPE_write')")
	public void deletar(@PathVariable Long codigo) {
		ordemservicoRepository.deleteById(codigo);
	}
	
	@ExceptionHandler({TecnicoInexistenteOuInativoException.class})
		public ResponseEntity<Object> hancleTecnicoInexistenteOuInativaException(TecnicoInexistenteOuInativoException ex){
		String mensagemUsuario = messageSource.getMessage("tecnico.inexistente-ou-inativo", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		return ResponseEntity.badRequest().body(erros);
	}
}
