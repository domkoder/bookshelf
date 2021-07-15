import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('login', formData)
  }

  return (
    <div>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Loin</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>clos</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>clos</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
