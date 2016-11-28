package test.SpringMVC;

import java.util.List;

import javax.annotation.Resource;

import keyWords.web.dao.IBaseDaoImpl;
import keyWords.web.entity.JqSegBt;
import keyWords.web.service.IKeyWordsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class mvcController {

	
	//@Resource(name="keyWordsService")
	IKeyWordsService keyWordsService;
	
    @RequestMapping("/index")
    public String hello(){        
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
    public String listKeyWords(){
    	List<JqSegBt> ls = keyWordsService.getObject();
    	System.out.println("hello===============");
    	System.out.println(ls.get(1).getId());
    	return "head";
    }
}