jQuery(function($){
	// ---------banner开始--------------
	var unslider04 = $('#carousel').unslider({
		dots: true
	});

	data04 = unslider04.data('unslider');

	$('.unslider-arrow04').click(function(){

        var fn = this.className.split(' ')[1];

        data04[fn]();
    });
	// ---------banner结束--------------


	//------吸顶开始-------
	var $xd = $('#xd');
	var $header = $('#header');
	var $sidebar = $('.sidebar');
	var $dingbu = $sidebar.find('.dingbu');
	$(window).scroll(function(){
		//滚动条滚动过的距离
		var scrollH = $(this).scrollTop();

		//header的高度
		var hdH = $header.outerHeight();
		// console.log(scrollH,hdH);

		if(scrollH >= hdH){
			$xd.addClass('fixed');
			$xd.slideDown();

			//显示sidebar那里的到顶部按钮
			$dingbu.show();
		}else{
			$xd.removeClass('fixed');
			$xd.hide(20);

			//隐藏sidebar那里的到顶部按钮
			$dingbu.hide();
		}
	});
// });

// !function(){
// 	document.addEventListener('DOMContentLoaded',function(){
// 		var xd = document.querySelector('#xd');
// 		var header = document.querySelector('#header');console.log(header)
// 		var h = header.offsetHeight;
		
// 		window.onscroll = function(){
// 			var scrollH = window.scrollY;
// 			xd.style.display = 'block';
// 			if(scrollH >= h){
// 				xd.style.display = 'block';
// 				xd.classList.add('fixed');
// 			}else{
// 				xd.classList.remove('fixed');
// 				xd.style.display = 'none';
// 			}
// 		}
// 	});
// }();
//------吸顶结束-------
	

	//------超值团右侧的切换开始-------
	var $czt_r = $('.czt_r');
	var pageNo = 1;
	var qty = 12;
	$.ajax({
		url:'api/list_goods.php',
		data:{
			'pageNo':pageNo,
			'qty':qty
		},
		success:function(data){
			var res = JSON.parse(data);
			// console.log(res);

			var $ul = $('<ul/>');
			$ul.html($.map(res.data,function(item){
				return `<li>
					<a href="html/list.html"><img src="${item.imgurl}" title="${item.id}"></a>
					<h4>${item.title}</h4>
					<div class="price">${item.price}</div>
				</li>`
			}).join(''))
			$czt_r.append($ul);

			//生成前后按钮
			var $spanPrev = $('<span/>');
			$spanPrev.html('&lt;')
			$spanPrev.addClass('spanPrev')

			var $spanNext = $('<span/>');
			$spanNext.html('&gt;')
			$spanNext.addClass('spanNext')

			$ul.append($spanPrev);
			$ul.append($spanNext);

			$spanNext.on('click',function(){
				$ul.animate({'left':0},600);
				$spanPrev.show();
			})

			$spanPrev.on('click',function(){
				$ul.animate({'left':-964},600);
			})
		}

	});

	//------超值团右侧的切换结束-------


	//----------main版块8处轮播图开始-----------
	var lunbo1 = document.querySelector('.lunbo1');
	var lunbo2 = document.querySelector('.lunbo2');
	var lunbo3 = document.querySelector('.lunbo3');
	var lunbo4 = document.querySelector('.lunbo4');
	var lunbo5 = document.querySelector('.lunbo5');
	var lunbo6 = document.querySelector('.lunbo6');
	var lunbo7 = document.querySelector('.lunbo7');
	var lunbo8 = document.querySelector('.lunbo8');
	var index = 0;

	let timer1 = setInterval(function(){
		autoPlay(lunbo1);
	},3000);

	let timer2 = setInterval(function(){
		autoPlay(lunbo2);
	},3000);

	let timer3 = setInterval(function(){
		autoPlay(lunbo3);
	},3000);

	let timer4 = setInterval(function(){
		autoPlay(lunbo4);
	},3000);

	let timer5 = setInterval(function(){
		autoPlay(lunbo5);
	},3000);

	let timer6 = setInterval(function(){
		autoPlay(lunbo6);
	},3000);

	let timer7 = setInterval(function(){
		autoPlay(lunbo7);
	},3000);

	let timer8 = setInterval(function(){
		autoPlay(lunbo8);
	},3000);
	
	//封装自动播放
	function autoPlay(eLe){
		index++;
		show(eLe);
	}

	//封装动画
	function show(eLe){
		if(index > 3){
			eLe.style.left = 0;
			index = 1;
		}
		animate(eLe,{left:-index*305});
	}
	
	//animate封装
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
					var speed = (target - current)/5;

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

				},16);
			})(attr)
		}
	}

	//----------main版块轮播图结束----------



	//----------sidebar开始-----------

	var $sidebar = $('.sidebar');
	$sidebar.height($(window).innerHeight());
	var $sidebar_l = $sidebar.find('.sidebar_l');
	var $buycar = $sidebar_l.find('.buycar');

	//点击buycar时展开和收起sidebar
	var zhankai = true;
	$buycar.click(function(){
		if(zhankai){
			$sidebar.animate({'right':0},600);
			zhankai = false;
		}else{
			$sidebar.animate({'right':-264},600);
			zhankai = true;
		}
	})

	//窗口高度改变时sidebar高度自适应
	$(window).resize(function(){
		$sidebar.height($(window).innerHeight());
	});

	//鼠标移入移出时高亮
	$sidebar.on('mouseover','.sidebar_l>div',function(){
		$(this).css('backgroundColor','#E6133C');
	});
	$sidebar.on('mouseout','.sidebar_l>div',function(){
		$(this).css('backgroundColor','');
	});

	//点击按钮到顶部
	var $dingbu = $sidebar.find('.dingbu');
	$dingbu.click(function(){
		// $(window).scrollTop(0,1000);
		 $('body,html').animate({ scrollTop: 0 }, 800);
	})
	//----------sidebar结束-----------

	//首页下面的商品列表
	$.ajax({
		url:'api/mysql/shouye.php',
		success:function(data){
			var result = JSON.parse(data);//console.log(result)

			var $goodslist = $('.goodslist');
			$goodslist.html($.map(result,function(item){
				return `<li>
					<a href="html/list.html"><img src="${item.imgurl}" title="${item.id}"></a>
					<h4>${item.name}</h4>
					<div class="price">${item.price}</div>
				</li>`
			}).join(''));
		}
	});
});
