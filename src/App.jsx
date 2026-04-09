import './App.css'

export default function App() {

  return (
    <>
      <form action="">
        <h1>İletişim Formu</h1>
        <div className='user-information'>
          <h4>Adınız</h4>
          <input type="text" placeholder='Adınızı Giriniz' />
        </div>
        <div className='user-information'>
          <h4>Soyadınız</h4>
          <input type="text" placeholder='Soyadınızı Giriniz' />
        </div>
        <div className='user-information'>
          <h4>E-Mail Adresiniz</h4>
          <input type="text" placeholder='E-Mail Adresiniz Giriniz' />
        </div>
        <div className='query-type'>
          <h4>Sorgu Türü</h4>
          <h4>
            <input type="radio" />
            Genel Sorular
          </h4>
          <h4>
            <input type="radio" />
            Destek Talebi
          </h4>
        </div>
        <div>
          <h4>Mesaj</h4>
          <textarea name="" id="" rows={10}></textarea>
        </div>
      </form>
    </>
  )
}