//封装生成任意位数纯数字验证码
//n:要获取验证码的位数
function creatYzm(n){
	var res = '';
	for(var i=0;i<n;i++){
		var num = parseInt(Math.random()*10);
		res += num;
	}
	return res;
}
//creatYzm(n);



//封装一个范围内的随机整数
//min：最小的数，max：最大的数
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}
//randomNumber(min,max);



//封装生成rgb格式的随机颜色
function randomColor(){
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//randomColor();



//封装生成16进制随机颜色
function getColor(){
	var str = '0123456789abcdef';
	var res = '#';
	for(var i=0;i<6;i++){
		//获取随机索引值
		var idx = Math.random()*str.length;
		res += str.charAt(idx);//不需要兼容的话可以 res += str[idx];
	}
	//console.log(res);
	return res;
}
// getColor();



// 	封装一个删除非元素节点的函数
// 	兼容版本浏览（IE8-）
var element = {
	/**
	 * [获取元素节点]
	 * @param  {Nodes} nodes [节点]
	 * @return {Array}       [返回所有元素节点]
	 */
	get:function(nodes){
		// 创建空数组，用于存放结果
		var res = [];
		for(var i=0;i<nodes.length;i++){
			if(nodes[i].nodeType === 1){
				res.push(nodes[i]);
			}
		}
		// 返回结果
		return res;
	},
	// 获取所有子元素
	children:function(node){
		var res = [];
		for(var i=0;i<(node.childNodes).length;i++){
			if((node.childNodes)[i].nodeType != 3){
				res.push((node.childNodes)[i]);
			}
		}
		return res;
	},
	// 下一个兄弟元素
	next:function(node){		
		
	},
	// 上一个兄弟元素
	prev:function(node){

	},
	// 父元素
	parent:function(node){
		return node.parentNode;
	},
	// 兼容ie8- (封装兼容:document.getElementsByClassName)
	getByClassName:function(classname){
		if(document.getElementsByClassName){
			return document.getElementsByClassName(classname);
		}else{
			var res = [];
			var tags = document.getElementsByTagName('*');
			for(var i=0;i<tags.length;i++){
				if(tags[i].className = classname){
					res.push(tags[i]);
				}
			}
			return res;
		}
	}
}
// element.get(nodes);//[element,element]
// element.children(box);
//element.next(box);
//element.prev(box);
//element.parent(ele);
// element.getByClassName('tab')[0];



//cookie操作
//增，删，查，改
var Cookie = {
	/**
	 * [添加/修改cookie]
	 * @param {String} name    [cookie名]
	 * @param {String} val     [cookie值]
	 * @param {[Date]} expires [cookie有效期]
	 * @param {[String]} path    [cookie保存路径]
	 */
	set:function(name,val,expires,path){
		var str = name + '=' + val;

		// 有效期
		if(expires){
			str += ';expires=' + expires.toUTCString();
		}

		// 保存路径
		if(path){
			str += ';path=' + path;
		}

		// 写入cookie
		document.cookie = str;
	},

	/**
	 * [删除cookie]
	 * @param  {String} name [要删除的cookie名]
	 * @param  {[String]} path [指定路径]
	 */
	remove:function(name,path){
		var now = new Date();
		now.setDate(now.getDate()-7);

		// document.cookie = name + '=null;expires=' + now.toUTCString();
		// 利用添加方法达到删除效果
		this.set(name,'null',now,path);
	},

	/**
	 * [获取cookie]
	 * @param  {String} name [cookie]
	 * @return {String}      [description]
	 */
	get:function(name){
		var res = '';

		// 获取能访问的所有cookie
		var cookies = document.cookie;

		// 判断是否存在cookie
		if(!cookies.length){
			return res;
		}

		// cookie字符串拆成数组
		cookies = cookies.split('; ');

		// 遍历数组，找出name对应cookie值
		for(var i=0;i<cookies.length;i++){
			// 拆分cookie名和cookie值
			var arr = cookies[i].split('=');
			if(arr[0] === name){
				res = arr[1];
				break;
			}
		}

		return res;
	}
}

// Cookie.set('username','laoxie',now,'/');
// Cookie.remove('username','/');
// Cookie.get('username');//laoxie



//封装事件绑定函数，支持冒泡/捕获
//ele:元素，type：时间类型，handler：事件处理函数，captrue：捕获
function bind(ele,type,handler,captrue){
	if(ele.addEventListener){
		ele.addeventListener(type,handler,captrue);
	}
	else if(ele.attachEvent){
		ele.attachEvent('on'+type,handler);
	}
	else{
		ele[on+'type'] = handler;
	}
}

//bind(box,'click',function(){},true);



//封装获取css样式
//ele:元素，attr：属性
function getCss(ele,attr){
	if(window.getComputedStyle){
		return getComputedStyle(ele)[attr];
	}
	else if(ele.currentStyle){
		return ele.currentStyle[attr];
	}
	else{
		return ele.style[attr];
	}
}
//getCss(box,background);



//ele：为点击的那个元素（初始状态ele要处于隐藏状态），
//h：为你要设置到什么高度时显示到顶部按钮
function toT(ele,h){
	window.onscroll = ()=>{
		var scrollTop = window.scrollY;
		if(scrollTop >= h){
			ele.style.display = 'block';
		}else{
			ele.style.display = 'none';
		}
	}
	ele.onclick = function(){
		var scrollTop = window.scrollY;
		var speed = Math.floor(scrollTop/10);
		var timer = setInterval(function(){
			scrollTop -= speed;
				if(scrollTop <= 0 || speed < 10){
					clearInterval(timer);
					scrollTop = 0;
				}
			window.scrollTo(0,scrollTop);
		},50)
	}
}
// toT(toTop,500);



/*
	单个属性的动画函数
 */
function animate(ele,attr,target){
	// 把定时器作为DOM节点的属性
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		// 获取当前值：10px,0.5,30deg,inherit,auto
		var current = getComputedStyle(ele)[attr];

		// 提取单位
		var unit = current.match(/\d([a-z]*)$/);
		unit = unit ? unit[1] : '';

		// 提取数字
		current = parseFloat(current);


		// 计算缓冲速度
		var speed = (target - current)/10;

		if(attr === 'opacity'){
			speed = speed>0 ? 0.05 : -0.05;
		}else{
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		}

		// 到达目标值/清除定时器
		if(current === target){
			clearInterval(ele.timer);
			current = target - speed;
		}

		ele.style[attr] = current + speed + unit;
	},30)
}

