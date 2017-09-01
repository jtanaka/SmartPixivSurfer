$(function(){
	const nav_selector = "nav.column-menu";
	const illust_selector = ".works_display";
	const info_selector = ".work-info";
	const tag_selector = ".work-tags";
	const sns_selector = ".reaction-container";
	const thumbnail_selector = "div.ui-scroll-view.profile-module";
	const thumbnail_wrapper_selector = "div.ui-scroll-view.profile-module > div";
	const thumbnail_profile_selector = "div.ui-scroll-view.profile-module > div > div";

	$(info_selector).before($(illust_selector));
	$(illust_selector).after($(thumbnail_selector));

	$(".layout-column-2").fadeIn(500);
});