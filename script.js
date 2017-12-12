$(document).on('ready', function(){
	$('.dropdown').on('click', function(){
		console.log('clicked');
		$(this).parent().toggleClass('expanded');
	});
});

