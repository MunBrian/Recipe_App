import React, { useEffect } from 'react'

const Popular = () => {
    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=8`)
        const data = await res.json()
        console.log(data)
    }

  return (
    <div>Popular</div>
  )
}

export default Popular