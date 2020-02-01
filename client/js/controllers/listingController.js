<<<<<<< HEAD
angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO
      *Save the article using the Listings factory. If the object is successfully
      saved redirect back to the list page. Otherwise, display the error
     */
      Listings.create($scope.newListing).then(function(response) {
        $scope.listings.push(response.data); //Pushes new data into the array so changes immediately is reflected on website.
        $window.location.href = '/'; //Redirects back to the root directory.
        console.log('Successfully added listing!');
      }, function(error) {
        console.log('Unable to add listing: ', error);
      });
    };

    $scope.deleteListing = function(id) {
      /**TODO
         Delete the article using the Listings factory. If the removal is successful,
     navigate back to 'listing.list'. Otherwise, display the error.
        */
      Listings.delete(id).then(function(response) {
        //This version of deletion requires the webpage to be refreshed to reflect changes.
        Listings.splice($scope.listings.indexOf($scope.listings), 1);
        $window.location.href = '/'; //Redirects back to the root directory.
      }, function(error) {
        console.log('Unable to delete listing: ', error);
      });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
=======
angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO
      *Save the article using the Listings factory. If the object is successfully
      saved redirect back to the list page. Otherwise, display the error
     */
      Listings.create($scope.newListing).then(function(response) {
        $scope.listings.push(response.data); //Pushes new data into the array so changes immediately is reflected on website.
        $window.location.href = '/'; //Redirects back to the root directory.
        console.log('Successfully added listing!');
      }, function(error) {
        console.log('Unable to add listing: ', error);
      });
    };

    $scope.deleteListing = function(id) {
      /**TODO
         Delete the article using the Listings factory. If the removal is successful,
     navigate back to 'listing.list'. Otherwise, display the error.
        */
      Listings.delete(id).then(function(response) {
        //This version of deletion requires the webpage to be refreshed to reflect changes.
        Listings.splice($scope.listings.indexOf($scope.listings), 1);
        $window.location.href = '/'; //Redirects back to the root directory.
      }, function(error) {
        console.log('Unable to delete listing: ', error);
      });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
>>>>>>> 868e83aefae02a7fdaf56e8fa1e8634a42389545
