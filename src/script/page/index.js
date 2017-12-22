// creat at 2017/9/20
var vm = new Vue({
	el: '.layout',
	data:{
		mun_length: 0,
		count     : 0,
		choose_pic: './img/index.png',
		// 前台展示的数据
		show_list :[]
	},
	mounted: function(){
		//购物车列表
		this.getShopList = function(){
			// 模仿后台返回的数据
			var data = [
						{
							"title":"欧洲站连衣裙两件套喇叭袖打底T恤裙+吊带裙蕾丝韩版2017女夏新款",
							"minPrice":195,
							"itemId":14133444,
							"sku":"T恤裙：M",
							"munber": "1",
							"storeName":"咖布服饰旗舰店",
							"picUrls":"http://img.alicdn.com/imgextra/i3/1137685609/TB2J_pWAbBnpuFjSZFGXXX51pXa_!!1137685609.jpg",
						},
						{
							"title":"Amii[极简主义]秋装新百搭翻领修身长袖职业衬衫上衣女常规",
							"minPrice":159,
							"itemId":1413340,
							"sku":"尺寸：M",
							"munber": "1",
							"storeName":"amii旗舰店",
							"picUrls":"http://img.alicdn.com/imgextra/i1/TB1IkpIQpXXXXX5XpXXXXXXXXXX_!!0-item_pic.jpg",
						},
						{
							"title":"2017夏装新款韩版气质中长款雪纺吊带连衣裙女宽松无袖背心裙子潮",
							"minPrice":188,
							"sku":"尺寸：M",
							"itemId":141334994,
							"munber": "1",
							"storeName":"杨泡泡 高端定制",
							"picUrls":"http://img.alicdn.com/imgextra/i1/2189536554/TB2eEAqvl0kpuFjy1zdXXXuUVXa_!!2189536554.jpg",
						},
						{
							"title":"【领天猫券减100】Rokid Pebble若琪月石无线蓝牙wifi智能音箱",
							"minPrice":1399,
							"sku":"尺寸：M",
							"itemId":1410444,
							"munber": "1",
							"storeName":"rokid旗舰店",
							"picUrls":"http://img.alicdn.com/imgextra/i4/2836768062/TB2s.G8bvNNTKJjSspcXXb4KVXa_!!2836768062.jpg",
						},
						{
							"title":"POWO衬衫男士短袖深蓝韩版修身青年衣服商务休闲男装寸衫夏季衬衣",
							"minPrice":139,
							"sku":"尺寸：M",
							"itemId":1403444,
							"munber": "1",
							"storeName":"powo旗舰店",
							"picUrls":"http://img.alicdn.com/imgextra/i2/2934742649/TB2B.7dhMJlpuFjSspjXXcT.pXa_!!2934742649.jpg",
						},
						{
							"title":"【百草味-香辣味/五香酱卤牛肉120g】冷吃熟食卤味肉类零食小吃",
							"minPrice":19.8,
							"itemId":1413344781,
							"sku":"尺寸：M",
							"munber": "1",
							"storeName":"百草味旗舰店",
							"picUrls":"http://img.alicdn.com/imgextra/i3/628189716/TB1kiJkgrsTMeJjy1zcXXXAgXXa_!!0-item_pic.jpg",
						}
					]; 
			for(var i = 0; i < data.length; i ++){
				data[i].isShow = false;
				data[i].choose_pic = "./img/index.png";
			}
			this.show_list = data;
			this.mun_length = data.length;
		};
		 //初始函数
		this.$nextTick(function  init(){
            this.getShopList();
        }); 
	},
	methods: {
		// 点击编辑事件
		edit: function(v){
			v.isShow = !v.isShow;
		},
		// 点击选择事件（单选）
		singleElect: function(v){
			this.count = Number(this.count);
			if(v.choose_pic == "./img/index.png"){
				v.choose_pic = "./img/choosed.png";
				this.count += Number(v.minPrice * v.munber);
			}else{
				v.choose_pic = "./img/index.png";
				if(this.count < 0){
					this.count = 0;
				}else{
					this.count -= Number(v.minPrice * v.munber);
					this.count = this.count.toFixed(2);
				}
			}
			this.allChoose();
		},
		// 点击选择事件（全选）
		generalElect: function(){
			this.count = Number(0);
			if(this.choose_pic == "./img/index.png"){
				for(var i = 0; i < this.show_list.length; i ++){
					this.count += Number(this.show_list[i].minPrice * this.show_list[i].munber);
					this.show_list[i].choose_pic = "./img/choosed.png";
				}
				this.choose_pic = "./img/choosed.png";
			}else{
				for(var i = 0; i < this.show_list.length; i ++){
					this.count = 0;
					this.show_list[i].choose_pic = "./img/index.png";
				}
				this.choose_pic = "./img/index.png";
			}
		},
		// 判断是否选择完
		allChoose: function(){
			var isChange = true;
			for(var i = 0; i < this.show_list.length; i ++){
				if(this.show_list[i].choose_pic != "./img/choosed.png"){
					isChange = false;
					this.choose_pic = "./img/index.png";
					break;
				}
			}
			if(isChange){
				this.choose_pic = "./img/choosed.png";
			}
		},
		// 点击“-”号
		reduce: function(v){
			//v.munber = Number(v.munber).toFixed(2);
			if(v.munber <= 1){
				return;
			}else{
				v.munber -= 1;
			}
		},
		// 点击“+”号
		add: function(v){
			v.munber = Number(v.munber);
			v.munber += 1;
		},
		// 手动输入数量
		updateNum: function(v,index){
			if($(".num").val() <= 1){
				v.munber = 1;
			}else{
				v.munber = $(".num").val();
			}
		},
		// 删除操作
		deleteItem: function(v){
			for(var i = 0; i < this.show_list.length; i ++){
				if(v.choose_pic == "./img/choosed.png" && this.show_list[i].itemId == v.itemId){
					this.show_list.splice(i,1);
					this.mun_length -= 1;
					return;
				}
			}
		}
	}
});