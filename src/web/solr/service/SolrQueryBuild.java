package web.solr.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;

import keyWords.web.service.TimeHandler;

import org.apache.solr.client.solrj.SolrQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SolrQueryBuild {
	
	@Resource
	SetQuery setQuery;
//	@Autowired(required=false)
//	TimeHandler timeHandler;
	/*
	 * 设置query参数
	 * 时间不输入时默认为当天
	 * */
	public SolrQuery getSolrQuery(String startTime,String endTime, String sjajfl1,
			String sjajfl2,String sjajfl3,String sjajfl4,String fjajfl1,String fjajfl2,String fjajfl3,String fjajfl4,
			String pcs,String kdd,String fabw1, String fabw2,String queryTxt, String queryDomain,int startRow,int pageRows){
		SolrQuery params =new SolrQuery();
		params=addTimeFilter(startTime,endTime,params);
		params=addFjajflFilter(fjajfl1,fjajfl2,fjajfl3,fjajfl4,params);
		params=addSjajflFilter(sjajfl1,sjajfl2,sjajfl3,sjajfl4,params);
		params=addPcsFilter(pcs,params);
		params=addKddFilter(kdd,params);
		params=addFabwFilter(fabw1,fabw2,params);
		params.setStart(startRow);
		params.setRows(pageRows);
		params=setQuery.setQuery(queryDomain, queryTxt, params);
		return params;
	}



	/*
	 * 得到时间
	 * */
	public SolrQuery addTimeFilter(String startTime,String endTime,SolrQuery params){
		if(startTime!=null&&startTime!=null&&!startTime.equals("")&&!endTime.equals("")){
				String start = startTime.replaceAll(" ", "T");
				start=start+":00Z";
				String end = endTime.replaceAll(" ", "T");
				end=end+":00Z";
				String fqTimeStr = "BJSJ: ["+start +" TO " + end +"]"; 
				params.addFilterQuery(fqTimeStr);}
		//时间不输入时默认为当天
		else{
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");//设置日期格式
			TimeHandler timeHandler = new TimeHandler();
			Date startDate = timeHandler.getTimesmorning();
			Date endDate = timeHandler.getTimesnight();
			String start = df.format(startDate);
			String end = df.format(endDate);
			String fqTimeStr = "BJSJ: ["+start +" TO " + end +"]"; 
			params.addFilterQuery(fqTimeStr);}
	return params;
	}
	public SolrQuery addFjajflFilter(String fjajfl1,String fjajfl2,String fjajfl3,String fjajfl4,SolrQuery params){
		if(fjajfl1!=null&&!fjajfl1.equals("")){
			String fqFj1Str="FJAJFL1 : "+fjajfl1;
			params.addFilterQuery(fqFj1Str);
		}
		if(fjajfl2!=null&&!fjajfl2.equals("")){
			String fqFj2Str="FJAJFL2 : "+fjajfl2;
			params.addFilterQuery(fqFj2Str);
		}
		if(fjajfl3!=null&&!fjajfl3.equals("")){
			String fqFj3Str="FJAJFL3 : "+fjajfl3;
			params.addFilterQuery(fqFj3Str);
		}
		if(fjajfl4!=null&&!fjajfl4.equals("")){
			String fqFj4Str="FJAJFL4 : "+fjajfl4;
			params.addFilterQuery(fqFj4Str);
		}
		return params;
	}
	public SolrQuery addSjajflFilter(String sjajfl1,String sjajfl2,String sjajfl3,String sjajfl4,SolrQuery params){
		if(sjajfl1!=null&&!sjajfl1.equals("")){
			String fqSj1Str="SJAJFL1 : "+sjajfl1;
			params.addFilterQuery(fqSj1Str);
		}
		if(sjajfl2!=null&&!sjajfl2.equals("")){
			String fqSj2Str="SJAJFL2 : "+sjajfl2;
			params.addFilterQuery(fqSj2Str);
		}
		if(sjajfl3!=null&&!sjajfl3.equals("")){
			String fqSj3Str="SJAJFL3 : "+sjajfl3;
			params.addFilterQuery(fqSj3Str);
		}
		if(sjajfl4!=null&&!sjajfl4.equals("")){
			String fqSj4Str="SJFJFL4 : "+sjajfl4;
			params.addFilterQuery(fqSj4Str);
		}
		return params;
	}
	public SolrQuery addPcsFilter(String pcs,SolrQuery params){
		if(pcs!=null&&!pcs.trim().equals("")){
			String fqPcsStr = "PCS : "+pcs;
			params.addFilterQuery(fqPcsStr);
		}
		return params;
	}
	public SolrQuery addKddFilter(String kdd,SolrQuery params){
		if(kdd!=null&&!kdd.equals("")){
			String fqKddStr = "KDD : "+kdd;
			params.addFilterQuery(fqKddStr);
		}
		return params;
	}
	public SolrQuery addFabwFilter(String fabw1,String fabw2,SolrQuery params){
		if(fabw1!=null&&!fabw1.equals("")){
			String fqFabw1Str = "FJFABW1 : "+fabw1;
			params.addFilterQuery(fqFabw1Str);
			if(fabw2!=null&&!fabw2.equals("")){
				String fqFabw2Str = "FJFABW2 : "+fabw2;
				params.addFilterQuery(fqFabw2Str);
			}
		}
		return params;
	}
	//得到时间
	public SolrQuery addSortRule(String sortField,String sortRule,SolrQuery params){
		if(sortField!=null&&!sortField.equals("")){
				if(sortRule.equals("asc"))
				params.addSort("BJSJ",SolrQuery.ORDER.asc );
				else if(sortRule.equals("desc"))
					params.addSort("BJSJ",SolrQuery.ORDER.desc );}
				return params;
	}
}

