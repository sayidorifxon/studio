import React from 'react'
import "../styles/rassilka.css"
function Rassilka() {
  return (
    <section className='rassilka'>
      <div className="container">
        <div className="rassilka__wrapper">
            <h4>Подпишитесь на нашу рассылку</h4>
            <p>Полезные статьи, акции, новости - получите все это сейчас!</p>
            <div className="inputbox">
                <input type="text" />
                <button>Подписаться</button>
            </div>
            <h5>Мы не шлем спам, и передаем никому ваши данные.</h5>
        </div>
      </div>
    </section>
  )
}

export default Rassilka
