//===================================
// Video Modal Variables
//===================================

var gdVideo = $('#gd-video');


//===================================
// Froogaloop
//===================================

function playGDModalVid(playerID) {
	var player = $f(playerID.get(0));

	player.addEvent('ready', function(progress) {
			player.api('play');
	});
}

function pauseGDModalVid(playerID) {
	var player = $f(playerID.get(0));

	player.addEvent('ready', function() {
			player.api('pause');
	});
}


//===================================
// Video Modal Events
//===================================

function openVideoModal(event) {
	event.preventDefault();

	var duration = 200,
			modalId = $(this).attr('href'),
			modal = $(modalId),
			inner = modal.find(".gd-inner");

	$('#gd-close-anchor').text('✕');

	$('#gd-video').attr(
		'src',
		'https://player.vimeo.com/video/214092083'
	);

	$(".gd-inner").fitVids({
		customSelector: "iframe[src^='https://player.vimeo.com']"
	});

	modal.removeClass('closed').addClass('opened');

	setTimeout(function() {
		inner.fadeIn(duration, function() {
			playGDModalVid(gdVideo);
		});
	}, duration);
}


function closeVideoModal(event) {
	event.preventDefault();

	var duration = 200,
			modal = $(this).closest(".gd-modal"),
			inner = modal.find(".gd-inner");

	inner.fadeOut(duration, function() {
		pauseGDModalVid(gdVideo);
		modal.removeClass('opened').addClass('closed');
	});
}


//===================================
// Video Modal Triggers
//===================================

$('.gd-show-modal').on('click', openVideoModal);
$('.gd-show-modal').on('touchstart', openVideoModal);

$('#gd-modal-overlay').on('click', closeVideoModal);
$('#gd-modal-overlay').on('touchstart', closeVideoModal);