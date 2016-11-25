<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>findSimilaryPage</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet"  href="css/bootstrap.min.css">
	<link rel="stylesheet"  href="css/bootstrap-responsive.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
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
									<li>
										<a href="retrieval">案件检索</a>
									</li>
									<li class="active">
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
		<div class="row-fluid">
			
		</div>
	</div>

  </body>
</html>
