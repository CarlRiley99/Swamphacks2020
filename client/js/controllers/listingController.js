angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      console.log(response);
      $scope.listings = response.data;
      //Format date properly
      // $scope.listings.forEach(task => {
      //   var month = format(task.deadline.getMonth() + 1);
      //   var day = format(task.deadline.getDate());
      //   var year = format(task.deadlines.getFullYear());
      //   console.log(month + "/" + day + "/" + year);
      // });
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.depositMoney = function (amount) {
      $scope.balance = amount;
    };

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO
      *Save the article using the Listings factory. If the object is successfully
      saved redirect back to the list page. Otherwise, display the error
     */
      console.log($scope.newListing);
      Listings.create($scope.newListing).then(function(response) {
        $scope.listings.push(response.data); //Pushes new data into the array so changes immediately is reflected on website.
        //window.location.href = '/'; //Redirects back to the root directory.
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
        $scope.listings.splice($scope.listings.indexOf($scope.listings), 1);
        window.location.href = '/'; //Redirects back to the root directory.
      }, function(error) {
        console.log('Unable to delete listing: ', error);
      });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
