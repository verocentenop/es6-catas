/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
Haz varios ejemplos y compruebalos. Sugerencia de función:
function findArrayIndex(array, text) {} */

// Ejemplo de array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

console.log(findArrayIndex(mainCharacters, 'Anakin'))
console.log(findArrayIndex(mainCharacters, 'Leia'))
console.log(findArrayIndex(mainCharacters, 'Yoda Master'))

//other
const futStars = [
  'Cristiano Ronaldo',
  'Dani Carvajal',
  'Luka Modric',
  'Vinicius Jr.',
  'Kylian Mbappe',
  'Jude Bellingham',
  'Toni Kroos'
]

function magic(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(text)) {
      return i
    }
  }
  return -1
}
console.log('------------------')
console.log('Magician:', magic(futStars, 'Cristiano '))
console.log('Magician:', magic(futStars, 'Kylian '))
console.log('Xavineta:', magic(futStars, 'Ferran Torres'))

//another one
const days = ['Saturday', 'Sunday']
function weekend(days, text) {
  return days.indexOf(text)
}

console.log(weekend(days, 'Wednesday'))
console.log(weekend(days, 'Saturday'))
