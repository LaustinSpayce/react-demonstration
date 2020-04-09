var React = require('react');

class NotHome extends React.Component {
  render() {
    console.log('this.props.pokemon: ', this.props.pokemon)

    console.log('starting the map:')
    const pokemonArray = this.props.pokemon.map( pokemon => {
      console.log('one pokemon: ', pokemon)
      console.log('name: ', pokemon.name)

      const types = pokemon.type.map ( type => (<li>{type}</li>) )
      console.log('types ', types)

      const isCute = pokemon.cute ? "Cute" : "Not Cute"
      console.log('is cute? ', isCute)
      
      return ( 
      <li><h3>{pokemon.name}</h3>
        <ul>{types}</ul>
        <p>{isCute}</p>
      </li>
      )
    })

    // console.log('pokemonNameArray', pokemonArray)
    // console.log('joined: ', pokemonArray.join(""))

    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </head>
        <body>
          <div className="container" style={{backgroundColor: 'red'}}>
            <h1>Hello {this.props.name}! Here are your Pokemon:</h1>
            <p>Pokemon:</p>
              <ol>{pokemonArray}</ol>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NotHome;
