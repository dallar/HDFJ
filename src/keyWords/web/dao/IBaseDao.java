package keyWords.web.dao;

import java.util.List;

import keyWords.web.entity.JqSegBt;
public interface IBaseDao<T> {
	public List<T> getObject();
}
