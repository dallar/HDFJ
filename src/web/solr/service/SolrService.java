package web.solr.service;

import java.io.IOException;

import javax.annotation.Resource;

import web.solr.dao.*;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocumentList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("solrService")
public class SolrService {
	@Resource
	SolrClientBuild scb;
	
	public SolrDocumentList getDocById(String id) throws SolrServerException, IOException{
		SolrClient sc=scb.getSolrClient();
		SolrQuery params = new SolrQuery();
		params.setQuery("id:"+id);
		QueryResponse response = sc.query(params);
		SolrDocumentList hits = response.getResults();
		return hits;
	}
}
