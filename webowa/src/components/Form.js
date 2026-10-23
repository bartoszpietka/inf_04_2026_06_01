import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function MainForm({ data }) {
  const [address, setAddress] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [checkboxGeneratePassword, setCheckboxGeneratePassword] = useState(false)

  function handleSubmit(e){
    e.preventDefault();

    data({
      address,
      login,
      checkboxGeneratePassword,
      password
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Adres WWW:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Adres strony WWW"
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Login:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Twój login"
          onChange={(e) => setLogin(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Wygeneruj hasło"
          className="mb-2"
          onChange={(e) => setCheckboxGeneratePassword(e.target.checked)}
        />

        <Form.Label>Hasło:</Form.Label>
        <Form.Control
          type="password"
          disabled={checkboxGeneratePassword}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Zapisz
      </Button>
    </Form>
  );
}
