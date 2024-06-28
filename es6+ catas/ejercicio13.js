/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

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

function removeItem(array, text) {
  const index = findArrayIndex(mainCharacters, text)
  if (index !== -1) {
    mainCharacters.splice(index, 1)
  }
  return mainCharacters
}
console.log(removeItem(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'Leia'))
console.log(removeItem(mainCharacters, 'Han Solo'))

// other testing

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

function removeThatItem(array, text) {
  const index = magic(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}
console.log('------------------')
console.log('Magicians:', removeThatItem(futStars, 'Cristiano '))
console.log('Magicians:', removeThatItem(futStars, 'Toni '))
