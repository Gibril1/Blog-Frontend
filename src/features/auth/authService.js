import axios from 'axios'

const API_URL = 'api/users/'

// Register User
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login User
const login = async(userData) => {
    const response = await axios.post(API_URL +'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Get user data
const getUser = async(token) => {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + 'me', config)
    return response.data
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService =  {
    register,
    login,
    getUser,
    logout
}

export default authService 