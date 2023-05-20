import React, { useState } from 'react'
import './Quotes.css'
import { quotes } from '../../data/quotes'
import { Link, Outlet } from 'react-router-dom';

const Quotes = () => {
  const [quote, setQuote] = useState('"Be yourself; everyone else is already taken."');
  const [person, setPerson] = useState('Oscar Wilde')

  let newQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random].quote)
    setPerson(quotes[random].person)
  }

  return (
    <div className='quotes'>
      <div className="quotes__fact">
        <Link to='fact'>Интересные факты</Link>
        <Outlet />
      </div>
      <div className="quotes__main">
        <div className="quotes__title">
          <h2>Quote Generator</h2>
        </div>
        <div className="quotes__content">
          <p className="quote">
            {quote}
          </p>
          <div className="person">{person}</div>
          <div className="quote__button">
            <button onClick={newQuote} className="new-quote">New quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes