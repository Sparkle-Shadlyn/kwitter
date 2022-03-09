
var firebaseConfig = {
      apiKey: "AIzaSyBuvGbyLZi7TnASVCEuA_ZlM0c9ONLEGQI",
      authDomain: "emeralds-and-ruby-4edb8.firebaseapp.com",
      databaseURL: "https://emeralds-and-ruby-4edb8-default-rtdb.firebaseio.com",
      projectId: "emeralds-and-ruby-4edb8",
      storageBucket: "emeralds-and-ruby-4edb8.appspot.com",
      messagingSenderId: "34395887304",
      appId: "1:34395887304:web:5328e2abe52992330cb7fd"
    };
    
    
    firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =" Welcome " + user_name+"!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
name = message_data['name'];
message = message__data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
});});}
getData();
