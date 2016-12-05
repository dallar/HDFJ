$().ready(function(){
	$(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left",
        language: "zh-CN"
    });
//	document.onkeydown = function(e){ 
//	    var ev = document.all ? window.event : e;
//	    if(ev.keyCode==13) {
//	    	search();
//	     }
//	}
	initAJFL('sjajfl1_sel',SJAJFL,'','');//初始化市局案件类型
	initAJFL('fjajfl1_sel',FJAJFL,'','');//初始化分局案件类型
    initKDD('kddlb_sel',ZRQLB,'','');//初始化块段点
    initPCS('pcs_sel',GXDW,'','');//初始化派出所
    $("#incidentSearch").click(search);
});
var startTime="";
var endTime="";
var fjajfl1="";
var fjajfl2="";
var fjajfl3="";
var fjajfl4="";
var sjajfl1="";
var sjajfl2="";
var sjajfl3="";
var sjajfl4="";
var pcs="";
var kddlb="";
var kddlx="";
var kdd="";
var fabw1="";
var fabw2="";
var jqfsdd="";
var queryTxt="";
var queryDomain="";
var page=1;
var rows=20;
function search(){
	if($("#startTime").val!==null&&$("#startTime").val!==""){
		startTime=$("#startTime").val();
	}
	if($("#endTime").val!==null&&$("#endTime").val!==""){
		endTime=$("#endTime").val();
	}
	queryTxt = $("#queryTxt").val();
	if($("#queryDomain").find("option:selected").text()!==null&&$("#queryDomain").find("option:selected").text()!=""){
		queryDomain = $("#queryDomain").find("option:selected").text();}
	if($("#fjajfl1_sel").find("option:selected").text()!==null&&$("#fjajfl1_sel").find("option:selected").text()!=""){
		fjajfl1 = $("#fjajfl1_sel").find("option:selected").text();}
	if($("#fjajfl2_sel").find("option:selected").text()!==null&&$("#fjajfl2_sel").find("option:selected").text()!=""){
		fjajfl2 = $("#fjajfl2_sel").find("option:selected").text();}
	if($("#fjajfl3_sel").find("option:selected").text()!==null&&$("#fjajfl3_sel").find("option:selected").text()!=""){
		fjajfl3 = $("#fjajfl3_sel").find("option:selected").text();}
	if($("#fjajfl4_sel").find("option:selected").text()!==null&&$("#fjajfl4_sel").find("option:selected").text()!=""){
		fjajfl4 = $("#fjajfl4_sel").find("option:selected").text();}
	if($("#sjajfl1_sel").find("option:selected").text()!==null&&$("#sjajfl1_sel").find("option:selected").text()!=""){
		sjajfl1 = $("#sjajfl1_sel").find("option:selected").text();}
	if($("#sjajfl2_sel").find("option:selected").text()!==null&&$("#sjajfl2_sel").find("option:selected").text()!=""){
		sjajfl2 = $("#sjajfl2_sel").find("option:selected").text();}
	if($("#sjajfl3_sel").find("option:selected").text()!==null&&$("#sjajfl3_sel").find("option:selected").text()!=""){
		sjajfl3 = $("#sjajfl3_sel").find("option:selected").text();}
	if($("#sjajfl4_sel").find("option:selected").text()!==null&&$("#sjajfl4_sel").find("option:selected").text()!=""){
		sjajfl4 = $("#sjajfl4_sel").find("option:selected").text();}
	if($("#pcs_sel").find("option:selected").text()!==null&&$("#pcs_sel").find("option:selected").text()!=""){
		pcs = $("#pcs_sel").find("option:selected").text().trim();}
	if($("#kddlb_sel").find("option:selected").text()!==null&&$("#kddlb_sel").find("option:selected").text()!=""){
		kddlb = $("#kddlb_sel").find("option:selected").text();}
	if($("#kddlx_sel").find("option:selected").text()!==null&&$("#kddlx_sel").find("option:selected").text()!=""){
		kddlx = $("#kddlx_sel").find("option:selected").text();}
	if($("#kdd_sel").find("option:selected").text()!==null&&$("#kdd_sel").find("option:selected").text()!=""){
		kdd = $("#kdd_sel").find("option:selected").text();}
	if($("#fabw1_sel").find("option:selected").text()!==null&&$("#fabw1_sel").find("option:selected").text()!=""){
		fabw1 = $("#fabw1_sel").find("option:selected").text();}
	if($("#fabw2_sel").find("option:selected").text()!==null&&$("#fabw2_sel").find("option:selected").text()!=""){
		fabw2 = $("#fabw2_sel").find("option:selected").text();}
	var request = $.ajax({
		url: "/HDFJ/incidentRetrieval",
		type: "POST",
		data: {
			startTime : startTime,
			endTime : endTime,
			fjajfl1 : fjajfl1,
			fjajfl2 : fjajfl2,
			fjajfl3 : fjajfl3,
			fjajfl4 : fjajfl4,
			sjajfl1 : sjajfl1,
			sjajfl2 : sjajfl2,
			sjajfl3 : sjajfl3,
			sjajfl4 : sjajfl4,
			pcs : pcs,
			kddlb : kddlb,
			kddlx : kddlx,
			kdd : kdd,
			fabw1 : fabw1,
			fabw2 : fabw2,
			queryTxt : queryTxt,
			queryDomain :queryDomain,
			page : page,
			rows : rows
			},
		success : function(resObj) {
//			var testJson = $.parseJSON(resObj); 
			showResult(resObj);
		},
		error : function(){
			window.alert("wrong");
		}
	}).done(function(msg){
	}).fail(function(){
		window.alert("on wrong");
	});
	request.fail(function() {
	    	window.alert( "请求失败: ");
	    
	});
}


