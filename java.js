  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJVDVQBa4JkSkiJXXuKPTk4zYJwp8IYWA",
    authDomain: "rps-multiplayer-e04d8.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-e04d8.firebaseio.com",
    storageBucket: "rps-multiplayer-e04d8.appspot.com",
    messagingSenderId: "366905883481"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  var connections = database.ref("/connections");
  var connectedRef = database.ref(".info/connected");

//when the user's connection state changes 
  connectedRef.on("value", function(snapshot) {

  	//if they are connected then add them to the connections list
  	if(snapshot.val()) {
  		var connect = connections.push(true);

  	//when they disconnect remove them from the list
  		connect.onDisconnect().remove();
  	}

  });

  connectedRef.on("value", function(snapshot) {

  	if(connections => 2){
  		$(".start").html("<button class='btn btn-default'>" + "Start");
  	} 

  });

