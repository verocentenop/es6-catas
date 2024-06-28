//3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList]
console.log(pointsListCopy)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Buzz Lightyear', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(toyCopy)

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const numbers1 = [32, 54, 21, 64, 75, 43]
const numbers2 = [54, 87, 99, 65, 32]

const allNumbers = [...numbers1, ...numbers2]
console.log(allNumbers)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const buzzToy = {
  name: 'Buzz Lightyear',
  date: '20-30-1995',
  color: 'multicolor'
}
const buzzToyUpdate = {
  lights: 'rgb',
  power: ['Flight like a dragon', 'MoonWalk']
}

const toyProperties = { ...buzzToy, ...buzzToyUpdate }
console.log(toyProperties)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const colorLess = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(colorLess)
console.log(colors)
