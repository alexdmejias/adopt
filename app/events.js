App.Events = (function(lng, app, undefined) {

	lng.dom('#btn-about').tap(function(event){
		lng.Router.section('#about');
	});

	lng.dom('#btn-missing').tap(function(event){
		lng.Router.section('#missing');
		lng.Router.article('#missing','#missing-all');
	});

	lng.dom('#btn-learning-must').tap(function(event){
		lng.Router.section('#learning');
		lng.Router.article('#learning','#learning-must');
	});

	lng.dom('#btn-learning-faq').tap(function(event){
		lng.Router.section('#learning');
		lng.Router.article('#learning','#learning-faq');
		// WOULD IT BE POSSIBLE TO CHANGE data-title OF THE HEADER BY USING SOMETHING LIKE THIS.PARENT.ATTR(DATA-TITLE=XXXXX)
	});	

	// var learning = function(){
	// 	var id = $$(this).attr('id').split('-');
	// 	//route = id.split('-');
	// 	//lng.Router.section("'#"+id[1]+"'");
	// 	//lng.Router.article("'#"+id[1]+"'");

	// };


	lng.dom('#btn-register').tap(function(event){
		lng.Router.section('#register');
		lng.Router.article('#register','#register-list')
	});
	
	$$('a',$$('ul')).tap(function(event){
		//var id = this.attr('id').split('-');
		lng.Core.log(1, 'id');
	});

	return {
	};

})(LUNGO, App);