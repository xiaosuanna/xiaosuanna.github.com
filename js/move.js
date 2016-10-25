// JavaScript Document

function getStyle(obj,name){
	if(obj.currentStyle){
		
	return	obj.currentStyle[name]
		}else{
			
	return getComputedStyle(obj,false)[name]		
		}
	
	}
	//duration  速度
function move(obj,json,options){
	options=options || {};
	options.duration=options.duration || 500;
	options.type=options.type || 'ease-out';
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
		}
		var count=Math.floor(options.duration/30);
		var n=0;
		clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			switch(options.type){
				case 'linear': //匀速
					var a=n/count;
					var cur=dis[name]*a+start[name];
					break;
				case 'ease-in'://加速
					var a=n/count;
					var cur=dis[name]*(a*a*a)+start[name];
					break;
				case 'ease-out': //减速
					var a=1-n/count;
					var cur=dis[name]*(1-a*a*a)+start[name];
					break;
				}
			
			if(name == 'opacity'){
				
				obj.style[name]=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
				obj.style[name]=cur+'px';	
				}
				if(n == count){
					clearInterval(obj.timer);
					options.complete && options.complete();
					}
			}
		
		},30)
	
	}