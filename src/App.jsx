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
      </form>
    </>
  )
}