<<<<<<< HEAD
App.Events = (function(lng, app, undefined) {






	 lng.dom('body').tap(function(event){
	 	//lng.Router.section('about');
	 	lng.Router.article('about','aboutone');
	 });
    return {

    }

=======
App.Events = (function(lng, app, undefined) {

   lng.dom('body').tap(function(event) {
        lng.Router.section('about');
 	});	
 	lng.Router.section('about');
   return {

   }

>>>>>>> master
})(LUNGO, App);