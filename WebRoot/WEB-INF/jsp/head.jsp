<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
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
							 	<a data-target=".navbar-responsive-collapse" data-toggle="collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a> <a href="#" class="brand">�����ı������ھ�ϵͳ</a>
							<div class="nav-collapse collapse navbar-responsive-collapse">
								<ul class="nav">
									<li class="active">
										<a href="index.jsp">��ҳ</a>
									</li>
									<li>
										<a href="retrieval">��������</a>
									</li>
									<li>
										<a href="findSimilar">���ư�������</a>
									</li>
									<li>
										<a href="keyWord">�ؼ���ά��</a>
									</li>
									<li>
										<a href="keyWordAnalysis">�ؼ���Ӧ�÷���</a>
									</li>
									<li class="dropdown">
									 	<a data-toggle="dropdown" class="dropdown-toggle" href="#">����<strong class="caret"></strong></a>
										<ul class="dropdown-menu">
											<li>
												<a href="#">��������</a>
											</li>
											<li>
												<a href="#">ͬ���ؼ���</a>
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
					�ո�Ƶ��
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
<!-- 			<input type="text" value="��������Ҫ���ҵ���Ϣ..."  onfocus="if(this.value=='��������Ҫ���ҵ���Ϣ...'){this.value=''}" onblur="if(this.value==''){this.value='��������Ҫ���ҵ���Ϣ...'}"/> -->
			<div class="pagination pagination-right pagination-small">
				<ul contenteditable="true">
					<li><a href="#">��һҳ</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">��һҳ</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					�ܸ�Ƶ��
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
					<li><a href="#">��һҳ</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">��һҳ</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					Ѯ��Ƶ��
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
					<li><a href="#">��һҳ</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">��һҳ</a></li>
				</ul>
			</div>
		</div>
		<div class="row-fluid">
			<table class="table table-condensed table-striped">
				<h3>
					�¸�Ƶ��
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
					<li><a href="#">��һҳ</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">��һҳ</a></li>
				</ul>
			</div>
		</div>
	</div>

  </body>
</html>
