package test.SpringMVC;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import keyWords.web.service.IKeyWordsServiceImpl;
import keyWords.web.service.TimeHandler;
import web.solr.entity.JQDATA;

import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.FacetField.Count;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import web.solr.service.SolrService;

@Controller
@RequestMapping("/")
public class mvcController {
	@Autowired
	SolrService solrService;
	@Autowired
	IKeyWordsServiceImpl keyWordsService;
	@Autowired
	TimeHandler timeHandler;
	
    @RequestMapping("/index")
    public String index(){        
        return "head";
    }
    @RequestMapping("/findSimilar")
    public String findSimilar(){        
        return "findSimilar";
    }
    @RequestMapping("/keyWord")
    public String keyWord(){  
        return "keyWord";
    }
    @RequestMapping("/retrieval")
    public String retrieval(){
        return "retrieval";
    }
    @RequestMapping("/keyWordAnalysis")
    public String keyWordAnalysis(){        
        return "keyWordAnalysis";
    }
    @RequestMapping("listKeyWords")
    public String listKeyWords() throws SolrServerException, IOException, ParseException{
//    	List<JqSegBt> ls = keyWordsService.getObject();
//    	System.out.println("hello===============");
//    	System.out.println(ls.get(1).getId());

    	//获取系统当前时间
    	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");//设置日期格式
    	Date curDate = df.parse("2015-11-29T22:18:00Z");
    	Date dayStart=timeHandler.getTimesmorning();
    	Date weekStart=timeHandler.getTimesWeekmorning();
    	Date tenDayStart=timeHandler.getTimesTenDaymorning();
    	Date monthStart=timeHandler.getTimesMonthmorning();
    	String curDateStr = df.format(curDate);
    	String dayStartStr = df.format(dayStart);
    	String weekStartStr = df.format(weekStart);
    	String tenDayStartStr = df.format(tenDayStart);
    	String monthStartStr = df.format(monthStart);
//		System.out.println(curDateStr+"==="+dayStartStr+"==="+weekStartStr+"==="+tenDayStartStr+"==="+monthStartStr+"===");
//    	keyWordsService.facetTest(dayStartStr,curDateStr);
//    	keyWordsService.facetTest(weekStartStr,curDateStr);
//    	keyWordsService.facetTest(tenDayStartStr,curDateStr);
//    	keyWordsService.facetTest(monthStartStr,curDateStr);
    	List<Count> ls2=keyWordsService.facetTest("2015-11-20T22:18:00Z","2015-11-29T22:18:00Z");
    	
    	
    	
    	return "head";
    }
    @RequestMapping(value="incidentRetrieval",produces="plain/text;charset=UTF-8")
    @ResponseBody
    public String incidentRetrieval(Model model,String startTime,String endTime,String fjajfl1,String fjajfl2,
    		String fjajfl3,String fjajfl4,String sjajfl1,String sjajfl2,String sjajfl3,String sjajfl4,String pcs,String kddlb,String kddlx,String kdd,
    		String fabw1,String fabw2,String fabw3,String queryTxt, String queryDomain,Integer page,Integer rows
    		) throws SolrServerException, IOException{
//    	System.out.println(startTime+"==="+ endTime+"==="+ fjajfl1+"==="+ fjajfl2+"==="+ fjajfl3+"==="+ fjajfl4+"==="+
//    			sjajfl1+"==="+ sjajfl2+"==="+ sjajfl3+"==="+ sjajfl4+"==="+ pcs+"==="+ kddlb+"==="+ kddlx+"==="+ kdd+"==="+ fabw1+"==="+ fabw2+"==="+ fabw3+"==="+ queryTxt+"==="+ queryDomain+"==="+ page+"==="+ rows);
    	List<Object> resListObj= solrService.getDocByConstraints(startTime, endTime, fjajfl1, fjajfl2, fjajfl3, fjajfl4,
    			sjajfl1, sjajfl2, sjajfl3, sjajfl4, pcs, kddlb, kddlx, kdd, fabw1, fabw2, fabw3, queryTxt, queryDomain, page, rows);
    	List<JQDATA> resList = (List<JQDATA>) resListObj.get(0);
    	long docNum = (Long) resListObj.get(1);
    	ObjectMapper mapper = new ObjectMapper(); 
    	Map map=new HashMap();
    	map.put("resultSet", resList);
    	map.put("totalDoc", docNum);
		map.put("totalpages", Math.ceil(docNum*1.0/rows));
		map.put("page", page);
		System.out.println(page+"===page====");
    	String json=mapper.writeValueAsString(map);
    	System.out.println(json);
    	return json;
    }
}