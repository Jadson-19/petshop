let firebaseConfig = {
  apiKey: "AIzaSyDtS5jwFxWe0R8k7-06TLqrcx_GrVS-Dcg",
  authDomain: "gerenciador-de-pets.firebaseapp.com",
  projectId: "gerenciador-de-pets",
  storageBucket: "gerenciador-de-pets.appspot.com",
  messagingSenderId: "113921933591",
  appId: "1:113921933591:web:82daad3af5b831d653b752",
  measurementId: "G-NYFLG73ECE"
};


// Initialize Firebase


let app = firebase.initializeApp(firebaseConfig);

const addpetShop = document.querySelector('#formulario')

const coleta = document.querySelector('#coleta')

let db = firebase.firestore();

let DADOS = "petShop";

addpetShop.addEventListener('submit', function (a) {

  // impede o envio do form
  a.preventDefault();

  db.collection(DADOS).add(

    {

      tutor: a.target.tutor.value,
      mascote: a.target.mascote.value,
      idade: a.target.idade.value,
      raça: a.target.raça.value,
      peso: a.target.peso.value,
      email: a.target.email.value,
      senha: a.target.senha.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp() 

    }).then(() =>{

        console.log("Dados cadastrados no banco com sucesso!");

        document.location.reload()
    }).catch(err =>{

        console.log('Dados não cadastrados. Tente Novamente', err.message);
    });

// JUNTAR O AUTHENTICATION DO USUÁRIO COM O DOCUMENTO

 let newUserEmail = a.target.email.value;
 let newUserPassword = a.target.senha.value;
 let auth = firebase.auth()

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)

 .then(data =>{
    
    let uid = data.user.uid;

    let createrUser = db.collection(DADOS).set(

     createrUser.doc(uid).set({

        

            tutor:  a.target.tutor.value,
            mascote: a.target.mascote.value,
            idade: a.target.idade.value,
            raça: a.target.raça.value,
            peso: a.target.peso.value,
            email: a.target.email.value,
            senha: a.target.senha.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
         
     }));

     console.log('Conta criada com sucesso!')
    
 })

});

//  LOGIN DO USUARIO

function login (){

  const resultadosConsulta = document.querySelector('#resultadosConsulta');
  coleta.addEventListener ('click', () => {
 
      formData = {
 
         email: document.querySelector('input[name=loginEmail]').value,
         senha: document.querySelector('input[name=loginSenha]').value,
      }
 
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.senha).then((currentUser) => {
 
         db.collection(DADOS).where("email", "==", formData.email).get().then(snapshot =>{
             snapshot.forEach((doc) =>{
                 let dados = doc.data();
 
                 resultadosConsulta.innerHTML = (
                     
                     "Tutor: " + dados.tutor + ".<br>" + 
                     "Mascote: " + dados.mascote + ".<br>" + 
                     "Idade: " + dados.idade + ".<br>" + 
                     "Raça: " + dados.raça + ".<br>" + 
                     "Peso: " + dados.peso + ".<br>" + 
                     "Data do cadastro: " + dados.createdAt.toDate() + "."
                 )
                
             })
         })
 
              console.log('Dados coletados com sucesso!') 
         }).catch(error => {
         console.log('Ocorreu um erro. Dados não coletados!', error)
   }) 
 
  });
 
 };
 
 login();

// MOSTRAR O REGISTRO DO HTML NA TELA

function calcularCadastro() {

  let inputTutor = document.querySelectorAll('.tutor')[0].value;
  let inputMascote = document.querySelectorAll('.mascote')[0].value;
  let inputIdade = document.querySelectorAll('.idade')[0].value;
  let inputRaça = document.querySelectorAll('.raça')[0].value;
  let inputPeso = document.querySelectorAll('.peso')[0].value;
  let inputEmail = document.querySelectorAll('.email')[0].value;
  let inputSenha = document.querySelectorAll('.senha')[0].value;

  let verificarCadastro = document.getElementById("verificarCadastro");

  let primeiroGrupo = inputTutor && inputMascote && inputIdade;
  let segundoGrupo = inputRaça && inputPeso && inputEmail && inputSenha;

  verificarCadastro.innerHTML = primeiroGrupo;
  verificarCadastro.innerHTML = segundoGrupo;

  if (primeiroGrupo == '' || segundoGrupo == '') {
    verificarCadastro.innerHTML = "Por favor, verifique se falta preencher algum campo de dados do seu bichinho de estimação.";
}

else {

    verificarCadastro.innerHTML = "Pet cadastrado com sucesso.";
}


  console.log("Calculando...");
}

// MOSTRAR A CONSULTA DO HTML NA TELA

function calcularConsulta() {

  let inputEmail = document.querySelectorAll('.consultaEmail')[0].value;
  let inputSenha = document.querySelectorAll('.consultaSenha')[0].value;

  let verificarConsulta = document.getElementById("verificarConsulta");

  let email = inputEmail;
  let senha = inputSenha;

  verificarConsulta.innerHTML = email;
  verificarConsulta.innerHTML = senha;

  if (email == '' || senha == '') {
      verificarConsulta.innerHTML = "Por favor, verifique se preencheu e-mail e senha corretamente.";
  }

  else {

      verificarConsulta.innerHTML = "Dados do seu Pet:";
  }

  console.log("Calculando a consulta...");
}


function mostrarSenha() {

  let olhoRegistro = document.getElementById("passRegistro");

  if (olhoRegistro.type == "password") {
    olhoRegistro.type = "text";

  } else {
    olhoRegistro.type = "password";
  }
}

function mostrarPassword() {

  let olhoConsulta = document.getElementById("passConsulta");

  if (olhoConsulta.type == "password") {
    olhoConsulta.type = "text";

  } else {
    olhoConsulta.type = "password";
  }
};
