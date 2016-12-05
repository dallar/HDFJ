package web.solr.dao;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

/*
 * 从配置文件中读取solr的url
 * 得到SolrClient
 * */
@Repository
//@PropertySource(value="classpath:solr5_4_0.properties") 
public class SolrClientBuild {
	@Value("${serverUrl}")
	String serverUrl;
	
	
	public SolrClient getSolrClient(){
//		System.out.println("serverUrl="+serverUrl);
		SolrClient solrClient = new HttpSolrClient(serverUrl);
		return solrClient;
	}
}
