import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import Header from './Header'

import './assets/Css/App.css';


const App = () => {

  const APP_ID = '9f17750d'
  const APP_KEY = '54c24d9f1389a5003f14d2eeb5815dc5'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')

  useEffect(() =>{
    getRecipes()
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await response.json()
    setRecipes(data.hits)
    console.log(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch(' ')
  }

  return(
    <div className="App">

     

      <Header />

      <div className="container">
        <div className="wrapper">
          <div className="img-area">
            <img src="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
          </div>
          <div className="recipe-area">

            <h1 className="title">Delish with <span>Greenish</span> </h1>
            <p className="description">Keeping up your healthy body with healthy but delicious foods</p>
            <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange ={updateSearch} />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>

            <h2 className="sub-title">Popular Menu :</h2>

            <div className="recipes">
              {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                person={recipe.recipe.yield} 
                diet={recipe.recipe.dietLabels} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients} />
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App;




