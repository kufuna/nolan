$(window).load(function(){
	$('#loader').hide();
	$('#slider').show();
})
$(function(){
	const a = $('.box');
	for (var i = 0; i < $(a).length; i++) {
		$(a[i]).css({ animationDelay : `.${i}s` })
	}
});
$(function(){
	const a = $('h1 span');
	for (var i = 0; i < a.length; i++) {
		$(a[i]).html(`0${i + 1} `)
	}
})
$('.innerBody').click(function(){
	// $(this).css({ width : '100%' , height : '100%' , left : '0' , right : '0' , bottom :'0' , top : '0' })
	$('.innerBody h1').css({ transform : 'translateY(-100%)' });
	$(this).parent().addClass('height');
	setTimeout(function() {
		$('.innerBody').parent().css({ height : '0' , transform : 'skew(20deg)' , transition : '1s' });
		setTimeout(function() {
			$('.height').addClass('active');
			$('.innerBody').toggle();
		}, 850);
	}, 300);
	setTimeout(function() {
		$('.height').find('.c_body').show();
	}, 2100);
	
})
$('.close span').on('click',function(){
	$(this).parent().parent().parent().parent().parent().removeClass('active');
	$(this).parent().parent().parent().parent().hide();
	$('.innerBody').toggle();
	setTimeout(function() {
		$('.innerBody').parent().css({ height : '386px' , transform : 'skew(0deg)' , transition : '1s' });
		$('.innerBody').parent().removeClass('height');
		setTimeout(function() {
			$('.innerBody h1').css({ transform : 'translateY(0%)' });
			$('#body').css({ position : 'relative' })
		}, 950);
		setTimeout(function() {
			// $('.box2 .innerBody').trigger('click')
		}, 700);
	}, 500);
})
$('.c_btn').on('click',function(){
	const b = $(this).attr('data-target')
	$(this).parent().parent().parent().parent().parent().parent().removeClass('active');
	$(this).parent().parent().parent().parent().parent().hide();
	$('.innerBody').toggle();
	setTimeout(function() {
		$('.innerBody').parent().css({ height : '386px' , transform : 'skew(0deg)' , transition : '1s' });
		$('.innerBody').parent().removeClass('height');
		// setTimeout(function() {
			$('.innerBody h1').css({ transform : 'translateY(0%)' });
		// 	$('#body').css({ position : 'relative' })
		// }, 950);
		setTimeout(function() {
			$(b).trigger('click')
		}, 700);
	}, 500);
})
$(function(){
	const a = $('.c_btn');
	for (var i = 0; i < a.length; i++) {
		$(a[i]).css({ animationDelay : `.${i + 4}s` })
	}
})
$(function() {
    var slides = $('.sliderr ul').children().length;
    var slideWidth = $('.sliderr').width();
    var min = 0;
    var max = -((slides - 1) * slideWidth)/13;
    console.log(max);

    $(".sliderr ul").width(slides*slideWidth).draggable({
        axis: 'x',
        drag: function (event, ui) {
            if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        }
    });
});
