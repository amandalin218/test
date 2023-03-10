$(function(){
	$('#the').click(function(){
		// window.open('thank.html');
		window.location.href = 'thank.html';
	});
	$('#modal2').click(function(){
		// window.open('modal2.html');
		window.location.href = 'modal2.html';
	});
	$(".btn-cta2").click(function(){
		$(".gashapon2").show();
		$(".gashapon,#lightbox").hide();
	});
});
function toggleLightbox () {
	const lightbox = document.querySelector('#lightbox');

	if (lightbox.className.indexOf('show') > -1) {
		lightbox.className = '';
	}
	else {
		lightbox.className = 'show';
	}
}
function toggleLightbox2 () {
	const lightbox = document.querySelector('#lightbox2');

	if (lightbox.className.indexOf('show') > -1) {
		lightbox.className = '';
	}
	else {
		lightbox.className = 'show';
	}
}