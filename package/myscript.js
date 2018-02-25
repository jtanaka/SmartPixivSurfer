$(function(){
	const nav_selector = "nav.column-menu";
	const illust_selector = ".works_display";
	const info_selector = ".work-info";
	const tag_selector = ".work-tags";
	const sns_selector = ".reaction-container";
	const thumbnail_title_selector = ".sQnmXM9";
	const thumbnail_selector = ".ui-scroll-view";
	const showcase_selector = ".showcase-container";
	const link_selector =".other-links-container";

	$(info_selector).before($(illust_selector));
	$(illust_selector).after($(link_selector));

	$(".layout-column-2").fadeIn(500);
});