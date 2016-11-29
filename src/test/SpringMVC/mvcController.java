package test.SpringMVC;

import java.io.IOException;

import javax.annotation.Resource;


import keyWords.web.service.IKeyWordsService;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import web.solr.service.SolrService;

@Controller
@RequestMapping("/")
public class mvcController {
	@Autowired
	SolrService solrService;
	@Resource(name="keyWordsService")
	IKeyWordsService keyWordsService;
	
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
    public String listKeyWords() throws SolrServerException, IOException{
//    	List<JqSegBt> ls = keyWordsService.getObject();
//    	System.out.println("hello===============");
//    	System.out.println(ls.get(1).getId());
    	System.out.println(solrService.getDocById("23697560"));
    	return "head";
    }
}