function clearValue(SEL)
{
  	var sel=document.getElementById(SEL);
	if(!sel || typeof(sel)=='undefined') return;	
        
    sel.value="";//清空管辖单位名称
}
function initAJFL(SEL,myArray,value1,value2){
    var sel=document.getElementById(SEL);
    if(!sel || typeof(sel)=='undefined') return;
    sel.options.length=0;    
    var newOpt = document.createElement("OPTION");
    newOpt.setAttribute("value",value1);
    newOpt.innerHTML = value2;
    sel.appendChild(newOpt);
        //var count1=0;
    for(var count=0;count<myArray.length;count++)
    {
    var newOpt = document.createElement("OPTION");
       if(SEL=='fjajfl1_sel'&&myArray[count][2]==0){

        newOpt.setAttribute("value",myArray[count][0]);
        newOpt.innerHTML = myArray[count][1];
        sel.appendChild(newOpt);
       }
       if(SEL=='sjajfl1_sel'&&myArray[count][2]==0){
       newOpt.setAttribute("value",myArray[count][0]);
       newOpt.innerHTML = myArray[count][1];
       sel.appendChild(newOpt);
       }
      }
   }
//块段点初始化
function initKDD(SEL,myArray,value1,value2){
    var sel=document.getElementById(SEL);
    if(!sel || typeof(sel)=='undefined') return;
    sel.options.length=0;    
    var newOpt = document.createElement("OPTION");
    newOpt.setAttribute("value",value1);
    newOpt.innerHTML = value2;
    sel.appendChild(newOpt);
        //var count1=0;
    for(var count=0;count<myArray.length;count++)
    {
    var newOpt = document.createElement("OPTION");
    if(SEL=='KDD_pcs_sel'||SEL=='kddlb_sel'){

        newOpt.setAttribute("value",myArray[count][0]);
        newOpt.innerHTML = myArray[count][1];
        sel.appendChild(newOpt);
           }
      }
   }

//派出所初始化
function initPCS(SEL,myArray,value1,value2){
    var sel=document.getElementById(SEL);
    if(!sel || typeof(sel)=='undefined') return;
    sel.options.length=0;    
    var newOpt = document.createElement("OPTION");
    newOpt.setAttribute("value",value1);
    newOpt.innerHTML = value2;
    sel.appendChild(newOpt);
        //var count1=0;
    for(var count=0;count<myArray.length;count++)
    {
    var newOpt = document.createElement("OPTION");
    if(SEL=='pcs_sel'){

        newOpt.setAttribute("value",myArray[count][0]);
        newOpt.innerHTML = myArray[count][1];
        sel.appendChild(newOpt);
           }
      }
   }
//当派出所改变时，同时改变Kdd的派出所
function pcsChange(){
	var sel=document.getElementById('KDD_pcs_sel');
	var pcsId=$('#pcs_sel').val();
	var pcsMc=$('#pcs_sel').find("option:selected").text();
	sel.options.length=0;
	var newOpt = document.createElement("OPTION");
	newOpt.setAttribute("value",pcsId);
	newOpt.innerHTML = pcsMc;
	sel.appendChild(newOpt);
}

//显示结果
function showResult(){
	$("#jqgrid").GridUnload();
	$("#jqgrid").jqGrid(
	{
	   	url: '/HDFJ/incidentRetrieval',
	   	datatype: "json",
		mtype: "POST",
		contentType: "application/x-www-form-urlencoded; charset=utf-8", 
		width: 1000,
		height: 'auto',
		altRows:true,  //隔行换色
		altclass:'ui-widget-content-altclass',  //默认ui-priority-secondary
		jsonReader: {
			root :"resultSet",
			total : "totalpages",
			records : "totalDoc",
			page : "page",
			repeatitems : false,
		},
	   	colNames:["接警序号",
	   	          "报警时间",
	   	          "标题", 
	   	          "摘要"],
	   	colModel:[
	   		{name:'id',index:'id',align:"center",sortable:false},
	   		{name:'bjsj',index:'bjsj',align:"center",sortable:true},
	   		{name:'bt',index:'bt',align:"left",sortable:false},
	   		{name:'jqzy',index:'jqzy',align:"left",sortable:false}],
		pager : "#pager",
		caption: "检索结果",
		rowNum: 20, 
		rowList:[10,20,30,50,100], //可调整每页显示的记录数
		viewrecords: true, //是否显示行数 
		rownumbers: true, // 序号列
		recordtext:"共{2}个结果中的{0}-{1}",//记录 {0}显示第一条记录，{1}显示最后一条记录{2}服务器返回的总记录
		emptyrecords:"没有符合条件的案件",
		viewrecords: true,
		loadtext : "请稍候...",
		pgtext:"Page{0}of{1}",
		pgbuttons:true,
		postData:{
			startTime : startTime,
			endTime : endTime,
			fjajfl1 : fjajfl1,
			fjajfl2 : fjajfl2,
			fjajfl3 : fjajfl3,
			fjajfl4 : fjajfl4,
			sjajfl1 : sjajfl1,
			sjajfl2 : sjajfl2,
			sjajfl3 : sjajfl3,
			sjajfl4 : sjajfl4,
			pcs : pcs,
			kddlb : kddlb,
			kddlx : kddlx,
			kdd : kdd,
			fabw1 : fabw1,
			fabw2 : fabw2,
			queryTxt : queryTxt,
			queryDomain :queryDomain,
		},
		gridComplete : function() {
		},
		ondblClickRow : function(rowid,iRow,iCol,e) {//双击一行
		}
	  }
			);

  $("#jqgrid").jqGrid(
		'navGrid',
		'#pager',
		{refresh:true, edit:false, add:false, del:false, search:false});

}