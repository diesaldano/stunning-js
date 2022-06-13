import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import stylesCard from '../styles/Card.module.css'
import Header from '../components/Header'

interface cardType {
  length: number,
  data: [
    {
      id: number,
      title: string,
      description: string,
    }
  ]
}

const Home: NextPage = () => {
  const [valueInput, setValueInput] = useState(0)
  const [valueSquared, setValueSquared] = useState(0)

  const [add, setAdd] = useState(null)
  const [cards, setCards] = useState<cardType[]>([])

  // fetch of the data from the server
  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => {
        setCards(data)
      })
  }, [])

  function calculateSquadre() {
    if (valueInput > 0) {
      let squared = valueInput * valueInput
      setValueSquared(squared)
      console.log(squared)
    }
  }
  
  function countDown(n: number) {
    writeMessage(n)
    if(n >= 1) countDown(n -1)
  }
  function writeMessage(n: number){
    console.log(n)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {/* show data of cards and topic of the introduction */}


        <div className={styles.grid}>
          { cards && cards.data?.map((card: any) => {
              return (
                <div key={card.id} className={stylesCard.card}>
                  <h1 className="text-2xl font-medium text-slate-600 pb-2">{card.title}</h1>
                  {/* <span className={stylesCard.divider}></span> */}
                  <p className='text-sm tracking-tight font-light text-slate-400 leading-6'>{card.description}</p>
                  {/* span divider */}
                </div>
              )})
          }
          {/* Funcional programing */}
          {/* <div className={stylesCard.card}>
            <h3 className={stylesCard.title}>SQUARE OF A NUMBER</h3>
            <input 
              className={stylesCard.input}
              value={valueInput}
              onChange={(e) => setValueInput(Number(e.target.value))}
              type="text" />
            <button 
              className={stylesCard.button}
              onClick={()=> calculateSquadre()}
              type='button'> calculate
            </button>
            { (valueSquared && valueSquared > 0) ? 
              <h3 className={stylesCard.square}>{valueSquared}</h3>
              : null
            }
          </div> */}

          {/* Recursion */}
          {/* <div className={stylesCard.card}>
            <h3 className={stylesCard.title}>RECURSION</h3>
            <button 
              className={stylesCard.button}
              onClick={()=> countDown(5)}
              type='button'> Set Recursion
            </button>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Home

