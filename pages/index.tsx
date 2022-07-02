import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Header from '@components/Header'
import CardList from '@components/CardList'

export const getServerSideProps = async() => {
  const response = await fetch('https://stunning-js.vercel.app/api/test')
  const { data: cards } = await response.json()
  
  return {
    props: {
      cards: cards
    }
  }
}

const Home = ({cards}: {cards: {lentgh: number, data:[]}}) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <CardList cards={cards} />
      </main>
    </div>
  )
}

export default Home

