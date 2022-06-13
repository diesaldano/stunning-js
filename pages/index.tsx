import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import stylesCard from '../styles/Card.module.css'
import Header from '../components/Header'

export const getServerSideProps = async() => {
  // const response = await fetch('/api/test')
  // const { data: cards } = await response.json()
  
  return {
    props: {
      cards: {}
    }
  }
}

// const Home = ({cards}: {cards: {lentgh: number, data:[]}}) => {
const Home = () => {


  const [add, setAdd] = useState(null)
  const [cards, setCards] = useState({ length: 0, data: [] })

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => {
        setCards(data)
      })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />

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
        </div>
      </main>
    </div>
  )
}

export default Home

