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

    let inputName = document.querySelectorAll('.name')[0].value;
    let inputNumber = document.querySelectorAll('.number')[0].value;

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


document.getElementById('olhoRegistro').addEventListener('mousedown', function() {
    document.getElementById('passRegistro').type = 'text';
  });
  
  document.getElementById('olhoRegistro').addEventListener('mouseup', function() {
    document.getElementById('passRegistro').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olhoRegistro').addEventListener('mousemove', function() {
    document.getElementById('passRegistro').type = 'password';
  });

  
document.getElementById('olhoConsulta').addEventListener('mousedown', function() {
    document.getElementById('passConsulta').type = 'text';
  });
  
  document.getElementById('olhoConsulta').addEventListener('mouseup', function() {
    document.getElementById('passConsulta').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olhoConsulta').addEventListener('mousemove', function() {
    document.getElementById('passConsulta').type = 'password';
  });
