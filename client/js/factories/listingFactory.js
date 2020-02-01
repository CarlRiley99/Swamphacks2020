angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      //For running using Heroku:
      //return $http.get('https://limitless-retreat-58271.herokuapp.com/api/listings');
      //For running locally on computer:
      return $http.get('http://localhost:8080/api/listings');
    },

	create: function(listing) {
    //For running using Heroku:
	  //return $http.post('https://limitless-retreat-58271.herokuapp.com/api/listings', listing);
    //For running locally on computer:
    return $http.post('http://localhost:8080/api/listings', listing);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
       //For running using Heroku:
       //return $http.delete('https://limitless-retreat-58271.herokuapp.com/api/listings/' + id);
       //For running locally on computer:
       return $http.delete('http://localhost:8080/api/listings/' + id);
    }
  };

  return methods;
});
