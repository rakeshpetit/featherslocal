import feathers from './feathers';

feathers.authenticate().then(data => {
  console.log(data);
  
}).catch(err => console.log(err)
);

// const io = require('socket.io-client');
// const feathers = require('feathers/client');
// const hooks= require('feathers-hooks');
// const socketio= require('feathers-socketio/client');
// const localstorage= require('feathers-localstorage');
// const authentication= require('feathers-authentication-client');

// const socket = io('http://localhost:3030/');
// const app = feathers()
//   .configure(socketio(socket)) // you could use Primus or REST instead
//   .configure(hooks())
//   .configure(authentication({ storage: window.localStorage }));

// app.authenticate({
//   strategy: 'local',
//   email: 'rakeshpetit@gmail.com',
//   password: 'raku1234'
// }).then(function(result){
//   console.log('Authenticated!', result);
// }).catch(function(error){
//   console.error('Error authenticating!', error);
// });
