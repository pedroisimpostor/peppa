
function add_user() {

  user_name = document.getElementById("user_name").value;
// Armazenado local do navegador
// Variavel que guarda o nome do usuário
  localStorage.setItem("user_name", user_name);
  //Código que muda de tela
    window.location = "kwitterRoom.html";
}

