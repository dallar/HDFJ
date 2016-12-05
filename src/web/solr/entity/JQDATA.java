package web.solr.entity;


import java.sql.Timestamp;
import java.util.Date;

import org.apache.solr.client.solrj.beans.Field;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.springframework.stereotype.Repository;

import web.solr.service.CustomDateSerializer;

/*
 * solr返回的警情数据
 * */
@Repository
public class JQDATA {
	@Field
	private String id;
	@Field("BJSJ")
	private Date BJSJ;
	@Field("BT")
	private String BT;
	@Field("JQZY")
	private String JQZY;
	@Field("FKNR")
	private String FKNR;
	@Field("FJAJFL1")
	private String FJAJFL1;
	@Field("FJAJFL2")
	private String FJAJFL2;
	@Field("FJAJFL3")
	private String FJAJFL3;
	@Field("FJAJFL4")
	private String FJAJFL4;
	@Field("SJAJFL1")
	private String SJAJFL1;
	@Field("SJAJFL2")
	private String SJAJFL2;
	@Field("SJAJFL3")
	private String SJAJFL3;
	@Field("SJAJFL4")
	private String SJAJFL4;
	@Field("PCS")
	private String PCS;
	@Field("JQFSDD")
	private String JQFSDD;
	@Field("FJFABW1")
	private String FJFABW1;
	@Field("FJFABW2")
	private String FJFABW2;
	@Field("KDD")
	private String KDD;
	@Field("TIMESTAMP")
	private Timestamp TIMESTAMP;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@JsonSerialize(using = CustomDateSerializer.class)
	public Date getBJSJ() {
		return BJSJ;
	}
	public void setBJSJ(Date bJSJ) {
		BJSJ = bJSJ;
	}
	public String getBT() {
		return BT;
	}
	public void setBT(String bT) {
		BT = bT;
	}
	public String getJQZY() {
		return JQZY;
	}
	public void setJQZY(String jQZY) {
		JQZY = jQZY;
	}
	public String getFKNR() {
		return FKNR;
	}
	public void setFKNR(String fKNR) {
		FKNR = fKNR;
	}
	public String getFJAJFL1() {
		return FJAJFL1;
	}
	public void setFJAJFL1(String fJAJFL1) {
		FJAJFL1 = fJAJFL1;
	}
	public String getFJAJFL2() {
		return FJAJFL2;
	}
	public void setFJAJFL2(String fJAJFL2) {
		FJAJFL2 = fJAJFL2;
	}
	public String getFJAJFL3() {
		return FJAJFL3;
	}
	public void setFJAJFL3(String fJAJFL3) {
		FJAJFL3 = fJAJFL3;
	}
	public String getFJAJFL4() {
		return FJAJFL4;
	}
	public void setFJAJFL4(String fJAJFL4) {
		FJAJFL4 = fJAJFL4;
	}
	public String getSJAJFL1() {
		return SJAJFL1;
	}
	public void setSJAJFL1(String sJAJFL1) {
		SJAJFL1 = sJAJFL1;
	}
	public String getSJAJFL2() {
		return SJAJFL2;
	}
	public void setSJAJFL2(String sJAJFL2) {
		SJAJFL2 = sJAJFL2;
	}
	public String getSJAJFL3() {
		return SJAJFL3;
	}
	public void setSJAJFL3(String sJAJFL3) {
		SJAJFL3 = sJAJFL3;
	}
	public String getSJAJFL4() {
		return SJAJFL4;
	}
	public void setSJAJFL4(String sJAJFL4) {
		SJAJFL4 = sJAJFL4;
	}
	public String getPCS() {
		return PCS;
	}
	public void setPCS(String pCS) {
		PCS = pCS;
	}
	public String getJQFSDD() {
		return JQFSDD;
	}
	public void setJQFSDD(String jQFSDD) {
		JQFSDD = jQFSDD;
	}
	public String getFJFABW1() {
		return FJFABW1;
	}
	public void setFJFABW1(String fJFABW1) {
		FJFABW1 = fJFABW1;
	}
	public String getFJFABW2() {
		return FJFABW2;
	}
	public void setFJFABW2(String fJFABW2) {
		FJFABW2 = fJFABW2;
	}
	public String getKDD() {
		return KDD;
	}
	public void setKDD(String kDD) {
		KDD = kDD;
	}
	public Timestamp getTIMESTAMP() {
		return TIMESTAMP;
	}
	public void setTIMESTAMP(Timestamp tIMESTAMP) {
		TIMESTAMP = tIMESTAMP;
	}
	
}