// animate(ele,'top',-320);
// animate(ele,'opacity',0.5);




/*
	* 支持多属性同时运动
	* 支持回调函数
	（callback：回调函数，这个参数可选）
 */
function animate(ele,opt,callback){
	var timerQty = 0;
	for(var attr in opt){
		// 记录动画数量
		timerQty++;

		//createTimer(attr);
		(function(attr){
			// 以属性名创建定时器名字
			var timerName = attr + 'timer';

			// 清除之前的定时器,放置多个定时器作用于同一个元素
			clearInterval(ele[timerName]);

			// 目标值
			var target = opt[attr];

			// 创建定时器
			ele[timerName] = setInterval(function(){
				// 获取当前值
				var current = getComputedStyle(ele)[attr];

				// 提取单位
				var unit = current.match(/\d([a-z]*)$/);
				unit = unit ? unit[1] : '';

				// 提取数字
				current = parseFloat(current);

				// 计算缓冲速度
				var speed = (target - current)/10;

				//判断属性是否为opacity
				if(attr === 'opacity'){
					speed = speed>0 ? 0.05 : -0.05;
				}else{
					speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
				}

				// 到达目标值/清除定时器
				if(current === target){
					clearInterval(ele[timerName]);
					current = target - speed;

					// 数量减1
					timerQty--;

					// 执行回调函数
					// 最后一个动画执行完成后才执行回调函数
					if(typeof callback === 'function' && timerQty===0){
						callback();
					}
				}

				ele.style[attr] = current + speed + unit;

			},30);
		})(attr)
	}
}
// animate(ele,{width:100,top:200});








//---------------------------------------------------

//封装点击按钮时显示和隐藏页面元素
function showHide(ele,btn){
	ele.classList.toggle('dspn');
	if(ele.classList.contains('dspn')){
		btn.innerHTML = '显示';
	}else{
		btn.innerHTML = '隐藏';
	}
}
//showHide(ele,btn);



//封装找出最大数的函数
function findMax(n){
	for(var i=0;i<arguments.length;i++){
		if(arguments[i] > arguments[i+1]){
			var max = arguments[i];
			arguments[i] = arguments[i+1];
			arguments[i+1] = max;
		}
	}
	return max;
}	
//findMax(32,4,56,34,99,23,13,44);


//封装求任意数的阶层
function factorial(n){
	var res = 1;
	for(var i=2;i<=n;i++){
		res *= i;
	}
	return res;
}
// factorial(n);


//生成表格函数
//r:行   c:列
function creatTable(r,c){
	var html = '<table><tbody>';
	for(var i=1;i<=r;i++){
		html += '<tr>';
		for(var j=1;j<=c;j++){
			html += '<td>单元格'+i+'行'+j+'列'+'</td>';
		}
		html += '</tr>';
	}
	html += '</tbody></table>';
	return html;
}
//creatTable(10,8);