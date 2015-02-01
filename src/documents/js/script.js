/* Your scripts go here */

$(document).ready(function(){

	$('.nav-button').click(function(e){
		$('body').toggleClass('menu-is-opened');
	});
	$('.close-nav').click(function(e){
		$('body').removeClass('menu-is-opened');
	});


	$('.nav-list a, #lnkLogin, #lnkGetInvite').click(function(e){
		var value =  $(e.target).text();
		ga('send',  'event', 'link', 'click', value);
	});

	$('.invite-form #btnGetInvite').click(function(e){
		e.preventDefault();

		ga('send',  'event', 'button', 'click', 'get invite');

		$('.invite-form #pnlError').addClass('hide');
		$('.invite-form #pnlSuccess').addClass('hide');

		var email = $('.invite-form #txtEmail').val();
		var atIndex = email.indexOf('@');
		var lastDotIndex = email.lastIndexOf('.');

		if(email && 0 <= atIndex && atIndex <= lastDotIndex){
			var request = $.ajax({
									url: "https://api.solidbuild.net/v1/invites",
									data: JSON.stringify({email:email}),
									type: "POST",
									contentType : "application/json;charset=UTF-8",
									crossDomain : true,
								});

			$('.invite-form #btnGetInvite').html('Sending...').attr('disabled', 'disabled');

			request.done(function(e){
				$('.invite-form #pnlSuccess').removeClass('hide');
				$('.invite-form #btnGetInvite').html('Get invite').removeAttr('disabled');
			});
		}
		else {
			$('.invite-form #pnlError').removeClass('hide');
		}

		return false;
	});

	$('#btnAddIntegration').click(function(e){
		e.preventDefault();

		return false;
	});

});