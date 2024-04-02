document.getElementById("meuFormularioLogin").addEventListener("submit", function(event){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if(username === "" || password === "") {
      alert("Nome de usuário e senha são obrigatórios!");
      event.preventDefault();
    } else if(password.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres!");
      event.preventDefault();
    }
  });
  