import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../lib/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { setToken } from '../lib/auth'
import Loading from '../components/common/Loading'
const eye = <FontAwesomeIcon icon={faEye} />


function Login() {

  const [formData, setFormData] = React.useState({
    email: '', 
    password: '',
  })

  const [errors, setErrors] = React.useState(false)

  const history = useHistory()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser(formData)
      if (!loginUser) throw new Error
      setToken(res.data.token)
      history.push('/')
      console.log(res)
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }

  const [passwordShown, setPasswordShown] = React.useState(false) 
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <section className="section">
      <Loading />
      <section className="section register-box" onSubmit={handleSubmit}>
        <div>
          <h1>Please Login Below</h1>
          <hr/>
        </div>
        <div className="register-top">
          <input
            className="register-input"
            placeholder="Please enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="help is-danger">email error</p>}
        </div>
        <div className="register-bottom">
          <input
            className="register-input"
            type={passwordShown ? 'text' : 'password'}
            placeholder="Please enter your password here"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
          {errors.password && (
            <p className="help is-danger">password error</p>
          )}
        </div>
        <div className="register-info">
          <p>
          Forgotten your password? <span>Click here to reset</span>
          </p>
        </div>
        <div className="field">
          {errors ? <p className="error">Please enter valid credentials...</p> : <p></p>}
          <button 
            type="submit" 
            className="button login-button" 
            onClick={handleSubmit}>
              Log In
          </button>
        </div>
      </section>
    </section>
  )
}

export default Login