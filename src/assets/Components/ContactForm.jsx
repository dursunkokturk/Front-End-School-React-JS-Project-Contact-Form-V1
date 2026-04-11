import { useEffect, useState } from 'react'
import '../../App'

export default function ContactForm() {

  const [submit, setSubmit] = useState(false);

  // Gonder Butonuna Tiklandiginda Yapilacak Islem
  useEffect(() => {
    if (submit) {
      console.log("Mesaj Gönderildi");
    }
  }, [submit])

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      <div className='out-color'>
        <div className="form-wrapper">
          {submit && (
            <div className='success-message'>
              <h1>Mesaj Gönderildi</h1>
              <h4>Formu doldurduğunuz için teşekkür ederiz. Yakında sizinle iletişime geçeceğiz!</h4>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='in-color'>
              <h1>İletişim Formu</h1>
              <div className="firstname-and-lastname">
                <div className='user-information'>
                  <h4>Adınız</h4>
                  <input type="text" placeholder='Adınızı Giriniz' />
                </div>
                <div className='user-information'>
                  <h4>Soyadınız</h4>
                  <input type="text" placeholder='Soyadınızı Giriniz' />
                </div>
              </div>
              <div className='user-information'>
                <h4>E-Mail Adresiniz</h4>
                <input type="text" placeholder='E-Mail Adresiniz Giriniz' />
              </div>
              <div className='query-type'>
                <h4>Sorgu Türü</h4>
                <div className="query-options">
                  <label className='query-types'>
                    <input type="radio" name='query'/>
                    Genel Sorular
                  </label>
                  <label className='query-types'>
                    <input type="radio" name='query'/>
                    Destek Talebi
                  </label>
                </div>
              </div>
              <div className='message'>
                <h4>Mesaj</h4>
                <textarea name="" id="" rows={10}></textarea>
              </div>
              <label className='check'>
                <input type="checkbox" name="" id="" />
                <h4>Ekip tarafından benimle iletişime geçilmesini kabul ediyorum *</h4>
              </label>
              <button type='submit'>Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}