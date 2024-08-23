import React from 'react'
import "../styles/footer.css"
import mail from '../img/mail.png'
import arrow from '../img/arrow.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <ul>
            <h5>Контактная информация</h5>
            <li><img src={mail} alt="" />test@test.ru</li>
            <li><img src={mail} alt="" />+8 777 555 66 99</li>
            <li><img src={mail} alt="" />Москва, Бульвар Ленина 33</li>
          </ul>
          <ul>
            <h5>Основные ссылки</h5>
            <li><img src={arrow} alt="" />Главная</li>
            <li><img src={arrow} alt="" />Наши проекты</li>
            <li><img src={arrow} alt="" />Наши услуги</li>
            <li><img src={arrow} alt="" />Контакты</li>
          </ul>
          <ul>
            <h5>Наши проекты</h5>
            <li><img src={arrow} alt="" />РосНано</li>
            <li><img src={arrow} alt="" />Наши проекты</li>
            <li><img src={arrow} alt="" />Проект “Восток”</li>
            <li><img src={arrow} alt="" />Контакты</li>
          </ul>
          <ul>
            <h5>Социальные сети</h5>
            <li><img src={arrow} alt="" />VK.com</li>
            <li><img src={arrow} alt="" />Наши проекты</li>
            <li><img src={arrow} alt="" />Наши услуги</li>
            <li><img src={arrow} alt="" />Контакты</li>
          </ul>
        </div>
        <div className="footer__bottom">
          <h4>(с) 2019. Все права защищены.</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
