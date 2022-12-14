
const firebaseConfig = {
  apiKey: "AIzaSyBUqgnoerUjLG28TRfsRE-AwzMfIeJ3GvE",
  authDomain: "kiwitter-6caf8.firebaseapp.com",
  databaseURL: "https://kiwitter-6caf8-default-rtdb.firebaseio.com",
  projectId: "kiwitter-6caf8",
  storageBucket: "kiwitter-6caf8.appspot.com",
  messagingSenderId: "219530095366",
  appId: "1:219530095366:web:11c087c8511ee748f88c87",
};
   //Utilize o código 'getItem' para pegar um item dentro do localStorage
   user_name = localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
   //Utilize o código 'innerHTML' para mudar o conteúdo HTML
   //Utilize a variável que guarda o nome do usuário
   document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";
   
   function peppapig()
   {
     room_name = document.getElementById("room_name").value;
   //Coloque o nome da variável que guardará o nome da sala
     firebase.database().ref("/").child(room_name).update({
       purpose : "adicionar sala"
     });
   
       localStorage.setItem("room_name", room_name);
       //Código que muda de tela
       window.location = "kwitter_page.html";
   }
   
   //Função para obter dados do firebase
   function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
   
   }
   
   getData();
   
   function redirectToRoomName(name)
   {
 
     localStorage.setItem("room_name", name);
     //Código que troca de tela
       window.location= "kwitter_page.html";
   }
   
   function logout() {
     // Utilize o código 'removeItem' para remove o usuário e sala
   localStorage.removeItem("user_name");
   localStorage.removeitem("room_name");
   //Utilize o código que troca de tela
       window.location = "index.html";
   }