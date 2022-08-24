import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)


  // handling the new button
  const handleNew = () => {
    navigate('/create')
  }

  const handleLogOut = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    
    <>
    <header className="header">
      <div className="logo">
        <Link to='/allblogs'>Blog Website</Link>
      </div>
      <ul>
        { user ? (
          <>
          <button 
            className="btn"
            onClick={handleNew}
            >New</button>
          <button 
            className="btn"
            onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <>
            <li>
            <Link to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/'>Register</Link>
            </li>
          </>
        ) }
        
      </ul>
    </header>
    </>
  )
}

export default Header