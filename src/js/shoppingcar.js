!function(){
	jQuery(function($){
		var $cart_list = $('.cart_list');

		// 读取cookie
		var carlist;//undefined
		var cookies = document.cookie;//console.log(cookies)
		if(cookies.length){
			cookies = cookies.split('; ');//['carlist=[{},{}]','username=xxx']
			cookies.forEach(function(item){
				var arr = item.split('=');
				if(arr[0] === 'carlist'){
					carlist = JSON.parse(arr[1]);//json字符串转换成数组
				}
			});
		}

		console.log(carlist);

		//进购物车显示全部商品的数量
		$('.allGoods').text(carlist.length);

		//生成商品列表结构
		var $ul = $('<ul/>');
		var total = 0;//先定义总价为0，遍历过程计算出总价

		$ul.html($.map(carlist,function(item){
			total += item.price*item.qty;
			return `<li data-guid="${item.guid}">
				<input type="checkbox" name="checked" class="checked fl">
				<img src="${item.imgurl}" class="fl"">
				<h4 class="fl">${item.name}</h4>
				<div class="price fl">${item.price}</div>
				<div class="shuliang fl">
					<span class="subNum">-</span>
					<input type="text" value="${item.qty}" class="txtNum">
					<span class="addNum">+</span>
				</div>
				<span class="sum fl">${(item.price*item.qty).toFixed(2)}</span>
				<span class="dlt">&times;</span>
			</li>`
		}).join(''));
		//把生成的商品写入cart_list
		$cart_list.append($ul);

		//初始购物车商品总价
		$('.totalAll').text(total.toFixed(2));


		//全选
		//两个全选按钮
		$checkAll1 = $('.checkAll1');//console.log($checkAll1)
		$checkAll2 = $('.checkAll2');//console.log($checkAll2)

		//所有的单选按钮
		var $checkboxs = $ul.find(':checkbox');

		$checkAll1.on('click',function(){
			//让所以单选框的状态和点击的全选狂的状态保持一致
			$checkboxs.prop('checked',this.checked);
			$checkAll2.prop('checked',this.checked);
			$('.yixuan').text(carlist.length);//下面商品总数
		})

		$checkAll2.on('click',function(){
			//让所以单选框的状态和点击的全选狂的状态保持一致
			$checkboxs.prop('checked',this.checked);
			$checkAll1.prop('checked',this.checked);
			$('.yixuan').text(carlist.length);
		})

		//只要有一个单选没勾上，全选的状态变为不选择
		// 判断勾选的数量与复选框的数量是否相等
		$checkboxs.on('click',function(){
			var $checked = $checkboxs.filter(':checked');
			$('.checkAll1').prop('checked',$checked.length == $checkboxs.length);
			$('.checkAll2').prop('checked',$checked.length == $checkboxs.length);
			$('.yixuan').text($checked.length);
		})

		var $subNum = $('.subNum');
		var $addNum = $('.addNum');//console.log($subNum,$addNum)

		//点击减，商品数量减1
		$ul.on('click','.subNum',function(){
			$(this).next()[0].value--;
			// if($(this).next()[0].value <= 1){
			// 	$(this).next()[0].value = 0;
			// 	reurn;
			// }
			var number = $(this).next()[0].value;//input的value值
			var prc = $(this).closest('li').find('.price').text();
			$(this).closest('li').find('.sum').text((number*prc).toFixed(2));
			//现在的总价等于之前的总价-点击的这个商品的单价
			$('.totalAll').text(($('.totalAll').text() - prc).toFixed(2));
		})

		//点击加，商品数量加1
		$ul.on('click','.addNum',function(){
			$(this).prev()[0].value++;
			var number = $(this).prev()[0].value;
			var prc = $(this).closest('li').find('.price').text();
			$(this).closest('li').find('.sum').text((number*prc).toFixed(2));
			//现在的总价等于之前的总价+点击的这个商品的单价
			$('.totalAll').text(($('.totalAll').text()*1 + prc*1).toFixed(2));
		})

		//删除单个商品时计算总价
		var $dlt = $('.dlt');console.log($dlt)
		$dlt.on('click',function(){
			// console.log($(this))
			$(this).closest('li').remove();
			// $('.totalAll').text($('.totalAll').text()*1 - );
			var jian = $(this).closest('li').find('.sum').text();
			$('.totalAll').text($('.totalAll').text()*1 - jian);
			carlist.length--;
			//删除商品后要从新写入下面商品的总数
			$('.yixuan').text(carlist.length);
		})


		//
	});
}();