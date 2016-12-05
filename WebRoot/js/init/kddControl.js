//说明在类别的select上调用此函数changek1(this.value,'类型的ID')
function  changek1(va,id){
    var leixing = document.getElementById(id);
    if(va=='20'){
        leixing.length=0;
        leixing.options.add(new Option('',''));
        leixing.options.add(new Option('一类','23'));
        leixing.options.add(new Option('二类','24'));
        leixing.options.add(new Option('三类','25'));
        leixing.options.add(new Option('四类','26'));
    }
    if(va=='21'){
        leixing.length=0;
        leixing.options.add(new Option('',''));
        leixing.options.add(new Option('一类','27'));
        leixing.options.add(new Option('二类','28'));
        leixing.options.add(new Option('三类','247'));
   }
   if(va=='22'){
        leixing.length=0;
        leixing.options.add(new Option('',''));
        leixing.options.add(new Option('高校直管','29'));
        leixing.options.add(new Option('治安直管','30'));
        leixing.options.add(new Option('内保直管','31'));
        leixing.options.add(new Option('派出所直管','32'));
        leixing.options.add(new Option('市局直管','33'));
        leixing.options.add(new Option('部队直管','34'));
  }
}
//说明在类型的select上调用此函数changek2(this.value,'派出所的ID','最后一级的ID')
function changek2(va,pcsId,id){
	debugger;
	var gxdw_temp_code = document.getElementById(pcsId).value;
	var area=document.getElementById(id);
	if(!area || typeof(area)=='undefined') return;
	area.options.length=0;
	var newOpt = document.createElement("OPTION");
	newOpt.setAttribute("value","");
	newOpt.innerHTML = "";
	area.appendChild(newOpt);
	for(var count=0;count<ZRQ.length;count++){
            newOpt = document.createElement("OPTION");
          	var temp=ZRQ[count][0];
          	debugger;
            var gxdwcodeFromArray = ZRQ[count][2];
            if(gxdw_temp_code!=null&&gxdw_temp_code!=''){
	       		if(gxdw_temp_code==gxdwcodeFromArray&&va==temp.substring(temp.indexOf('-')+2,temp.indexOf('+')))
			    {
	            newOpt.setAttribute("value",temp.substring(0,temp.indexOf('-')));
				newOpt.innerHTML = ZRQ[count][1];
				area.appendChild(newOpt);
			    }		 
		    }
		    else
		    {
		    	if(va==temp.substring(temp.indexOf('-')+2,temp.indexOf('+')))
			    {
	            newOpt.setAttribute("value",temp.substring(0,temp.indexOf('-')));
				newOpt.innerHTML = ZRQ[count][1];
				area.appendChild(newOpt);
			    }	
		    }
	      }
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组此为FABW
function changeFABW(value,id,array)
{
	var sel=document.getElementById(id);
	sel.options.length=0;
	sel.options.add(new Option('',''));
	for(count=0;count<array.length;count++)
	{   //alert(value);
		
		if(value>=485&&value<=493)	value=27;
		if(value>=494&&value<=502)	value=28;
		if(value>=503&&value<=511)	value=247;
		if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
		
		
	}
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组此为FABW1
function changeFABW1(cvalue,id,array)
{
	var sel=document.getElementById(id);
	var value=cvalue;
	sel.options.length=0;
	sel.options.add(new Option('',''));
	for(count=0;count<array.length;count++)
	{   //alert(value);
		for(i=0;i<ZRQLX.length;i++)
		{		 
		  if(ZRQLX[i][0]==cvalue&&ZRQLX[i][2]=='20')	value='20';
		  if(ZRQLX[i][0]==cvalue&&ZRQLX[i][2]=='21')	value='21';		
		}		
		if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
		
		
	}
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组此为FABW2
function changeFABW2(cvalue,id,array,parray)
{
	var sel=document.getElementById(id);	
	var value=cvalue;
	sel.options.length=0;
	sel.options.add(new Option('',''));
	for(count=0;count<array.length;count++)
	{   
	    for(i=0;i<parray.length;i++)
	    {
	      if(parray[i][0]==cvalue&&parray[i][2]=='21')
	         value='21';
	    }	   
	    if(array[count][2]==value)
		{
			newOpt = document.createElement("OPTION");
			newOpt.setAttribute("value",array[count][0]);
			newOpt.innerHTML = array[count][1];
			sel.appendChild(newOpt);
		}
	}
}
//value是当前选中的OPTION的值，ID是你要联动的SELECT的ID，ARRAY是要用的数组此为FABW2
function changeFABWT2(cvalue,id,array)
{
	var sel=document.getElementById(id);
	var value=cvalue;
	sel.options.length=0;
	sel.options.add(new Option('',''));
	for(count=0;count<array.length;count++)
	{   //alert(value);
	   for(i=0;i<ZRQLX.length;i++)
		{		
		 if(ZRQLX[i][0]==cvalue&&ZRQLX[i][2]=='21')
	     {	value='21';						
		    if(array[count][2]==value)
		    {
			  newOpt = document.createElement("OPTION");
			  newOpt.setAttribute("value",array[count][0]);
			  newOpt.innerHTML = array[count][1];
			  sel.appendChild(newOpt);
		   }
		 } 
		  
		}
	}
}