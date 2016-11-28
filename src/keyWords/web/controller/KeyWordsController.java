package keyWords.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;  

@Controller
@RequestMapping("/KeyWords")
public class KeyWordsController {

	
	
@RequestMapping("listKeyWords")
public String listKeyWords(){
	System.out.println();
	return "head";
}
}
