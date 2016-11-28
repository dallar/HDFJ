package keyWords.web.dao;
import java.lang.reflect.ParameterizedType;
import java.util.List;
import javax.annotation.Resource;

import keyWords.web.entity.JqSegBt;

import org.hibernate.Query;  
import org.hibernate.SessionFactory;  
import org.springframework.transaction.annotation.Transactional;


@SuppressWarnings("unchecked")
@Transactional
public class IBaseDaoImpl<T> implements IBaseDao<T> {
	//ע��seeeionFactory
	@Resource
	SessionFactory sessionFactory;
	Class clazz;
//	private SessionFactory sessionFactory;  
//    
//    public void setSessionFactory(SessionFactory sessionFactory) {  
//        this.sessionFactory = sessionFactory;  
//    }
//    
	//���췽������ȡT����ʵ����
    public IBaseDaoImpl(){
	    ParameterizedType pType=(ParameterizedType) this.getClass().getGenericSuperclass();
	    clazz=(Class) pType.getActualTypeArguments()[0];
	    System.out.print(clazz.getSimpleName());
	    
	    }
    //��ѯ���ж���
    public List<T> getObject(){
    	String hql="from "+clazz.getSimpleName();
    	Query query=sessionFactory.getCurrentSession().createQuery(hql);
    	return query.list();
    }
}
