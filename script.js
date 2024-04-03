const input = document.querySelector('input');
const lista = document.querySelector('ul');
const botaoadd = document.querySelector('.add');
const removeall = document.querySelector('.removeall');


function adicionaLista(l){
    if(l.key === 'Enter'){
      const newLi = document.createElement('li');
      lista.appendChild(newLi);
      newLi.innerHTML = input.value;

      input.value = '';
    }
}

function addLi(){
      const newLi = document.createElement('li');
      const lista = document.querySelector('ul');
      
      newLi.innerHTML = input.value;
      lista.appendChild(newLi);


      input.value = '';
}

// A parte de excluir o <Li>

function excluir(){
  const lista = document.querySelector('ul');
  lista.removeChild(lista.lastElementChild);
} 

function removeAllLi(){
    const lista = document.querySelector('ul');
    lista.innerHTML = " ";
}

botaoadd.addEventListener("click", addLi);
removeall.addEventListener("click", removeAllLi);
input.addEventListener('keyup', adicionaLista);











