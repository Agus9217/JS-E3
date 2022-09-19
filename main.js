const Storage = localStorage
const pizzaSelect = document.getElementById('pizza-select')
const printName = document.getElementById('card-pizza-select')
const printParap = document.getElementById('card-parap')
const printImg = document.getElementById('img-pizza')
const getPizzasArray = Storage.getItem('Pizzas')
const arrayPizzas = JSON.parse(getPizzasArray)

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    printParap.innerHTML = `Selecciona un numero 1 al ${ arrayPizzas.length + 1 }`
    Storage.setItem('Pizzas', JSON.stringify(pizzas))
    pizzaSelect.addEventListener('change', (e) => {
      const pizzaValue = e.target.valueAsNumber
      pizzaSearch(pizzaValue)
    })
  })
  
}

const pizzaSearch = (value) => {
  const getPizzas = arrayPizzas.find(item => item.id === value)
  if (!getPizzas) {
    return alert(`Error prueba otra vez con un numero del 1 al ${ arrayPizzas.length + 1 }` )
  } else {
    printName.innerHTML = `Pizza N°${ getPizzas.id } : ${ getPizzas.nombre }`
    printImg.src = `${ getPizzas.imagen }`
    console.log(getPizzas)
  }
}

init()
