import Link from "next/link";
import { type } from "os";
import React from "react";
import stylesCard from '../styles/Card.module.css'
import styles from '../styles/Home.module.css'

type CardsListProps = {
    cards: {
        length: number,
        data: []
    }
}

type Card = {
        id: string,
        title: string,
        description: string,
        text: string
    }

const CardList = ({cards}: any) => {
    console.log('cards', cards)
    return (
        <div className={styles.grid}>
            { cards && cards!.map((card: Card) => {
                return (
                    <Link key={card.id} href={`/content/${card.id}`}>
                        <div key={card.id} className={stylesCard.card}>
                            <h1 className="text-2xl font-medium text-slate-600 pb-2">{card.title}</h1>
                            {/* <span className={stylesCard.divider}></span> */}
                            <p className='text-sm tracking-tight font-light text-slate-400 leading-6'>{card.description}</p>
                            {/* span divider */}
                        </div>
                    </Link>
                )})
            }
        </div>
    )
}

export default CardList;
