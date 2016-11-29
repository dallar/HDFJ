package keyWords.web.service;

import org.springframework.stereotype.Service;

import keyWords.web.dao.IBaseDaoImpl;
import keyWords.web.entity.JqSegBt;


@Service("keyWordsService")
public class IKeyWordsServiceImpl extends IBaseDaoImpl<JqSegBt> implements IKeyWordsService{
}
