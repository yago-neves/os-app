package com.dev.osapp.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.dev.osapp.api.model.Escola;
import com.dev.osapp.api.repository.EscolaRepository;

@Service
public class EscolaService {
	
	@Autowired
	private EscolaRepository escolaRepository;
	
	public Escola atualizar(Long codigo, Escola escola) {
		Escola escolaSalva = escolaRepository.findById(codigo).orElse(null);
		if (escolaSalva==null) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(escola, escolaSalva, "codigo");
		return escolaRepository.save(escolaSalva);
	}
	
}