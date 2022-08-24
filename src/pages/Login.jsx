import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const[formData, setFormData] = useState({
    email:'',
    password:'',
})

const { email, password } = formData

const dispatch = useDispatch()
const navigate = useNavigate()

const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/allblogs')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])
const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]:e.target.value
    }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  const userData = { email, password }
  dispatch(login(userData))

}

if(isLoading){
  return <p>Loading...</p>
}
  return (
    <>
    <section className="heading">
        <h1>Login</h1>
        <p>Login to read posts fom friends</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                    type="email"
                    className="form-control" 
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    className="form-control" 
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={onChange}
                />
            </div>  
            <div className="form-group">
                <button 
                    type="submit"
                    className="btn btn-block"
                >Login</button>
            </div>
        </form>
      </section>
    </>
  )
}

export default Login