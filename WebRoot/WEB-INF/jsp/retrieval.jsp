<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>retrievalPage</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet"  href="css/bootstrap.css">
	<link rel="stylesheet"  href="css/bootstrap-responsive.min.css">
	<link rel="stylesheet"  href="css/bootstrap-datetimepicker.min.css">
	<link rel="stylesheet"  href="css/ui.jqgrid.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	
	
	<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.10.3.custom.js"></script>
	<script type="text/javascript" src="js/grid.locale-cn.js"></script>
	<script type="text/javascript" src="js/jquery.jqGrid.src.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.zh-CN.js"></script>
	<script type="text/javascript" src="js/retrieval.js"></script>
	<script type="text/javascript" src="js/init/sjajfl.js"></script> 
	<script type="text/javascript" src="js/init/fjajfl.js"></script> 
    <script type="text/javascript" src="js/init/dian.js"></script>
    <script type="text/javascript" src="js/init/fabw.js"></script>
    <script type="text/javascript" src="js/init/kddControl.js"></script>
    <script type="text/javascript" src="js/init/kddInfo.js"></script>
  </head>
  
  <body>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span12">
					<div class="navbar">
						<div class="navbar-inner">
							<div class="container-fluid">
							 	<a data-target=".navbar-responsive-collapse" data-toggle="collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a> <a href="#" class="brand">警情文本分析挖掘系统</a>
							<div class="nav-collapse collapse navbar-responsive-collapse">
								<ul class="nav">
									<li>
										<a href="index">主页</a>
									</li>
									<li class="active">
										<a href="retrieval">案件检索</a>
									</li>
									<li>
										<a href="findSimilar">相似案件检索</a>
									</li>
									<li>
										<a href="keyWord">关键词维护</a>
									</li>
									<li>
										<a href="keyWordAnalysis">关键词应用分析</a>
									</li>
									<li class="dropdown">
									 	<a data-toggle="dropdown" class="dropdown-toggle" href="#">设置<strong class="caret"></strong></a>
										<ul class="dropdown-menu">
											<li>
												<a href="#">更新索引</a>
											</li>
											<li>
												<a href="#">同步关键词</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
	
	<div class="container-fluid">
		<div id="constraint" class="row-fluid">
			<div class="span1"></div>
			<div class="span11">
				<div class="row-fluid">
					<div class="control-label span1 labelLine" style="width:85px;">案件检索：</div>
					<div class="input-append span10 retrivelSpan10" style="margin-left:0px">
						<select id="queryDomain" class="selectpicker add-on" style="height:30px;width:95px">
							<option>标题</option>
  							<option>警情摘要</option>
  							<option>反馈内容</option>
  						</select>
						<input id="queryTxt" style="height:30px;width:50%" type="text">
    					<span id="incidentSearch" class="add-on"><i class="icon-search"></i></span>
					</div>
				</div>
				
				<div class="row-fluid">
					<div class="control-label span1 labelLine" style="width:85px">开始时间：</div>
					<div class="input-append date form_datetime span3" style="margin-left:0px">
    					<input id="startTime" style="height:30px" type="text" value="" readonly>
    					<span class="add-on"><i class="icon-calendar"></i></span>
					</div>
					<div class="control-label span1 labelLine" style="width:85px">结束时间：</div>
					<div class="input-append date form_datetime span4" style="margin-left:0px">
    					<input id="endTime" style="height:30px" type="text" value="" readonly>
    					<span class="add-on"><i class="icon-calendar"></i></span>
					</div>
				</div>
				<div>
					<a data-toggle="collapse" href="#collapseOne">
					更多条件
					</a>
					<div id="collapseOne" class="panel-collapse collapse">
						<div class="row-fluid">
							<div class="control-label span1 labelLine" style="width:85px;">市局分类：</div>
							<div class="controls span10" style="margin-left:0px">
							<SELECT id="sjajfl1_sel" style="" name="sjajfl1"
							onchange="clearValue('sjajfl2_sel');clearValue('sjajfl3_sel');clearValue('sjajfl4_sel');changeAJLX(this.value,'sjajfl2_sel',SJAJFL);"></SELECT>
							<SELECT id="sjajfl2_sel" style="" name="sjajfl2" 
							onchange="clearValue('sjajfl3_sel');clearValue('sjajfl4_sel');changeAJLX(this.value,'sjajfl3_sel',SJAJFL);"></SELECT>
							<SELECT id="sjajfl3_sel" style="" name="sjajfl3"
							onchange="clearValue('sjajfl4_sel');changeAJLX(this.value,'sjajfl4_sel',SJAJFL);"></SELECT>
							<select id="sjajfl4_sel" name="sjajfl4"  style=""></select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="control-label span1 labelLine" style="width:85px;">分局分类：</div>
							<div class="controls span10"  style="margin-left:0px">
							<SELECT id="fjajfl1_sel" style="" name="fjajfl1"
							onchange="clearValue('fjajfl2_sel');clearValue('fjajfl3_sel');clearValue('fjajfl4_sel');changeAJLX(this.value,'fjajfl2_sel',FJAJFL);"></SELECT>
							<SELECT id="fjajfl2_sel" style="" name="fjajfl2"
							onchange="clearValue('fjajfl3_sel');clearValue('fjajfl4_sel');changeAJLX(this.value,'fjajfl3_sel',FJAJFL);"></SELECT>
							<SELECT id="fjajfl3_sel" style="" name="fjajfl3"
							onchange="clearValue('fjajfl4_sel');changeAJLX(this.value,'fjajfl4_sel',FJAJFL);"></SELECT>
							<select id="fjajfl4_sel" name="fjajfl4"  style=""></select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="control-label span1 labelLine" style="width:85px;text-align:right">派出所：</div>
							<div class="controls span10"  style="margin-left:0px">
							<select id="pcs_sel" style="" onchange="pcsChange();"><option></option></select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="control-label span1 labelLine" style="width:85px;text-align:right">块段点：</div>
							<div class="controls span10"  style="margin-left:0px">
							<select id="KDD_pcs_sel" style=""onchange="clearValue('kddlx_sel');clearValue('kdd_sel');clearValue('fabw1_sel');clearValue('fabw2_sel');" disabled="disabled"></select>
							<select id="kddlb_sel"  style="" onchange="clearValue('kdd_sel');clearValue('fabw1_sel');clearValue('fabw2_sel');changek1(this.value,'kddlx_sel');"></select>
							<select id="kddlx_sel" style="" onchange="changek2(this.value,'KDD_pcs_sel','kdd_sel');changeFABW1(this.value,'fabw1_sel',FABW1);changeFABWT2(this.value,'fabw2_sel',FABW2);changKa('kdd_sel');changKa('fabw1_sel');"></select>
							<select id="kdd_sel"  style=""></select>
							</div>
						</div>
						<div class="row-fluid">
							<div class="control-label span1 labelLine" style="width:85px;">发案部位：</div>
							<div class="controls span10"  style="margin-left:0px">
								<select id="fabw1_sel" style="" onchange="changeFABW2(this.value,'fabw2_sel',FABW2,FABW1);changKa('fabw2_sel');"></select>
								<select id="fabw2_sel" style=""></select>
							</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row-fluid">
			<div class="span1"></div>
			<div class="span7">
				<table id="jqgrid"></table>
				<div id="pager"></div>
			</div>
			<div class="span4">
			</div>
		</div>
  </body>
</html>
