1
$(document).ready(function(){
	var imgs= new Array("adver01.jpg","adver02.jpg","adver03.jpg","adver04.jpg","adver05.jpg","adver06.jpg");
	var flag = 0;	//数组下标
	$(".arrowRight").click(function(){
		if(flag == imgs.length-1){	//当前图片为最后一张时，提示
			alert("不要再点啦，你这样是点不死我的啦");
		}else{
			flag++;
			var i = flag+1;
			$(".adver").css("background","url(images/"+imgs[flag]+")");
			$("li:nth-of-type("+i+")").css("backgroundColor","orange").siblings().css("backgroundColor","#333333");	//当前图片对应的数字的兄弟icss样式
		}
	});
	
	$(".arrowLeft").click(function(){
		if(flag == 0){
			alert("不要再点啦，你这样是点不死我的");
		}else{
			flag--;
			var i = flag+1;
			$(".adver").css("background","url(images/"+imgs[flag]+")");
			$("li:nth-of-type("+i+")").css("backgroundColor","orange").siblings().css("backgroundColor","#333333");
        }
        
	})
    
    

    function change() {
        if (flag > imgs.length - 1) {
            flag=0
        } else {
            flag++
        }
    }
	
	$(".adver").mouseover(function(){
        $(".arrowRight,.arrowLeft").show();
	}).mouseout(function(){
        $(".arrowRight,.arrowLeft").hide();
	})
	})