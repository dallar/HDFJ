<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>homePage</title>
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
									<li class="active">
										<a href="index.jsp">主页</a>
									</li>
									<li>
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
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					日高频词
				</h3>
				
				<tbody>
					<tr>
						<td>
							TB-Monthly
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							TB-Monthly
						</td>
					</tr>
					<tr class="success">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Approved
						</td>
						<td>
						</td>
					</tr>
					<tr class="error">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							02/04/2012
						</td>
						<td>
							Declined
						</td>
						<td>
						</td>
					</tr>
					<tr class="warning">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							03/04/2012
						</td>
						<td>
							Pending
						</td>
						<td>
						</td>
					</tr>
					<tr class="info">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							04/04/2012
						</td>
						<td>
							Call in to confirm
						</td>
						<td>
						</td>
					</tr>
				</tbody>
			</table>
<!-- 			<input type="text" value="请输入你要查找的信息..."  onfocus="if(this.value=='请输入你要查找的信息...'){this.value=''}" onblur="if(this.value==''){this.value='请输入你要查找的信息...'}"/> -->
			<div class="pagination pagination-right pagination-small">
				<ul contenteditable="true">
					<li><a href="#">上一页</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">下一页</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					周高频词
				</h3>
				
				<tbody>
					<tr>
						<td>
							TB-Monthly
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							TB-Monthly
						</td>
					</tr>
					<tr class="success">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Approved
						</td>
						<td>
						</td>
					</tr>
					<tr class="error">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							02/04/2012
						</td>
						<td>
							Declined
						</td>
						<td>
						</td>
					</tr>
					<tr class="warning">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							03/04/2012
						</td>
						<td>
							Pending
						</td>
						<td>
						</td>
					</tr>
					<tr class="info">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							04/04/2012
						</td>
						<td>
							Call in to confirm
						</td>
						<td>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination pagination-right pagination-small">
				<ul contenteditable="true">
					<li><a href="#">上一页</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">下一页</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					旬高频词
				</h3>
				
				<tbody>
					<tr>
						<td>
							TB-Monthly
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							TB-Monthly
						</td>
					</tr>
					<tr class="success">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Approved
						</td>
						<td>
						</td>
					</tr>
					<tr class="error">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							02/04/2012
						</td>
						<td>
							Declined
						</td>
						<td>
						</td>
					</tr>
					<tr class="warning">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							03/04/2012
						</td>
						<td>
							Pending
						</td>
						<td>
						</td>
					</tr>
					<tr class="info">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							04/04/2012
						</td>
						<td>
							Call in to confirm
						</td>
						<td>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination pagination-right pagination-small">
				<ul contenteditable="true">
					<li><a href="#">上一页</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">下一页</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					月高频词
				</h3>
				
				<tbody>
					<tr>
						<td>
							TB-Monthly
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Default
						</td>
						<td>
							TB-Monthly
						</td>
					</tr>
					<tr class="success">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							01/04/2012
						</td>
						<td>
							Approved
						</td>
						<td>
						</td>
					</tr>
					<tr class="error">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							02/04/2012
						</td>
						<td>
							Declined
						</td>
						<td>
						</td>
					</tr>
					<tr class="warning">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							03/04/2012
						</td>
						<td>
							Pending
						</td>
						<td>
						</td>
					</tr>
					<tr class="info">
						<td>
						</td>
						<td>
							TB - Monthly
						</td>
						<td>
							04/04/2012
						</td>
						<td>
							Call in to confirm
						</td>
						<td>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="pagination pagination-right pagination-small">
				<ul contenteditable="true">
					<li><a href="#">上一页</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">下一页</a></li>
				</ul>
			</div>
		</div>
	</div>

  </body>
</html>
