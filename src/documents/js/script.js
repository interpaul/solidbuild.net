/* Your scripts go here */
$(document).ready(function(){
	$("#sticker").sticky({topSpacing:0, wrapperClassName: "hold", className:"fixed"});
	
	$('.invite-form #btnGetInvite').click(function(e){
		e.preventDefault();

		var email = $('.invite-form #txtEmail').val();
		var atIndex = email.indexOf('@');
		var lastDotIndex = email.lastIndexOf('.');

		if(email && 0 <= atIndex && atIndex <= lastDotIndex){
		    var request = $.ajax({
		                            url: "https://api.solidbuild.net/v1/invites",
		                            data: JSON.stringify({email:email}),
		                            type: "POST",
		                            contentType : "application/json;charset=UTF-8",
		                        });

		    $('.invite-form #btnGetInvite').html('Sending...').attr('disabled', 'disabled');

		    request.done(function(e){
		        $('.invite-form #btnGetInvite').html('Get invite').removeAttr('disabled');
		    });
		}

		return false;
	});

});