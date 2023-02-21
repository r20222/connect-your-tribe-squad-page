import express from 'express'

// data squad c voor sport (omdat ik niet kan filteren op hobby)
const url = 'https://whois.fdnd.nl/api/v1/squad/squat-c-2022'
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error)

console.log(data)


// data squad b voor gamen (omdat ik niet kan filteren op hobby)
const urlB = 'https://whois.fdnd.nl/api/v1/squad/squad-b-2022'
const dataB = await fetch(urlB)
  .then((response) => response.json())
  .catch((error) => error)

  console.log(dataB)

// data squad a voor muziek (omdat ik niet kan filteren op hobby)
const urlA = 'https://whois.fdnd.nl/api/v1/squad/squad-a-2022'
const dataA = await fetch(urlA)
  .then((response) => response.json())
  .catch((error) => error)

  console.log(dataA)


// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  console.log(request.query.squad)

  response.render('index', data)
})

// Maak een route voor sport.ejs van squad c
app.get('/sport', (request, response) => {
  console.log(request.query.squad)

  response.render('sport', data)
})

// maak een route voor gamen.ejs van squad b
app.get('/gamen', (request, response) => {
  console.log(request.query.squad)

  response.render('gamen', dataB)
})

// maak een route voor muziek.ejs voor squad a
app.get('/muziek', (request, response) => {
  console.log(request.query.squad)

  response.render('gamen', dataA)
})





// app.get('/members', (request, response) => {
//   response.send('Joepie!!')
// })

// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
