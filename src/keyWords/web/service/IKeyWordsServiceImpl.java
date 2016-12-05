package keyWords.web.service;

import java.io.IOException;
import java.util.List;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web.solr.service.SolrService;
import org.apache.solr.client.solrj.response.FacetField.Count;

import keyWords.web.dao.IBaseDaoImpl;
import keyWords.web.entity.JqSegBt;


@Service("keyWordsService")
public class IKeyWordsServiceImpl extends IBaseDaoImpl<JqSegBt> implements IKeyWordsService{
	@Autowired
	SolrService solrService;
	public List<Count> facetTest(String startDateStr,String endDateStr) throws SolrServerException, IOException{
		return solrService.getFacetByDate(startDateStr, endDateStr);
	}
	
	
}
