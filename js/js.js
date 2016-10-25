//'use strict';
window.onload=function(){
	var oNav=document.querySelector('.nav');
	var oNav2=document.querySelector('.nav_02');
	var t=oNav.offsetTop;
	var oLoad=document.querySelector('.loading');
	var oMask=document.querySelector('.mask');
	var oAbout=document.querySelector('.about');
	var oKill=document.querySelector('.skill');
	var oTop=document.querySelector('.top');


	
	(function(){
	
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>=t){
			
			oNav.style.position='fixed';
			oNav.style.top=0;
			oNav.style.left=0;
			oNav2.style.display='block';
			}else{
			oNav.style.position='';
			oNav2.style.display='none';	
				
			}
		}	
		})();
	//预加载模拟
	var oLoadNum=0;
	var oLoadtimer=null;
	oLoadtimer=setInterval(function(){
		
		oLoadNum++;
		oMask.innerHTML=oLoadNum+'%';
		if(oLoadNum==100){
			oLoad.style.display='none';
			move(oLoad,{
				'opacity':0
				},{
					complete:function(){
						oTop.style.display='block';	
						oNav.style.display='block';	
						oNav2.style.display='block';	
						oKill.style.display='block';	
						oAbout.style.display='block';
						}	
					})
					
				clearInterval(oLoadtimer);
			}
		},10)
	
	
	}