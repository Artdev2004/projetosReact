import './App.css'

function App() {
  
  
  return (
    <>

      <p>Digite seu nome Completo:</p>
      <input type="text" id='nome' />
      <p>Digite seu CPF:</p>
      <input type="text" id='cpf' />
      <p>Digite seu cargo: </p>
      <input type="text" id='cargo' />
      <br />
      <br />

      <button type='button' onClick={cadastrarFunc}>Cadastrar</button>   
      <h2 id='txtNome'></h2>
      <h2 id='txtCpf'></h2>
      <h2 id='txtCargo'></h2>   
      

    </>
  )
}

function cadastrarFunc(){
  var nome = document.querySelector('#nome').value
  var cpf = document.querySelector('#cpf').value
  var cargo = document.querySelector('#cargo').value

  document.getElementById("txtNome").innerHTML = ("Nome: " + nome)
  document.getElementById("txtCpf").innerHTML = ("CPF: " + cpf)
  document.getElementById("txtCargo").innerHTML = ("Cargo: " + cargo)
}
export default App

