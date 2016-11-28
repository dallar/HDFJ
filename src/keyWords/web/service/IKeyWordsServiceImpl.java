package keyWords.web.service;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import keyWords.web.dao.IBaseDaoImpl;
import keyWords.web.entity.JqSegBt;


@Service("keyWordsService")
public class IKeyWordsServiceImpl extends IBaseDaoImpl<JqSegBt> implements IKeyWordsService{
}
