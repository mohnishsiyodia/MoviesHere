function mobileCheck() {
	var winWidth = $(window).width();
	if (winWidth <= 768) {
		$("#sidebar").after($("#body .pagination:first"))
	} else {
		$(".products-wrap").before($("#body .pagination:first"))
	}
}
