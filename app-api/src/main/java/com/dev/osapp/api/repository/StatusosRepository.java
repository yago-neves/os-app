package com.dev.osapp.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.osapp.api.model.Statusos;

@Repository
public interface StatusosRepository extends JpaRepository<Statusos, Long>{

	public Statusos findByNome(String string);
	
}
