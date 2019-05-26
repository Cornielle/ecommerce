
$(document).ready(function(){
	$("#current_pwd").keyup(function(){
		let current_pwd = $("#current_pwd").val();
		$.ajax({
			type:'get',
			url:'/admin/check-pwd',
			contentType : 'application/json',
			data:{current_pwd:current_pwd},
			success:function(resp){
				if(current_pwd.length > 5)
					chkPwd(resp);
			},error:function(){
				if(current_pwd.length > 5)
					console.log("Error");
					chkPwd(resp);
			}
		});
	});
	function chkPwd(condition){
		if(condition){
			$("#chkPwd").css('color:green')
			$("#chkPwd")[0].innerHTML = 'checking'				
			$("#chkPwd")[0].innerHTML = 'Its correct!'
		} 
		else{ 
			$("#chkPwd").css('color:red')
			$("#chkPwd")[0].innerHTML = 'checking'			
			$("#chkPwd")[0].innerHTML = 'Incorrect! please type it again'
		} 
	}
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();	
	$('select').select2();

	// Form Validation
    $("#basic_validate").validate({
		rules:{
			required:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
			current_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#confirm_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
});
