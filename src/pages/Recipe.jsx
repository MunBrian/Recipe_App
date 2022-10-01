import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    let params = useParams()

    const [details, setDetails] = useState([])
    const [activeBtn, setActiveBtn] = useState('instruction')
    
    useEffect(() => {
        fetchDetails(params.id)
    }, [params.id])

    const fetchDetails = async (id) => {
        try {   
            const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`)
            const detailData = await data.json()
            setDetails(detailData)
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <DetailedWrapper>
          <div>
              <h2>{ details.title}</h2>
              <img src={details.image} alt="" />
          </div>
          <Info>
              <Button className={activeBtn === 'instruction' ? 'active' : ''} onClick={() => setActiveBtn('instruction')}>Instruction</Button>
              <Button className={activeBtn === 'ingredients' ? 'active' : ''} onClick={() => setActiveBtn('ingredients')}>Ingredients</Button>
              {activeBtn === 'instruction' && <div>
                  <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                  <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
              </div>}

              {activeBtn === 'ingredients' &&  <ul>
                  {details.extendedIngredients.map(ingredient => {
                      return (          
                          <li key={ingredient.id}>{ingredient.original}</li>
                      )
                  })}
              </ul> }
             
          </Info>
      </DetailedWrapper>
  )
}

const DetailedWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        background: linear-gradient(35deg, #494949, #313131) ;
        color: white;
    }

    h2{
        margin-bottom: 2rem ;
    }

    h3{
        font-size: 16px;
    }

    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }
`

const Button = styled.button`
    padding: 0.6rem 1.5rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 0.6rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem ;
`

export default Recipe