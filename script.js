// RETORNO DO TEXTO HTML


function calcularCadastro() {

    let inputNome = document.querySelectorAll('.nome')[0].value;
    let inputNome1 = document.querySelectorAll('.nome')[1].value;
    let inputNome2 = document.querySelectorAll('.nome')[2].value;
    let inputNome3 = document.querySelectorAll('.nome')[3].value;

    let inputNumero = document.querySelectorAll('.numero')[0].value;
    let inputNumero1 = document.querySelectorAll('.numero')[1].value;

    let resultadosCadastro = document.getElementById("resultadosCadastro");

    let nome = inputNome && inputNome1 && inputNome2 && inputNome3;
    let numero = inputNumero && inputNumero1;

    resultadosCadastro.innerHTML = nome;
    resultadosCadastro.innerHTML = numero;

    console.log(nome)
    console.log(numero)

    if (nome == '' || numero == '') {
     resultadosCadastro.innerHTML = "Por favor, verifique se falta preencher algum campo de dados do seu bichinho de estimação.";
    }

    else {
       
        resultadosCadastro.innerHTML = "Pet cadastrado com sucesso.";
       
        // document.location.reload()
    }
    

    console.log("Calculando...");
}

function calcularConsulta (){

    let inputName = document.querySelectorAll('.inputConsulta')[0].value;
    let inputNumber = document.querySelectorAll('.inputConsulta')[1].value;

    let resultadosConsulta = document.getElementById("resultadosConsulta");

    let name = inputName;
    let number = inputNumber

    resultadosConsulta.innerHTML = name;
    resultadosConsulta.innerHTML = number;

    console.log(name)
    console.log(number)

    if (name == '' || number == '') {
        resultadosConsulta.innerHTML = "Por favor, verifique se preencheu nome e senha corretamente.";
        
       }
   
       else {
          
           resultadosConsulta.innerHTML = "Dados do seu Pet:";
   
       }

       console.log("Calculando a consulta...");
}


function mostrarSenha() {

  let olhoRegistro = document.getElementById("passRegistro");

  if(olhoRegistro.type == "password"){
    olhoRegistro.type = "text";
    
  }else{
    olhoRegistro.type = "password";
  }
}

function mostrarPassword() {

  let olhoConsulta = document.getElementById("passConsulta");

  if(olhoConsulta.type == "password"){
    olhoConsulta.type = "text";

  }else{
    olhoConsulta.type = "password";
  }
}
