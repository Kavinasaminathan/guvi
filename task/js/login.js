$(document).ready(function(){
    
	$("#save").click(function(){
		var email=$("#email").val();
		var password=$("#password").val();
		if(email==""){
			$("#email").css("border","1px solid red");
			$("#email").focus();
			return false;
		}
		else{
			$("#email").css("border","1px solid green");
		}
		if(password==""){
			$("#password").css("border","1px solid red");
			$("#password").focus();
			return false;
		}
		else{
			$("#password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/login.php",
			dataType:"json",
			data:$(".loginform").serialize(),
			success:function(res){
				if(res.status=="login"){
					window.location="profile.html";
				}
			}

		})
	})
})