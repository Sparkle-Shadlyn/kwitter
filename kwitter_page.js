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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
          });
          document.getElementById("msg").value = "";
      
    }
    function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
