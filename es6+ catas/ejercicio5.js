// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const olderThan18 = ages.filter((age) => age > 18)
console.log(olderThan18)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const numbers = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const pairs = numbers.filter((number) => number % 2 === 0)
console.log(pairs)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const lolTeam = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
console.log(lolTeam)

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.*/
const gamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const uNames = gamers.filter((gamer) => gamer.name.includes('u'))
console.log(uNames)

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */

const users = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const legends = users.filter((user) => {
  if (user.gameMorePlayed.includes('Legends')) {
    if (user.age > 35) {
      user.gameMorePlayed = user.gameMorePlayed.toUpperCase()
    }
    return true
  }
  return false
})
console.log(legends)

/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const famousStreamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const input = document.querySelector('input')

input.addEventListener('input', (e) => {
  const filterSteamers = e.target.value.toLowerCase()
  const filteredStreamers = famousStreamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(filterSteamers)
  )
  console.log(filteredStreamers)
})
