$(function(){
	$("form[name='login']").validate({
		onfocusout: false,
		onkeyup: false,
		errorElement: 'div',
		errorClass:"homeloginerror",
		errorPlacement: function(error, element){
			$('form[name="login"] button.button').after(error);
		},
		rules:{
			user_id:{
				required: true,
				minlength: 8,
				maxlength: 25
			}
		},
		messages:{
			user_id:{
				required: "Please enter a valid Login ID.",
				minlength: "Please enter a valid Login ID.",
				maxlength: "Please enter a valid Login ID."
			}
		}
	});
});
