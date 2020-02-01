//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    //uri: 'mongodb://Carl_Riley:123abc@ds221435.mlab.com:21435/carl-bootcamp-3', //place the URI of your mongo database here.
    uri: 'mongodb://<dbuser>:<dbpassword>@ds345587.mlab.com:45587/swamphacks2020',
  },
  port: 8080
};
