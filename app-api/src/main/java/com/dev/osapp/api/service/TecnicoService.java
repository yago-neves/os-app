package com.dev.osapp.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dev.osapp.api.model.Tecnico;
import com.dev.osapp.api.repository.TecnicoRepository;

@Service
public class TecnicoService {
	
	@Autowired
	private TecnicoRepository tecnicoRepository;
	
	public Tecnico atualizar(Long codigo, Tecnico tecnico) {
		Tecnico tecnicoSalvo = buscarTecnicoPeloCodigo(codigo);
		
		BeanUtils.copyProperties(tecnico, tecnicoSalvo, "codigo");
		return tecnicoRepository.save(tecnicoSalvo);
	}
	public void atualizarPropriedadeAtivo(Long codigo, Boolean ativo) {
		Tecnico tecnicoSalvo = buscarTecnicoPeloCodigo(codigo);
		tecnicoSalvo.setAtivo(ativo);
		tecnicoRepository.save(tecnicoSalvo);
		
	}
	public Tecnico buscarTecnicoPeloCodigo(Long codigo) {
		Tecnico tecnicoSalvo = tecnicoRepository.findById(codigo)
				.orElseThrow(() -> new EmptyResultDataAccessException(1));
		return tecnicoSalvo;
	}
	
}