$(document).ready(function(){
	
	$("#sign up").click(function(){
		if($("#name").val()==""){
			$("#name").css("border","1px solid red");
			$("#name").focus();
			return false;
		}
		else{
			$("#name").css("border","1px solid green");
		}
		if($("#email").val()==""){
			$("#email").css("border","1px solid red");
			$("#email").focus();
			return false;
		}
		else{
			$("#email").css("border","1px solid green");
		}
		if($("#phonenumber").val()==""){
			$("#phonenumber").css("border","1px solid red");
			$("#phonenumber").focus();
			return false;
		}
		else{
			$("#phonenumber").css("border","1px solid green");
		}
		if($("#password").val()==""){
			$("#password").css("border","1px solid red");
			$("#password").focus();
			return false;
		}
		else{
			$("#password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/register.php",
			dataType:"json",
			data:$("#loginfrm").serialize(),
			success:function(res){
				if(res.status=="Done"){
					window.location="login.html";
				}
			}

		})
	})
})