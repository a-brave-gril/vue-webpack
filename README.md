#项目简介
	1、这个项目主要是模仿移动端购物车的，用到了JS的逻辑是用VUE写的，样式用的SASS，最后由webpack打包完成。
#项目目录介绍
	+dist       //打包后的文件，即生产环境
		+img
		+bundle.js     
		+index.html
		+styles.css
	+node_modules
	+src            //   开发环境
		+font      //    放置字体
		+img	   //    图片
		+script    //    JS 代码
			+common
			+lib
			+page
		+style     //    样式代码
			+basic        // 项目中的公用样式
			+component    // 放置组件样式
			+frame	      // 项目框架样式
			+mix          // 混合器
			+reset        //放置重置样式
			+variables    // 放置变量
			+view         // 每个页面的样式
			+common.scss  
		+index.html //   模板文件
	+package.json 
	+README.md
	+webpack.config.js
