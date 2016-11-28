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
	//注入seeeionFactory
	@Resource
	SessionFactory sessionFactory;
	Class clazz;
//	private SessionFactory sessionFactory;  
//    
//    public void setSessionFactory(SessionFactory sessionFactory) {  
//        this.sessionFactory = sessionFactory;  
//    }
//    
	//构造方法：获取T的真实类型
    public IBaseDaoImpl(){
	    ParameterizedType pType=(ParameterizedType) this.getClass().getGenericSuperclass();
	    clazz=(Class) pType.getActualTypeArguments()[0];
	    System.out.print(clazz.getSimpleName());
	    
	    }
    //查询所有对象
    public List<T> getObject(){
    	String hql="from "+clazz.getSimpleName();
    	Query query=sessionFactory.getCurrentSession().createQuery(hql);
    	return query.list();
    }
}
