App.View = (function(lng, app, undefined) {

  	test : [
    	        {
            "id":3,
            "date": "12/10/2011",
            "type": "Walk",
            "distance": "2.5 miles",
            "comments": "Shouldn't have taken the dog",
            "minutes": 45
        },
        {
            "id":4,
            "date": "12/09/2011",
            "type": "Run",
            "distance": "Long",
            "comments": "Legs felt good",
            "minutes": 75
        }
	];

	var data = [{
    id: 1,
    name: '@soyjavi',
    description: 'Author of LungoJs Framework'
	},{
	name:'testatwasfsa'
}
	];

	var markup = '<p>{{name}}</p>';

	lng.View.Template.create('temp',markup);


	lng.View.Template.render('#e','temp',data,function(){

	lng.ready(function(){
			lng.View.Scroll.refresh('article-1');
		});
	});

    return{




    }

})(LUNGO, App);