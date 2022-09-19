const Storage = localStorage
const pizzaSelect = document.getElementById('pizza-select')
const printName = document.getElementById('card-pizza-select')
const printParap = document.getElementById('card-parap')
const printImg = document.getElementById('img-pizza')
const getPizzasArray = Storage.getItem('Pizzas')
const arrayPizzas = JSON.parse(getPizzasArray)


Storage.setItem('Pizzas', JSON.stringify(pizzas))

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const getPizzasArray = Storage.getItem('Pizzas')
    const arrayPizzas = JSON.parse(getPizzasArray)
    printParap.innerHTML = `Selecciona un numero 1 al ${ arrayPizzas.length + 1 }`
    pizzaSelect.addEventListener('change', (e) => {
      const pizzaValue = e.target.valueAsNumber
      findArray(arrayPizzas, pizzaValue)
    })
  })
}

init()

const findArray = (arr, value) => {
  const getPizzas = arr.find(item => item.id === value)
  if (!getPizzas) {
    return alert(`Error prueba otra vez con un numero del 1 al ${ arrayPizzas.length + 1 }` )
  } else {
    printName.innerHTML = `Pizza N°${ getPizzas.id } : ${ getPizzas.nombre }`
    printImg.src = `${ getPizzas.imagen }`
    console.log(getPizzas)
  }
}