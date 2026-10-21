import React from 'react'

export default function Form() {
  return (
    <form style={{width:'30vw'}}>
      <div className='container'>
        <p style={{margin:0, textAlign:'left'}}>Adres WWW:</p>
        <input className='input' placeholder='Adres strony WWW'/>
      </div>

      <div className='container'>
        <p style={{margin:0, textAlign:'left'}}>Login:</p>
        <input className='input' placeholder='Twój login'/>
      </div>
      
      <div className='container'>
        <div style={{display:'flex',alignItems: 'left'}}>
          <input type='checkbox'/><label>Wygeneruj hasło</label>
        </div>
        <p style={{margin:0, textAlign:'left'}}>Hasło:</p>
        <input className='input'/>
      </div>
      <input type='submit' value='Zapisz'/>
    </form>
  )
}
