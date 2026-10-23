import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import MainForm from './components/Form';

function App() {
  const [formData, setFormData] = useState(null)

  function handleFormSubmit(data) {
    setFormData(data);
  }

  return (
    <div className="App" style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
      <h1>Menedżer haseł - wykonał Bartosz Piętka</h1>
      <div style={{ width: '30vw', textAlign: 'left' }}>
        <MainForm data={handleFormSubmit}/>
        {formData ? (
          <div>
            <p className='p-2 text-primary'>Adres: {formData.address}</p>
            <p className='p-2'>Login: {formData.login}</p>
            {formData.checkboxGeneratePassword ? (
              <p className='p-2'>Hasło automatycznie generowane</p>
            ) : (
              <p className='p-2'>Hasło: {formData.password}</p>
            )}
          </div>
        ) : (
          <div>
            <p className='p-2 text-primary'>Adres: </p>
            <p className='p-2'>Login: </p>
            <p className='p-2'>Hasło: </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
