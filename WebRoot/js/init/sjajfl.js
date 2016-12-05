//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组一般都为AJLX
function changeAJLX(value,id,array)
{
	var sel=document.getElementById(id);
	sel.options.length=0;
	sel.options.add(new Option('',''));
	for(count=0;count<array.length;count++)
	{
		if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");			
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
	}
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组一般都为AJLX
function changeAJLX_qk(value,id,array)
{
	var sel=document.getElementById(id);
	sel.options.length=0;
	//sel.options.add(new Option('',''));
	var bz=0;
	for(count=0;count<array.length;count++)
	{
		if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");
			if(bz==0)
      	    {
                newOpt.selected=true;
                bz=1;
            }
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
	}
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组一般都为AJLX
function changeAJLX_qkx(pid,id,array)
{
	var sel=document.getElementById(id);
	var psel=document.getElementById(pid);
	if(psel.value!=null){
	  var value=psel.value;
	}else{
	  var value=-1;
	}	
	sel.options.length=0;
	//sel.options.add(new Option('',''));
	var bz=0;
	for(count=0;count<array.length;count++)
	{
		if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");
			if(bz==0)
      	    {
                newOpt.selected=true;
                bz=1;
            }
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
	}
}
var SJAJFL = new Array();
SJAJFL[0]=new Array();SJAJFL[0][0]='103';SJAJFL[0][1]='刑事案件';SJAJFL[0][2]='0';
SJAJFL[1]=new Array();SJAJFL[1][0]='104';SJAJFL[1][1]='治安案件';SJAJFL[1][2]='0';
SJAJFL[2]=new Array();SJAJFL[2][0]='105';SJAJFL[2][1]='纠纷、求助、其他情况';SJAJFL[2][2]='0';
SJAJFL[4]=new Array();SJAJFL[4][0]='1378';SJAJFL[4][1]='社情民意';SJAJFL[4][2]='0';
SJAJFL[3]=new Array();SJAJFL[3][0]='108';SJAJFL[3][1]='无';SJAJFL[3][2]='0';
SJAJFL[5]=new Array();SJAJFL[5][0]='106';SJAJFL[5][1]='无';SJAJFL[5][2]='108';
SJAJFL[6]=new Array();SJAJFL[6][0]='110';SJAJFL[6][1]='抢劫';SJAJFL[6][2]='103';
SJAJFL[7]=new Array();SJAJFL[7][0]='111';SJAJFL[7][1]='抢夺';SJAJFL[7][2]='103';
SJAJFL[8]=new Array();SJAJFL[8][0]='112';SJAJFL[8][1]='盗窃';SJAJFL[8][2]='103';
SJAJFL[9]=new Array();SJAJFL[9][0]='113';SJAJFL[9][1]='诈骗';SJAJFL[9][2]='103';
SJAJFL[10]=new Array();SJAJFL[10][0]='114';SJAJFL[10][1]='侵犯财产';SJAJFL[10][2]='103';
SJAJFL[11]=new Array();SJAJFL[11][0]='115';SJAJFL[11][1]='侵犯公民权利';SJAJFL[11][2]='103';
SJAJFL[12]=new Array();SJAJFL[12][0]='116';SJAJFL[12][1]='妨害社会管理秩序';SJAJFL[12][2]='103';
SJAJFL[13]=new Array();SJAJFL[13][0]='117';SJAJFL[13][1]='妨害公共安全';SJAJFL[13][2]='103';
SJAJFL[14]=new Array();SJAJFL[14][0]='118';SJAJFL[14][1]='其它（xs）';SJAJFL[14][2]='103';
SJAJFL[15]=new Array();SJAJFL[15][0]='184';SJAJFL[15][1]='（治）妨害社会管理秩序';SJAJFL[15][2]='104';
SJAJFL[16]=new Array();SJAJFL[16][0]='185';SJAJFL[16][1]='侵犯公私财物';SJAJFL[16][2]='104';
SJAJFL[17]=new Array();SJAJFL[17][0]='186';SJAJFL[17][1]='侵犯人权';SJAJFL[14][7]='104';
SJAJFL[18]=new Array();SJAJFL[18][0]='187';SJAJFL[18][1]='治安灾害事故';SJAJFL[18][2]='104';
SJAJFL[19]=new Array();SJAJFL[19][0]='188';SJAJFL[19][1]='扰乱社会秩序';SJAJFL[19][2]='104';
SJAJFL[20]=new Array();SJAJFL[20][0]='189';SJAJFL[20][1]='其它（za）';SJAJFL[20][2]='104';
SJAJFL[21]=new Array();SJAJFL[21][0]='242';SJAJFL[21][1]='纠纷';SJAJFL[21][2]='105';
SJAJFL[22]=new Array();SJAJFL[22][0]='243';SJAJFL[22][1]='求助';SJAJFL[22][2]='105';
SJAJFL[23]=new Array();SJAJFL[23][0]='244';SJAJFL[23][1]='滋扰';SJAJFL[23][2]='105';
SJAJFL[24]=new Array();SJAJFL[24][0]='245';SJAJFL[24][1]='涉及法轮功';SJAJFL[24][2]='105';
SJAJFL[25]=new Array();SJAJFL[25][0]='246';SJAJFL[25][1]='其它（qt）';SJAJFL[25][2]='105';
SJAJFL[26]=new Array();SJAJFL[26][0]='1379';SJAJFL[26][1]='行政司法';SJAJFL[26][2]='1378';
SJAJFL[27]=new Array();SJAJFL[27][0]='1380';SJAJFL[27][1]='社会问题';SJAJFL[27][2]='1378';
SJAJFL[28]=new Array();SJAJFL[28][0]='1381';SJAJFL[28][1]='政府工作';SJAJFL[28][2]='1378';
SJAJFL[29]=new Array();SJAJFL[29][0]='1382';SJAJFL[29][1]='治安问题';SJAJFL[29][2]='1378';
SJAJFL[30]=new Array();SJAJFL[30][0]='1383';SJAJFL[30][1]='其他';SJAJFL[30][2]='1378';
SJAJFL[31]=new Array();SJAJFL[31][0]='119';SJAJFL[31][1]='拦路抢劫';SJAJFL[31][2]='110';
SJAJFL[32]=new Array();SJAJFL[32][0]='120';SJAJFL[32][1]='入室抢劫';SJAJFL[32][2]='110';
SJAJFL[33]=new Array();SJAJFL[33][0]='121';SJAJFL[33][1]='抢劫出租汽车司机财物';SJAJFL[33][2]='110';
SJAJFL[34]=new Array();SJAJFL[34][0]='122';SJAJFL[34][1]='抢劫机动车';SJAJFL[34][2]='110';
SJAJFL[35]=new Array();SJAJFL[35][0]='123';SJAJFL[35][1]='其它（xsl）';SJAJFL[35][2]='110';
SJAJFL[36]=new Array();SJAJFL[36][0]='126';SJAJFL[36][1]='抢夺';SJAJFL[36][2]='111';
SJAJFL[37]=new Array();SJAJFL[37][0]='129';SJAJFL[37][1]='入室';SJAJFL[37][2]='112';
SJAJFL[38]=new Array();SJAJFL[38][0]='130';SJAJFL[38][1]='砸撬汽车';SJAJFL[38][2]='112';
SJAJFL[39]=new Array();SJAJFL[39][0]='131';SJAJFL[39][1]='拎包';SJAJFL[39][2]='112';
SJAJFL[40]=new Array();SJAJFL[40][0]='132';SJAJFL[40][1]='扒窃';SJAJFL[40][2]='112';
SJAJFL[41]=new Array();SJAJFL[41][0]='133';SJAJFL[41][1]='盗窃机动车';SJAJFL[41][2]='112';
SJAJFL[42]=new Array();SJAJFL[42][0]='134';SJAJFL[42][1]='其它（xs）';SJAJFL[42][2]='112';
SJAJFL[43]=new Array();SJAJFL[43][0]='147';SJAJFL[43][1]='诈骗';SJAJFL[43][2]='113';
SJAJFL[44]=new Array();SJAJFL[44][0]='153';SJAJFL[44][1]='敲诈勒索';SJAJFL[44][2]='114';
SJAJFL[45]=new Array();SJAJFL[45][0]='154';SJAJFL[45][1]='聚众哄抢';SJAJFL[45][2]='114';
SJAJFL[46]=new Array();SJAJFL[46][0]='155';SJAJFL[46][1]='侵占';SJAJFL[46][2]='114';
SJAJFL[47]=new Array();SJAJFL[47][0]='156';SJAJFL[47][1]='故意损坏财物';SJAJFL[47][2]='114';
SJAJFL[48]=new Array();SJAJFL[48][0]='157';SJAJFL[48][1]='其它（xs5）';SJAJFL[48][2]='114';
SJAJFL[49]=new Array();SJAJFL[49][0]='158';SJAJFL[49][1]='凶杀或伤害致死';SJAJFL[49][2]='115';
SJAJFL[50]=new Array();SJAJFL[50][0]='159';SJAJFL[50][1]='伤害（致伤）';SJAJFL[50][2]='115';
SJAJFL[51]=new Array();SJAJFL[51][0]='160';SJAJFL[51][1]='强奸';SJAJFL[51][2]='115';
SJAJFL[52]=new Array();SJAJFL[52][0]='161';SJAJFL[52][1]='非法剥夺人身自由';SJAJFL[52][2]='115';
SJAJFL[53]=new Array();SJAJFL[53][0]='162';SJAJFL[53][1]='绑架';SJAJFL[53][2]='115';
SJAJFL[54]=new Array();SJAJFL[54][0]='163';SJAJFL[54][1]='拐卖妇女、儿童';SJAJFL[54][2]='115';
SJAJFL[55]=new Array();SJAJFL[55][0]='164';SJAJFL[55][1]='其它（xs6）';SJAJFL[55][2]='115';
SJAJFL[56]=new Array();SJAJFL[56][0]='165';SJAJFL[56][1]='伪造印章';SJAJFL[56][2]='116';
SJAJFL[57]=new Array();SJAJFL[57][0]='166';SJAJFL[57][1]='伪造、变造身份证';SJAJFL[57][2]='116';
SJAJFL[58]=new Array();SJAJFL[58][0]='167';SJAJFL[58][1]='聚众斗殴';SJAJFL[58][2]='116';
SJAJFL[59]=new Array();SJAJFL[59][0]='168';SJAJFL[59][1]='寻衅滋事';SJAJFL[59][2]='116';
SJAJFL[60]=new Array();SJAJFL[60][0]='169';SJAJFL[60][1]='涉及毒品';SJAJFL[60][2]='116';
SJAJFL[61]=new Array();SJAJFL[61][0]='170';SJAJFL[61][1]='组织/强迫/引诱/容留/介绍卖淫';SJAJFL[61][2]='116';
SJAJFL[62]=new Array();SJAJFL[62][0]='171';SJAJFL[62][1]='制造、贩卖、传播淫秽物品';SJAJFL[62][2]='116';
SJAJFL[63]=new Array();SJAJFL[63][0]='172';SJAJFL[63][1]='其它（xs7）';SJAJFL[63][2]='116';
SJAJFL[64]=new Array();SJAJFL[64][0]='173';SJAJFL[64][1]='投毒';SJAJFL[64][2]='117';
SJAJFL[65]=new Array();SJAJFL[65][0]='174';SJAJFL[65][1]='违反枪支、弹药管理';SJAJFL[65][2]='116';
SJAJFL[66]=new Array();SJAJFL[66][0]='175';SJAJFL[66][1]='劫持汽车、航空器';SJAJFL[66][2]='116';
SJAJFL[67]=new Array();SJAJFL[67][0]='176';SJAJFL[67][1]='重大责任事故';SJAJFL[67][2]='116';
SJAJFL[68]=new Array();SJAJFL[68][0]='177';SJAJFL[68][1]='涉爆';SJAJFL[68][2]='116';
SJAJFL[69]=new Array();SJAJFL[69][0]='178';SJAJFL[69][1]='其它（xs8）';SJAJFL[69][2]='116';
SJAJFL[70]=new Array();SJAJFL[70][0]='182';SJAJFL[70][1]='其它（xs9）';SJAJFL[70][2]='117';
SJAJFL[71]=new Array();SJAJFL[71][0]='190';SJAJFL[71][1]='赌博';SJAJFL[71][2]='184';
SJAJFL[72]=new Array();SJAJFL[72][0]='191';SJAJFL[72][1]='违反严禁淫秽物品规定';SJAJFL[72][2]='184';
SJAJFL[73]=new Array();SJAJFL[73][0]='192';SJAJFL[73][1]='贩卖盗版光盘';SJAJFL[73][2]='184';
SJAJFL[74]=new Array();SJAJFL[74][0]='193';SJAJFL[74][1]='卖淫、嫖宿嫖娼';SJAJFL[74][2]='184';
SJAJFL[75]=new Array();SJAJFL[75][0]='194';SJAJFL[75][1]='伪造、倒卖票证、证件';SJAJFL[75][2]='184';
SJAJFL[76]=new Array();SJAJFL[76][0]='195';SJAJFL[76][1]='吸食注射毒品';SJAJFL[76][2]='184';
SJAJFL[77]=new Array();SJAJFL[77][0]='196';SJAJFL[77][1]='利用迷信扰乱公共秩序或骗财';SJAJFL[77][2]='184';
SJAJFL[78]=new Array();SJAJFL[78][0]='197';SJAJFL[78][1]='其它（zal）';SJAJFL[78][2]='184';
SJAJFL[79]=new Array();SJAJFL[79][0]='198';SJAJFL[79][1]='偷窃少量财物';SJAJFL[79][2]='185';
SJAJFL[80]=new Array();SJAJFL[80][0]='199';SJAJFL[80][1]='骗取少量财物';SJAJFL[80][2]='185';
SJAJFL[81]=new Array();SJAJFL[81][0]='200';SJAJFL[81][1]='抢夺少量财物';SJAJFL[81][2]='185';
SJAJFL[82]=new Array();SJAJFL[82][0]='201';SJAJFL[82][1]='敲诈少量财物';SJAJFL[82][2]='185';
SJAJFL[83]=new Array();SJAJFL[83][0]='202';SJAJFL[83][1]='故意损坏公共财物';SJAJFL[83][2]='185';
SJAJFL[84]=new Array();SJAJFL[84][0]='203';SJAJFL[84][1]='哄抢公私财物';SJAJFL[84][2]='185';
SJAJFL[85]=new Array();SJAJFL[85][0]='204';SJAJFL[85][1]='其它（za2）';SJAJFL[85][2]='185';
SJAJFL[86]=new Array();SJAJFL[86][0]='223';SJAJFL[86][1]='殴打他人';SJAJFL[86][2]='186';
SJAJFL[87]=new Array();SJAJFL[87][0]='224';SJAJFL[87][1]='其它（za3）';SJAJFL[87][2]='186';
SJAJFL[88]=new Array();SJAJFL[88][0]='225';SJAJFL[88][1]='自然灾害事故';SJAJFL[88][2]='187';
SJAJFL[89]=new Array();SJAJFL[89][0]='226';SJAJFL[89][1]='食物中毒';SJAJFL[89][2]='187';
SJAJFL[90]=new Array();SJAJFL[90][0]='227';SJAJFL[90][1]='煤气中毒';SJAJFL[90][2]='187';
SJAJFL[91]=new Array();SJAJFL[91][0]='228';SJAJFL[91][1]='溺水';SJAJFL[91][2]='187';
SJAJFL[92]=new Array();SJAJFL[92][0]='229';SJAJFL[92][1]='工程事故';SJAJFL[92][2]='187';
SJAJFL[93]=new Array();SJAJFL[93][0]='230';SJAJFL[93][1]='自杀';SJAJFL[93][2]='187';
SJAJFL[94]=new Array();SJAJFL[94][0]='231';SJAJFL[94][1]='火灾事故';SJAJFL[94][2]='187';
SJAJFL[95]=new Array();SJAJFL[95][0]='232';SJAJFL[95][1]='交通事故';SJAJFL[95][2]='187';
SJAJFL[96]=new Array();SJAJFL[96][0]='233';SJAJFL[96][1]='其它（za4）';SJAJFL[96][2]='187';
SJAJFL[97]=new Array();SJAJFL[97][0]='234';SJAJFL[97][1]='扰乱工作、公共秩序';SJAJFL[97][2]='188';
SJAJFL[98]=new Array();SJAJFL[98][0]='235';SJAJFL[98][1]='结伙斗殴、寻衅滋事';SJAJFL[98][2]='188';
SJAJFL[99]=new Array();SJAJFL[99][0]='236';SJAJFL[99][1]='侮辱妇女及其它流氓活动';SJAJFL[99][2]='188';
SJAJFL[100]=new Array();SJAJFL[100][0]='237';SJAJFL[100][1]='妨碍国家工作人员执行公务';SJAJFL[100][2]='188';
SJAJFL[101]=new Array();SJAJFL[101][0]='238';SJAJFL[101][1]='上访滋事';SJAJFL[101][2]='188';
SJAJFL[102]=new Array();SJAJFL[102][0]='239';SJAJFL[102][1]='其它（za5）';SJAJFL[102][2]='188';
SJAJFL[103]=new Array();SJAJFL[103][0]='240';SJAJFL[103][1]='其它（za6）';SJAJFL[103][2]='189';
SJAJFL[104]=new Array();SJAJFL[104][0]='247';SJAJFL[104][1]='交通';SJAJFL[104][2]='242';
SJAJFL[105]=new Array();SJAJFL[105][0]='248';SJAJFL[105][1]='经济';SJAJFL[105][2]='242';
SJAJFL[106]=new Array();SJAJFL[106][0]='249';SJAJFL[106][1]='邻里';SJAJFL[106][2]='242';
SJAJFL[107]=new Array();SJAJFL[107][0]='250';SJAJFL[107][1]='家庭';SJAJFL[107][2]='242';
SJAJFL[108]=new Array();SJAJFL[108][0]='251';SJAJFL[108][1]='服务';SJAJFL[108][2]='242';
SJAJFL[109]=new Array();SJAJFL[109][0]='252';SJAJFL[109][1]='其它（qt）';SJAJFL[109][2]='242';
SJAJFL[110]=new Array();SJAJFL[110][0]='253';SJAJFL[110][1]='开门开锁';SJAJFL[110][2]='243';
SJAJFL[111]=new Array();SJAJFL[111][0]='254';SJAJFL[111][1]='伤病救治';SJAJFL[111][2]='243';
SJAJFL[112]=new Array();SJAJFL[112][0]='255';SJAJFL[112][1]='水电气热';SJAJFL[112][2]='243';
SJAJFL[113]=new Array();SJAJFL[113][0]='256';SJAJFL[113][1]='查找走失';SJAJFL[113][2]='243';
SJAJFL[114]=new Array();SJAJFL[114][0]='257';SJAJFL[114][1]='落水救助';SJAJFL[114][2]='243';
SJAJFL[115]=new Array();SJAJFL[115][0]='258';SJAJFL[115][1]='扰民';SJAJFL[115][2]='243';
SJAJFL[116]=new Array();SJAJFL[116][0]='259';SJAJFL[116][1]='遗失物品';SJAJFL[116][2]='243';
SJAJFL[117]=new Array();SJAJFL[117][0]='260';SJAJFL[117][1]='其它（qt）';SJAJFL[117][2]='243';
SJAJFL[118]=new Array();SJAJFL[118][0]='261';SJAJFL[118][1]='传单';SJAJFL[118][2]='245';
SJAJFL[119]=new Array();SJAJFL[119][0]='262';SJAJFL[119][1]='横幅、条幅';SJAJFL[119][2]='245';
SJAJFL[120]=new Array();SJAJFL[120][0]='263';SJAJFL[120][1]='电子邮件';SJAJFL[120][2]='245';
SJAJFL[121]=new Array();SJAJFL[121][0]='264';SJAJFL[121][1]='录音电话';SJAJFL[121][2]='245';
SJAJFL[122]=new Array();SJAJFL[122][0]='265';SJAJFL[122][1]='小喇叭';SJAJFL[122][2]='245';
SJAJFL[123]=new Array();SJAJFL[123][0]='266';SJAJFL[123][1]='传真';SJAJFL[123][2]='245';
SJAJFL[124]=new Array();SJAJFL[124][0]='267';SJAJFL[124][1]='聚集滋事';SJAJFL[124][2]='245';
SJAJFL[125]=new Array();SJAJFL[125][0]='268';SJAJFL[125][1]='其它（qt4）';SJAJFL[125][2]='245';
SJAJFL[126]=new Array();SJAJFL[126][0]='269';SJAJFL[126][1]='举报';SJAJFL[126][2]='246';
SJAJFL[127]=new Array();SJAJFL[127][0]='270';SJAJFL[127][1]='查勤、演练、暗访情况';SJAJFL[127][2]='246';
SJAJFL[128]=new Array();SJAJFL[128][0]='271';SJAJFL[128][1]='其它（qt5）';SJAJFL[128][2]='246';
SJAJFL[129]=new Array();SJAJFL[129][0]='938';SJAJFL[129][1]='举报扒窃';SJAJFL[129][2]='184';
SJAJFL[130]=new Array();SJAJFL[130][0]='124';SJAJFL[130][1]='打闷棍';SJAJFL[130][2]='119';
SJAJFL[131]=new Array();SJAJFL[131][0]='125';SJAJFL[131][1]='其它（xsll）';SJAJFL[131][2]='119';
SJAJFL[132]=new Array();SJAJFL[132][0]='127';SJAJFL[132][1]='骑摩托车';SJAJFL[132][2]='126';
SJAJFL[133]=new Array();SJAJFL[133][0]='128';SJAJFL[133][1]='其它（xs2l）';SJAJFL[133][2]='126';
SJAJFL[134]=new Array();SJAJFL[134][0]='135';SJAJFL[134][1]='撬门';SJAJFL[134][2]='129';
SJAJFL[135]=new Array();SJAJFL[135][0]='136';SJAJFL[135][1]='钻窗';SJAJFL[135][2]='129';
SJAJFL[136]=new Array();SJAJFL[136][0]='137';SJAJFL[136][1]='踹门';SJAJFL[136][2]='129';
SJAJFL[137]=new Array();SJAJFL[137][0]='138';SJAJFL[137][1]='撬盗保险柜';SJAJFL[137][2]='129';
SJAJFL[138]=new Array();SJAJFL[138][0]='139';SJAJFL[138][1]='配钥匙';SJAJFL[138][2]='129';
SJAJFL[139]=new Array();SJAJFL[139][0]='140';SJAJFL[139][1]='溜门';SJAJFL[139][2]='129';
SJAJFL[140]=new Array();SJAJFL[140][0]='141';SJAJFL[140][1]='其它（xs4l）';SJAJFL[140][2]='129';
SJAJFL[141]=new Array();SJAJFL[141][0]='148';SJAJFL[141][1]='碰瓷';SJAJFL[141][2]='147';
SJAJFL[142]=new Array();SJAJFL[142][0]='149';SJAJFL[142][1]='调包';SJAJFL[142][2]='147';
SJAJFL[143]=new Array();SJAJFL[143][0]='150';SJAJFL[143][1]='使用假冒贵重物品';SJAJFL[143][2]='147';
SJAJFL[144]=new Array();SJAJFL[144][0]='151';SJAJFL[144][1]='假冒熟人';SJAJFL[144][2]='147';
SJAJFL[145]=new Array();SJAJFL[145][0]='152';SJAJFL[145][1]='其它（xs41）';SJAJFL[145][2]='147';
SJAJFL[146]=new Array();SJAJFL[146][0]='179';SJAJFL[146][1]='爆炸';SJAJFL[146][2]='177';
SJAJFL[147]=new Array();SJAJFL[147][0]='180';SJAJFL[147][1]='扬言爆炸';SJAJFL[147][2]='177';
SJAJFL[148]=new Array();SJAJFL[148][0]='181';SJAJFL[148][1]='发现爆炸物或可疑爆炸物';SJAJFL[148][2]='177';
SJAJFL[149]=new Array();SJAJFL[149][0]='205';SJAJFL[149][1]='偷窃非机动车';SJAJFL[149][2]='198';
SJAJFL[150]=new Array();SJAJFL[150][0]='206';SJAJFL[150][1]='撬砸汽车偷窃少量财物';SJAJFL[150][2]='198';
SJAJFL[151]=new Array();SJAJFL[151][0]='207';SJAJFL[151][1]='拎包偷窃少量财物';SJAJFL[151][2]='198';
SJAJFL[152]=new Array();SJAJFL[152][0]='208';SJAJFL[152][1]='扒窃少量财物';SJAJFL[152][2]='198';
SJAJFL[153]=new Array();SJAJFL[153][0]='209';SJAJFL[153][1]='撬门入室偷窃少量财物';SJAJFL[153][2]='198';
SJAJFL[154]=new Array();SJAJFL[154][0]='210';SJAJFL[154][1]='钻窗入室偷窃少量财物';SJAJFL[154][2]='198';
SJAJFL[155]=new Array();SJAJFL[155][0]='211';SJAJFL[155][1]='踹门入室偷窃少量财物';SJAJFL[155][2]='198';
SJAJFL[156]=new Array();SJAJFL[156][0]='212';SJAJFL[156][1]='入室撬盗保险柜少量财物';SJAJFL[156][2]='198';
SJAJFL[157]=new Array();SJAJFL[157][0]='213';SJAJFL[157][1]='配钥匙入室偷窃少量财物';SJAJFL[157][2]='198';
SJAJFL[158]=new Array();SJAJFL[158][0]='214';SJAJFL[158][1]='溜门入室偷窃少量财物';SJAJFL[158][2]='198';
SJAJFL[159]=new Array();SJAJFL[159][0]='215';SJAJFL[159][1]='入室其它形式偷窃少量财物';SJAJFL[159][2]='198';
SJAJFL[160]=new Array();SJAJFL[160][0]='216';SJAJFL[160][1]='其它形式偷窃少量财物';SJAJFL[160][2]='198';
SJAJFL[161]=new Array();SJAJFL[161][0]='217';SJAJFL[161][1]='骗取少量财物';SJAJFL[161][2]='199';
SJAJFL[162]=new Array();SJAJFL[162][0]='218';SJAJFL[162][1]='抢夺少量财物';SJAJFL[162][2]='200';
SJAJFL[163]=new Array();SJAJFL[163][0]='219';SJAJFL[163][1]='敲诈少量财物';SJAJFL[163][2]='201';
SJAJFL[164]=new Array();SJAJFL[164][0]='220';SJAJFL[164][1]='故意损坏公共财物';SJAJFL[164][2]='202';
SJAJFL[165]=new Array();SJAJFL[165][0]='221';SJAJFL[165][1]='哄抢公私财物';SJAJFL[165][2]='203';
SJAJFL[166]=new Array();SJAJFL[166][0]='222';SJAJFL[166][1]='其它（za2）';SJAJFL[166][2]='204';
SJAJFL[167]=new Array();SJAJFL[167][0]='939';SJAJFL[167][1]='新疆人';SJAJFL[167][2]='938';
SJAJFL[168]=new Array();SJAJFL[168][0]='940';SJAJFL[168][1]='其他';SJAJFL[168][2]='938';
SJAJFL[169]=new Array();SJAJFL[169][0]='957';SJAJFL[169][1]='骑枪';SJAJFL[169][2]='200';
SJAJFL[170]=new Array();SJAJFL[170][0]='142';SJAJFL[170][1]='扎胎';SJAJFL[170][2]='131';
SJAJFL[171]=new Array();SJAJFL[171][0]='143';SJAJFL[171][1]='缠车胎';SJAJFL[171][2]='131';
SJAJFL[172]=new Array();SJAJFL[172][0]='144';SJAJFL[172][1]='拍车玻璃';SJAJFL[172][2]='131';
SJAJFL[173]=new Array();SJAJFL[173][0]='145';SJAJFL[173][1]='趁纠正违章之机';SJAJFL[173][2]='131';
SJAJFL[174]=new Array();SJAJFL[174][0]='146';SJAJFL[174][1]='其它（xs33';SJAJFL[174][2]='131';

// 20130427添加 -- 金泽
// 沙堆系统中缺少市局案件类型：治安案件>（治）妨害社会管秩序理 类别下所有三级分类下没有第四级分类
SJAJFL[175]=new Array();SJAJFL[175][0]='1678';SJAJFL[175][1]='街头设赌';SJAJFL[175][2]='190';
SJAJFL[176]=new Array();SJAJFL[176][0]='1679';SJAJFL[176][1]='行业窝点';SJAJFL[176][2]='190';
SJAJFL[177]=new Array();SJAJFL[177][0]='1680';SJAJFL[177][1]='居民窝点';SJAJFL[177][2]='190';

SJAJFL[178]=new Array();SJAJFL[178][0]='1681';SJAJFL[178][1]='街头贩卖';SJAJFL[178][2]='191';
SJAJFL[179]=new Array();SJAJFL[179][0]='1682';SJAJFL[179][1]='场所销售';SJAJFL[179][2]='191';

SJAJFL[180]=new Array();SJAJFL[180][0]='1683';SJAJFL[180][1]='街头贩卖';SJAJFL[180][2]='192';
SJAJFL[181]=new Array();SJAJFL[181][0]='1684';SJAJFL[181][1]='行业窝点';SJAJFL[181][2]='192';
SJAJFL[182]=new Array();SJAJFL[182][0]='1685';SJAJFL[182][1]='居民窝点';SJAJFL[182][2]='192';

SJAJFL[183]=new Array();SJAJFL[183][0]='1686';SJAJFL[183][1]='站街';SJAJFL[183][2]='193';
SJAJFL[184]=new Array();SJAJFL[184][0]='1687';SJAJFL[184][1]='行业窝点';SJAJFL[184][2]='193';
SJAJFL[185]=new Array();SJAJFL[185][0]='1688';SJAJFL[185][1]='社区窝点';SJAJFL[185][2]='193';

SJAJFL[186]=new Array();SJAJFL[186][0]='1689';SJAJFL[186][1]='街头贩卖';SJAJFL[186][2]='194';
SJAJFL[187]=new Array();SJAJFL[187][0]='1690';SJAJFL[187][1]='行业窝点';SJAJFL[187][2]='194';
SJAJFL[188]=new Array();SJAJFL[188][0]='1691';SJAJFL[188][1]='居民窝点';SJAJFL[188][2]='194';

SJAJFL[189]=new Array();SJAJFL[189][0]='1692';SJAJFL[189][1]='吸毒';SJAJFL[189][2]='195';
SJAJFL[190]=new Array();SJAJFL[190][0]='1693';SJAJFL[190][1]='贩毒';SJAJFL[190][2]='195';

SJAJFL[191]=new Array();SJAJFL[191][0]='1704';SJAJFL[191][1]='街头';SJAJFL[191][2]='196';
SJAJFL[192]=new Array();SJAJFL[192][0]='1705';SJAJFL[192][1]='社区';SJAJFL[192][2]='196';

SJAJFL[193]=new Array();SJAJFL[193][0]='1694';SJAJFL[193][1]='黑车拉客';SJAJFL[193][2]='197';
SJAJFL[194]=new Array();SJAJFL[194][0]='1695';SJAJFL[194][1]='散发小广告';SJAJFL[194][2]='197';
SJAJFL[195]=new Array();SJAJFL[195][0]='1696';SJAJFL[195][1]='无照游商';SJAJFL[195][2]='197';
SJAJFL[196]=new Array();SJAJFL[196][0]='1697';SJAJFL[196][1]='呲活揽客';SJAJFL[196][2]='197';
SJAJFL[197]=new Array();SJAJFL[197][0]='1698';SJAJFL[197][1]='黑导游';SJAJFL[197][2]='197';
SJAJFL[198]=new Array();SJAJFL[198][0]='1699';SJAJFL[198][1]='票号贩子';SJAJFL[198][2]='197';
SJAJFL[199]=new Array();SJAJFL[199][0]='1700';SJAJFL[199][1]='商场黄牛';SJAJFL[199][2]='197';
SJAJFL[200]=new Array();SJAJFL[200][0]='1701';SJAJFL[200][1]='乞讨';SJAJFL[200][2]='197';
SJAJFL[201]=new Array();SJAJFL[201][0]='1703';SJAJFL[201][1]='其它';SJAJFL[201][2]='197';
