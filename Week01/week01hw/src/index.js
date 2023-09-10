import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App(){

  return (
    //Empty div
    <>
      <h1>Kaya Toast</h1>
      <p>
      This is one of my favorite Singaporean dishes to make. 'Kaya,' which means coconut jam in Malay, is sandwiched between toasted bread with slices of cold butter. It's a staple breakfast dish in Singapore and Malaysia, typically served with soft-boiled eggs and coffee.
      </p>
      <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2018/04/traditional-singaporean-breakfast-kaya-toast.png" alt="Kaya toast" width={500}></img>
      <h2>Ingredients</h2>
      {/* <p>
        My name is: {name} and I am {age} years old.
      </p> */}
      <h3>Kaya Toast</h3>
      <ul>
        <li>2 slices of bread</li>
        <li>Cold salted butter</li>
        <li>Kaya jam (Coconut butter)</li>
      </ul>

      <h3>Soft Boiled Eggs</h3>
      <ul>
        <li>2 room temperature eggs</li>
        <li>Soy sauce</li>
        <li>White pepper</li>
      </ul>

      <h2>Method</h2>

      <h3>Kaya Toast</h3>
      <ol>
        <li>Cut off the crust of the bread.</li>
        <li>Toast the bread to your liking.</li>
        <li>Spread the kaya jam on both slices of the bread.</li>
        <li>Place a few slices of thin cold butter on one of the toast.</li>
        <li>Sandwich the toasts and cut in half.</li>
      </ol>

      <h3>Soft Boiled Eggs</h3>
      <ol>
        <li>Boil a pot of water. Make sure the the water is able to cover the eggs.</li>
        <li>Turn off the heat when the water gets to boil and put the eggs in gently.</li>
        <li>Cover the lid and let the eggs sit for 6-7 minutes.</li>
        <li>Take out the eggs and crack them into a small bowl.</li>
        <li>Serve with a dash of soy sauce and pinch of white pepper.</li>
      </ol>
    </>
  )
}

root.render(<App />)