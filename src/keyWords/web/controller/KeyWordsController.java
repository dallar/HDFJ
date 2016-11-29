package keyWords.web.controller;

import java.io.IOException;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;  

import web.solr.service.SolrService;

@Controller
@RequestMapping("/KeyWords")
public class KeyWordsController {
	@Autowired
	SolrService solrService;
	
	
@RequestMapping("listKeyWords")
public String listKeyWords() throws SolrServerException, IOException{
	System.out.println(solrService.getDocById("23697560"));
	return "head";
}
}
