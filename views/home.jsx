var React = require('react');

class Home extends React.Component {
  render() {

    // this.props are the properties.
    console.log('this.props.name: ', this.props.name)
    console.log('this.props.pokemon: ', this.props.pokemon)

    // React does not know how to display an object.
    // React does know how to display an array (by smushing the contents together)
    // We will take what we need from the array of pokemon objects and put it into an array of React elements it knows how to render.
    console.log('starting the map:')
    const pokemonArray = this.props.pokemon.map( pokemon => {
      console.log('one pokemon: ', pokemon)
      console.log('name: ', pokemon.name)

      // One pokemon can have multiple types.
      // We map the types into an array of React Elements.
      // One line to be concise, this is an arrow function with an implicit return
      const types = pokemon.type.map ( type => (<li>{type}</li>) )
      console.log('types ', types)

      // Ternary if statement.
      // Can also be written as:
      // if (pokemon.cute === true) { 
      //     isCute = "cute"
      //     } else { 
      //     isCute = "Not Cute" }
      const isCute = pokemon.cute ? "Cute" : "Not Cute"
      console.log('is cute? ', isCute)
      
      // Return HTML/React Elements
      return ( 
      <li><h3>{pokemon.name}</h3>
        <ul>{types}</ul>
        <p>{isCute}</p>
      </li>
      )
    })

    // Note for the HTML portion.
    // HTML: class="container"
    // React: ClassName="container"
    // Also note the double curly brace and different syntax for inline styles
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

module.exports = Home;
