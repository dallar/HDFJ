package web.solr.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import web.solr.dao.*;
import web.solr.entity.JQDATA;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.FacetField;
import org.apache.solr.client.solrj.response.FacetField.Count;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.springframework.stereotype.Service;

@Service("solrService")
public class SolrService {
	@Resource
	SolrClientBuild scb;
	@Resource
	JQDATA jqdata;
	@Resource
	SolrQueryBuild solrQueryBuild;
	
	public List<JQDATA> getDocById(String id) throws SolrServerException, IOException{
		SolrClient sc=scb.getSolrClient();
		SolrQuery params = new SolrQuery();
		params.setQuery("id:"+id);
		QueryResponse response = sc.query(params);
//		SolrDocumentList hits = response.getResults();
//		for(SolrDocument solrdoc : hits){
//			System.out.println(solrdoc.getFieldValue("BT"));
//		}
//		SolrDocumentList hits = response.getResults();
		List<JQDATA> ls=response.getBeans(JQDATA.class);
		return ls;
	}
	/*
	 * 根据约束条件查询案件
	 * @return List<JQDATA>
	 * @params()所有输入 +时间不输入时默认为当天
	 * */
	public List<Object> getDocByConstraints(String startTime,String endTime,String fjajfl1,String fjajfl2,
			String fjajfl3,String fjajfl4,String sjajfl1,String sjajfl2,String sjajfl3,String sjajfl4,String pcs,String kddlb,String kddlx,String kdd,
    		String fabw1,String fabw2,String fabw3,String queryTxt, String queryDomain,int page,int rows) throws SolrServerException, IOException{
		SolrQuery solrQuery=solrQueryBuild.getSolrQuery(startTime, endTime, sjajfl1, sjajfl2, sjajfl3, sjajfl4,
				fjajfl1, fjajfl2, fjajfl3, fjajfl4, pcs, kdd, fabw1, fabw2, queryTxt, queryDomain,(page-1)*rows,rows);
		SolrClient sc=scb.getSolrClient();
		QueryResponse response = sc.query(solrQuery);
		List<JQDATA> lsRes = response.getBeans(JQDATA.class);
		List<Object> ls = new ArrayList<Object>();
		ls.add(lsRes);
		ls.add(response.getResults().getNumFound());//返回文档总个数
		return ls;
	}
	/*
	 * 根据时间统计词频
	 * */
	public List<Count> getFacetByDate(String startDateStr,String endDateStr) throws SolrServerException, IOException{
		SolrQuery query=new SolrQuery();
		query.setQuery("*:*");
		String fqTimeStr = "BJSJ: ["+startDateStr +" TO " + endDateStr +"]"; 
		query.addFilterQuery(fqTimeStr);
		query.setFacet(true);
		query.addFacetField("BT");
		query.setFacetLimit(50);
		QueryResponse response = scb.getSolrClient().query(query);
		List<FacetField> facets = response.getFacetFields();
		for(FacetField facet:facets){
			System.out.println(facet.getName());
		    System.out.println("----------------");
		    List<Count> counts = facet.getValues();
		    for (Count count : counts) {
		        System.out.println(count.getName() + ":" + count.getCount());
		    }
		    return counts;
		}
		return null;
	}
}
