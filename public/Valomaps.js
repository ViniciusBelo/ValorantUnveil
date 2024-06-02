var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu lateral

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

//Envio de informações

document.getElementById('agentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const agent = {
      name: document.getElementById('name').value,
      classe: document.getElementById('classe').value,
      bio: document.getElementById('bio').value,
  };

  fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(agent)
  })
  .then(response => response.json())
  .then(data => {
      alert('Agente adicionado com sucesso!');
      document.getElementById('agentForm').reset();
  })
  .catch(error => {
      console.error('Erro ao adicionar agente:', error);
      alert('Ocorreu um erro. Tente novamente.');
  });
});

