const express = require('express')
const app = express();

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  const data = { name: "GA class SEI-22"}
  res.render('home', data)
})

// Create an array of Pokemon.
const pokemon = [
  { name: 'pikachu',
  type: ['electric'],
  cute: true
  },
  { name: 'BOBSAUR',
  type: ['grass', 'poison'],
  cute: false
  },
  { name: 'psyduck',
  type: ['psychic'],
  cute: true
  },
  { name: 'Sandshrew',
  type: ['ground',],
  cute: false 
  },
  { name: 'Vulpix',
  type: ['fire'],
  cute: true 
  }
  ]

console.log('pokemons: ', pokemon)

app.get('/:name', (req, res) => {
  // Data we want to pass to our view (into react)
  // We put into an object
  const data = { 
    name: req.params.name, 
    pokemon: pokemon
  }
  // Tell the renderer the view file we want to use
  // and the data for the view file.
  res.render('home', data)
})



app.listen(3000, () => console.log('listening on port 3000 yay'))