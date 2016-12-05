package web.solr.service;

import org.apache.solr.client.solrj.SolrQuery;
import org.springframework.stereotype.Repository;

@Repository
public class SetQuery {
	//根据用户选择的内容和输入，选择搜索的目标字段
	public SolrQuery setQuery(String queryDomain, String queryTxt,SolrQuery params) {
		String qStr="*:*";
		boolean queryBt=false,queryJqzy=false,queryFknr=false;
		if(queryDomain.equals("标题")) queryBt=true;
		else if(queryDomain.equals("警情摘要")) queryJqzy=true;
		else if(queryDomain.equals("反馈内容")) queryFknr=true;
		if(!queryTxt.equals("")){
		//当在标题，敬请摘要和反馈内容中搜索
		if(queryBt&&queryJqzy&&queryFknr){
			qStr="BTJQZYFKNR:"+queryTxt;
			}
		else if(queryBt&&queryJqzy){
			qStr="BTJQZY:"+queryTxt;
			}
		else if(queryJqzy&&queryFknr){
			qStr="JQZYFKNR:"+queryTxt;
			}
		else if(queryBt&&queryFknr){
			qStr="BTFKNR:"+queryTxt;
			}
		else if(queryBt){
			qStr="BT:"+queryTxt;
			}
		else if(queryJqzy){
			qStr="JQZY:"+queryTxt;
			}
		else if(queryFknr){
			qStr="FKNR:"+queryTxt;
			}
		else{
			qStr="BTJQZYFKNR:"+queryTxt;
//			System.out.println(qStr);
			}
		}
		params.setQuery(qStr);
		return params;
	}

}
