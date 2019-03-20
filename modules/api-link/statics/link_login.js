define(function(){
	var init = function () {

			

 		//获取登录用户信息
//		$("#btGetLoginInfo").tap(function(e){
//			app.link.getLoginInfo(function(result){
//				var res1 = result.loginId;     //警号
//				var res2 = result.userName;    //姓名 
//				var res3 = result.orgName;     //组织名称
//				var res4 = result.identityNum; //身份证号
//				var str = "警号："+res1+"\n"+"姓名："+res2+"\n"+"所属单位："+res3+"\n"+"身份证号："+res4;
//				app.alert(str,null,"当前认证用户信息"); 
//				localStorage.setItem("警号",res1);
//				localStorage.setItem("姓名 ",res2);
//				localStorage.setItem("组织名称",res3);
//				localStorage.setItem("身份证号",res4);
//				window.location.href="New_PC_App/New_PC_App/device.html";
//			});
//		
//		});
	}
	return {
		init : init 
	}
});
