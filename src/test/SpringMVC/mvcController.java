package test.SpringMVC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class mvcController {

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
}