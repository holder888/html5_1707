!function(){
	//list页面上方品牌版块，点击展开查看更多
	jQuery(function($){
		var $pinpai = $('.pinpai');
		var $open = $pinpai.find('.open');
		var $pinpai_l = $pinpai.find('.pinpai_l');
		
		var zhankai = true;
		$open.on('click',function(){
			if(zhankai){
				$pinpai.animate({height:310},600);
				$pinpai_l.animate({height:310},600);
				zhankai = false;
			}else{
				$pinpai.animate({height:130},600);
				$pinpai_l.animate({height:130},600);
				zhankai = true;
			}
		})


			//----------sidebar开始-----------
			var $sidebar = $('.sidebar');//console.log($sidebar)
			$sidebar.height($(window).innerHeight());
			var $sidebar_l = $sidebar.find('.sidebar_l');
			var $buyCar = $sidebar_l.find('.buyCar');

			//点击buycar时展开和收起sidebar
			var zhankai = true;
			$buyCar.click(function(){
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

			
			$(window).scroll(function(){
				//滚动条滚动过的距离
				var scrollH = $(this).scrollTop();

				var $header = $('#header');
				var $dingbu = $sidebar.find('.dingbu');

				//header的高度
				var hdH = $header.outerHeight();
				// console.log(scrollH,hdH);

				if(scrollH >= hdH){
					$dingbu.show();
				}else{
					$dingbu.hide();
				}
			});
			//----------sidebar结束-----------



		// //list页面下的商品列表
		// var goodslist = document.querySelector('.list_goodslist');

		// //发起ajax请求
		// var xhr = new XMLHttpRequest();
		// var status = [200,304];
		// xhr.onload = function(){
		// 	if(status.includes(xhr.status)){
		// 		// console.log(xhr.responseText);
		// 		var data = JSON.parse(xhr.responseText);
		// 		//console.log(data);
		// 		var ul = document.createElement('ul');
		// 		ul.innerHTML = data.map(function(item){
		// 			return `<li data-id="${item.id}">
		// 				<img src="${item.imgurl}">
		// 				<div class="price">${item.price}</div>
		// 				<h3>${item.title}</h3>
		// 				<button>加入购物车</button>
		// 			</li>`
		// 		}).join('');

		// 		goodslist.appendChild(ul);
		// 	}
		// }

		// xhr.open('get','../api/data/list_goods.json',true);
		// xhr.send();

		//list页面下的商品列表
		var $goodslist = $('.list_goodslist');
		var $pageShow = $('.pageShow');
		var pageNo = 1;
		var qty = 20;

		$.ajax({
			// url:'../api/list_goods.php',
			url:'../api/mysql/liebiao_page.php',
			data:{
				'pageNo':pageNo,
				'qty':qty
			},
			success:function(data){
				var res = JSON.parse(data);
				console.log(res);
				//调用下面封装的函数 生成html结构
				createHtml(res);

				//价格排序
				var $sequence_l = $('.sequence_l');
				$sequence_l.on('click','.jiage',function(){
					sort();
					createHtml(res);//排序已经排好，但这里的生成结构一直不生效，【待解决】
				})

				//封装价格排序
				function sort(){
					var dt = res.data;
					for(var i=0;i<dt.length;i++){
						for(var j=0;j<dt.length-i-1;j++){
							if(dt[j].price  > dt[j+1].price){
								var tem = dt[j];
								dt[j] = dt[j+1];
								dt[j+1] = tem;
							}
						}
					}
					return dt;
				}


				//处理分页
				//生成前先清空，以免出现重复生成
				$pageShow.html('');

				

				//页面显示共有多少商品
				var $search_r = $('.search_r');//console.log($search_r)
				$search_r.children('span').html(res.total);

				
				//点击添加购物车按钮(飞入购物车)
				var $buyCar = $('.buyCar');
				var $sidebar = $('.sidebar');//console.log($sidebar)

				$goodslist.on('click','button',function(){
					// 获取当前li
                	var $currentLi = $(this).closest('li');//console.log($currentLi)

                	// 获取图片
                	var $img = $currentLi.find('img');

                	// 1>复制当前商品图片
                	var $copyImg = $img.clone();

                	// 定位复制的图片到当前图片位置
	                $copyImg.css({
	                    position:'absolute',
	                    left:$img.offset().left,
	                    top:$img.offset().top,
	                    width:$img.width()
	                });

	                // 把复制的图片写入页面,建议写到body
	                $copyImg.appendTo('body');

	                 $copyImg.animate({
	                    left:$buyCar.offset().left,
	                    top:$buyCar.offset().top,
	                    width:50,
	                },function(){
	                	//动画完成
	                    //删除复制的图片
	                    $copyImg.remove();

	                    //>复制当前商品所有信息(用于往购物车添加)
	                    var $copyLi = $currentLi.clone();

	                    //删除$copyLi中的按钮
	                    $copyLi.find('button').parent().remove();

	                    //右侧购物车的数量++
	                    $buyCar.find('.num')[0].innerText++;

	                    // 添加删除按钮
	                    // $('<span/>').addClass('btn-close').html('&times;').appendTo($copyLi);

	                    // $copyLi.width('100');
	                    // $copyLi.height('100');
	                    // $sidebar.append($copyLi);
		            });
				});


				var pageQty = Math.ceil(res.total/res.qty);

				for(var i=1;i<=pageQty;i++){
					var $span = $('<span/>');
					$span.html(i);

					if(i == pageNo){
						$span.addClass('active');
					}

					//把span插入到pageShow中
					$pageShow.append($span);
				}

			}
		});

		
		//传参到详情页
		$goodslist.on('click','img',function(){
			var id = $(this).attr('title');
			var params = 'id=' + id;
			window.location.href= 'details.html?'+params;
			// window.open('details.html?'+params);
		})


		//点击分页重新请求数据
		$pageShow.on('click','span',function(e){
			var target = e.target;

			for(var i=0;i<target.parentNode.children.length;i++){
				target.parentNode.children[i].className = '';
			}
			target.className = 'active';

			pageNo = target.innerText*1;
			$.ajax({
				// url:'../api/list_goods.php',
				url:'../api/mysql/liebiao_page.php',
				data:{
					'pageNo':pageNo,
					'qty':qty
				},
				success:function(data){
					var shuju = JSON.parse(data);
					// console.log(shuju);
					//生成之前先清空之前的，不然会追加
					$goodslist.html('');
					createHtml(shuju);
				}
			})
		})
		
		//点击上一页，下一页
		var $page_No = $('.page_No');
		$page_No.on('click','.pagePrev',function(){
			pageNo--;
			gaoliang();

			$.ajax({
				// url:'../api/list_goods.php',
				url:'../api/mysql/liebiao_page.php',
				data:{
					'pageNo':pageNo,
					'qty':qty
				},
				success:function(data){
					var shuju = JSON.parse(data);
					// console.log(shuju);
					//生成之前先清空之前的，不然会追加
					$goodslist.html('');
					createHtml(shuju);
				}
			})
			if(pageNo < 0){
				return;
			}
		})

		$page_No.on('click','.pageNext',function(){
			$.ajax({
				// url:'../api/list_goods.php',
				url:'../api/mysql/liebiao_page.php',
				data:{
					'pageNo':pageNo,
					'qty':qty
				},
				success:function(data){
					var shuju = JSON.parse(data);
					// console.log(shuju);
					//生成之前先清空之前的，不然会追加
					$goodslist.html('');
					createHtml(shuju);
				}
			})
			pageNo++;
			gaoliang();
			if(pageNo > 5){
				return;
			}
		})

		//封装点击上一页 下一页对应页码高亮的函数
		function gaoliang(){
			for(var i=0;i<$pageShow[0].children.length;i++){
				$pageShow[0].children[i].className = '';
			}
			
			for(var i=0;i<$pageShow[0].children.length;i++){
				if($pageShow[0].children[i].innerHTML == pageNo){
					$pageShow[0].children[i].className = 'active';
					break;
				}
			}
		}


		//封装生成结构
		function createHtml(res){
			var $ul = $('<ul/>');
			$ul.html($.map(res.data,function(item,idx){
				return `<li>
					<a href="#"><img src="${item.imgurl}" title="${item.id}"></a>
					<div class="price">${item.price}</div>
					<h3>${item.name}</h3>
					<button>加入购物车</button>
				</li>`
			}).join(''));
			$goodslist.append($ul);
		}
	});
}();