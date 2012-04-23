App.Events = (function(lng, app, undefined) {

	$$('#missing-pets-link').tap(function(event){
		// lng.Router.section('missing-pets');
		lng.Router.article('missing-pets','missing-all');
		alert('test');
	});

   return {

   }

})(LUNGO, App);