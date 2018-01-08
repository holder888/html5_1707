!function(){
	jQuery(function($){
		//接收列表页传过来的参数
		var params = location.search;//(console.log(params))

		//截取id
		var id = params.slice(4);

		var $goods = $('.goods');//console.log($goods)
		$.ajax({
			// url:'../api/details.php',
			url:'../api/mysql/xiangqing.php',
			data:{'id':id},
			success:function(data){
				var res = JSON.parse(data);//console.log(res)

				//生成放大镜结构
				$ul = $('#etalage');
				$ul.html(`<li>
						<img class="zhutu etalage_thumb_image" src="${res.imgurl}" />
					    <img class="bigzhutu etalage_big_image" src="${res.imgurl}"/>
				    </li>
				    <li>
		                <img class="etalage_thumb_image" src="../lib/zoom/img/2-thumb.jpg"/>
		                <img class="etalage_big_image" src="../lib/zoom/img/2.jpg"/>
		            </li>
		             <li>
		                <img class="etalage_thumb_image" src="../lib/zoom/img/3-thumb.jpg"/>
		                <img class="etalage_big_image" src="../lib/zoom/img/3.jpg"/>
		            </li>
		             <li>
		                <img class="etalage_thumb_image" src="../lib/zoom/img/4-thumb.jpg"/>
		                <img class="etalage_big_image" src="../lib/zoom/img/4.jpg"/>
		            </li>
		             <li>
		                <img class="etalage_thumb_image" src="../lib/zoom/img/5-thumb.jpg"/>
		                <img class="etalage_big_image" src="../lib/zoom/img/5.jpg"/>
		            </li>
				`)

				//放大镜调用插件
				$("#etalage").zoom({
					zoom_area_width:390,
				    autoplay_interval:3000,
				    small_thumbs:5,
				    autoplay:false
				});

				//根据返回数据填写头部商品信息
				//标题
				var $goodsTitle = $('.goodsTitle');
				$goodsTitle.text(res.name);

				//价格
				var $jiaqian = $('.jiaqian');
				$jiaqian.text(res.price);

				//商品编号
				var $bianhao = $('.bianhao');
				$bianhao.text(res.id);

				//点击加减商品数量
				var $numSub = $('.numSub');
				var $numAdd = $('.numAdd');
				var goods_Num = $('#goods_Num');
				// console.log($numSub,$numAdd,goods_Num);
				//定义一个初始值 点击过程中让这个值加或者减 把这个值赋值给input的value
				var starNum = 1;
				goods_Num.val(starNum);

				$numAdd.on('click',function(){
					starNum++;
					goods_Num.val(starNum);
				})

				$numSub.on('click',function(){
					starNum--;
					goods_Num.val(starNum);
					if(starNum = 2){
						return;
					}
				})


				

				//---------点击立即购买按钮------------
				console.log(res);
				// 用于保存购物车中的商品信息
				var carlist = [];
				var cookies = document.cookie;
				if(cookies.length){
					cookies = cookies.split('; ');
					cookies.forEach(function(item){
						var arr = item.split('=');
						if(arr[0] === 'carlist'){
							carlist = JSON.parse(arr[1]);
						}
					});
				}
				var nowBuy = $('.nowBuy')[0];
				nowBuy.onclick = function(){
					// console.log(goods_Num.val());
					createCookie();
				}


				//封装详情页cookie的写入
				function createCookie(){
					var guid = res.id;

					//判断carlist中是否存在相同商品
					//判断循环是否跑完
					for(var i=0;i<carlist.length;i++){
						if(carlist[i].guid === guid){
							break;
						}
					}

					if(i===carlist.length){
						//不存在：创建对象，并且数量为1
						var goods = {
							guid:guid,
							imgurl:res.imgurl,
							name:res.name,
							price:res.price,
							qty:goods_Num.val()*1
						}
						carlist.push(goods);
					}else{
						//存在：则加数量
						carlist[i].qty += (goods_Num.val())*1;//这里一直是字符串拼接 待解决
					}
					// 写入cookie
					var now = new Date();
					now.setDate(now.getDate()+365);
					document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires=' + now.toUTCString();
					window.open("shoppingcar.html");
					// location.reload();
				}


				
				//点击添加购物车按钮，商品飞入购物车
				var $addCar = $('.addCar');
				var $zhutu = $('.zhutu');//console.log($zhutu)
				var qTy = 0;//定义这个qTy等于0主要是用来判断当qty大于0时购物车中不累积生成结构

				$addCar.on('click',function(){

					//商品主图
					var $currentPic = $zhutu;
					//复制一张图
					var $copyImg = $currentPic.clone();

					//复制的图片设置样式
					$copyImg.css({
	                    position:'absolute',
	                    left:$currentPic.offset().left,
	                    top:$currentPic.offset().top,
	                    width:$currentPic.width()
	                });

					//把复制的图片插入页面
	                $copyImg.appendTo('body');
	                // $copyImg.width(100);

	                //复制的图片动画
	                $copyImg.animate({
	                	left:$buyCar.offset().left,
	                	top:$buyCar.offset().top,
	                	width:100,
	                	height:100
	                },function(){
	                	//动画完成要移除这张图片，优化性能
	                	$copyImg.remove();

	                	//同时让购物车里面的数量++
	                	$buyCar.find('.num')[0].innerText++;

	                	//侧边购物车里面总计数量++
	                	$('.goodsNum')[0].innerText++;



	                	//-----------右侧sidebar购物车里面生成商品------------
	               		//createCookie();
	                	//var $cUl = $('.cUl');
	              		// 读取cookie
						// var carlist;//undefined

						// var cookies = document.cookie;
						// if(cookies.length){
						// 	cookies = cookies.split('; ');//['carlist=[{},{}]','username=xxx']
						// 	cookies.forEach(function(item){
						// 		var arr = item.split('=');
						// 		if(arr[0] === 'carlist'){
						// 			carlist = JSON.parse(arr[1]);
						// 		}
						// 	});
						// }

						// console.log(carlist);
						// $cUl.html($.map(carlist,function(item){
						// 	return `<li>
						// 		<a href="#"><img src="${item.imgurl}" title="${item.id}"></a>
						// 		<h4>${item.name}</h4>
						// 		<div class="price">${item.price}</div>
						// 		<div class="goodsNumber">数量: <span class="number">1</span></div>
						// 		<span class="btnDelete">&times;</span>
						// 	</li>`
						// }).join(''));



	                	
	                	//-----------右侧sidebar购物车里面生成商品------------
	                	var $cUl = $('.cUl');
	                	if(qTy == 0){qTy++;
	                		var $li = $('<li/>');
		                	$li.html(`<a href="#"><img src="${res.imgurl}" title="${res.id}"></a>
									<h4>${res.name}</h4>
									<div class="price">${res.price}</div>
									<div class="goodsNumber">数量: <span class="number">1</span></div>
									<span class="btnDelete">&times;</span>`
	                		)
							$cUl.append($li);
	                	}else{
	                		$('.number')[0].innerText++;//sidebar中生成的结构中的商品数量
	                	}
	                	
	                	console.log()

						//计算总价
						$total_money = $('.total_money');
						var total = (res.price*$('.goodsNum')[0].innerText).toFixed(2);
						// console.log(total);
						$total_money.text(total);


						//右侧购物车里面点击删除按钮，删除对应商品，并让所以的数量就归0
						$cUl.on('click','.btnDelete',function(){
							$(this).closest('li').remove();
							$buyCar.find('.num')[0].innerText = 0;
							$('.goodsNum')[0].innerText = 0;
							$total_money.text('');
							qTy = 0;//要重置qTy等于0，不然删除商品后就无法再生成结构了
						})


	                });
				})


			}
		});


		//详情页的推荐商品
		$goods_list = $('.goods_list');
		var pageNo = 1;
		var qty = 10;

		$.ajax({
			url:'../api/list_goods.php',
			data:{
				'pageNo':pageNo,
				'qty':qty
			},
			success:function(data){
				var res = JSON.parse(data);
				// console.log(res);
				//调用下面封装的函数 生成html结构
				createHtml(res);
			}

		});

		//点击page重新加载数据
		$page = $('.page');
		$yeshu = $('.yeshu');//console.log($yeshu)
		
		$page.on('click','.page_next',function(){
			$goods_list.find('ul').animate({left:0},600);
			$yeshu.text(2);
		})

		$page.on('click','.page_prev',function(){
			$goods_list.find('ul').animate({left:-1205},600);
			$yeshu.text(1);
		})

		//封装生成结构
		function createHtml(res){
			var $ul = $('<ul/>');
			$ul.css('width',2410);//数据需要通过计算，这里先直接写死吧
			$ul.html($.map(res.data,function(item,idx){
				return `<li>
					<a href="#"><img src="${item.imgurl}" title="${item.id}"></a>
					<h4>${item.title}</h4>
					<div class="price">${item.price}</div>
				</li>`
			}).join(''));
			$goods_list.append($ul);
		}



		//详情页下方左边的都在买和看了又看
		var $allBuy = $('.allBuy');
		var pageNo1 = 1;
		var qty1 = 5;
		$.ajax({
			url:'../api/list_goods.php',
			data:{
				'pageNo':pageNo1,
				'qty':qty1
			},
			success:function(data){
				var result = JSON.parse(data);
				// console.log(result);
				
				var $ul1 = $('<ul/>');
				$ul1.html($.map(result.data,function(items,idx){
					return `<li>
						<a href="#"><img src="${items.imgurl}" title="${items.id}"></a>
						<h4>${items.title}</h4>
						<div class="price">${items.price}</div>
					</li>`
				}).join(''));
				$allBuy.append($ul1);
			}

		});


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

		
	});
}();
