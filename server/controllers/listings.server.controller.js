<<<<<<< HEAD

/* Dependencies */
var mongoose = require('mongoose'),
    Listing = require('../models/listings.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) {
  /** TODO **/
  /* Replace the article's properties with the new properties found in req.body */
  /* Save the article */
  //req.body contains the user input (the new properties for the listing)
  //req.listing contains the original listing with its orginal properties.
  var listing = new Listing(req.body);
  Listing.findOneAndUpdate({code : req.listing.code},
                           {code : listing.code, name : req.body.name, address : req.body.address},
                            function(err, location) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
      //Check for differences between req.listing and req.body.
      //console.log(req.listing);
      //console.log(req.body);
    }
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;

    //This function finds AND removes the specified item.
  Listing.findOneAndRemove({code : listing.code}, function(err, location){
    if(err) {
      res.status(400).send(err);
    }
    else {
      res.json(listing);
    }
  });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  //The sort function is reflected when the webpage is refreshed.
  var listing = req.listing;
  var mysort = {code: 1}; //Sort function sorts alphabetically by code

  Listing.find({}, function(err, listings) {
    if (err) {
      res.status(400).send(err);
    }
    else {
      res.json(listings);
    }
  }).sort(mysort);
};

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};
=======

/* Dependencies */
var mongoose = require('mongoose'),
    Listing = require('../models/listings.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) {
  /** TODO **/
  /* Replace the article's properties with the new properties found in req.body */
  /* Save the article */
  //req.body contains the user input (the new properties for the listing)
  //req.listing contains the original listing with its orginal properties.
  var listing = new Listing(req.body);
  Listing.findOneAndUpdate({code : req.listing.code},
                           {code : listing.code, name : req.body.name, address : req.body.address},
                            function(err, location) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
      //Check for differences between req.listing and req.body.
      //console.log(req.listing);
      //console.log(req.body);
    }
  });
};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;

    //This function finds AND removes the specified item.
  Listing.findOneAndRemove({code : listing.code}, function(err, location){
    if(err) {
      res.status(400).send(err);
    }
    else {
      res.json(listing);
    }
  });
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  //The sort function is reflected when the webpage is refreshed.
  var listing = req.listing;
  var mysort = {code: 1}; //Sort function sorts alphabetically by code

  Listing.find({}, function(err, listings) {
    if (err) {
      res.status(400).send(err);
    }
    else {
      res.json(listings);
    }
  }).sort(mysort);
};

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.

  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};
>>>>>>> 868e83aefae02a7fdaf56e8fa1e8634a42389545
