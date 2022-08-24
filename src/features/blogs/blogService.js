import axios from 'axios'

const API_URL = '/api/blogs/'

// create a new blog
const setBlog = async(blogData, token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, blogData, config)

    return response.data
}

// Get users blog
const getBlog = async(token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


// delete users Blog
const deleteBlog = async(blogId,token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + blogId,config)

    return response.data
}

// update users Blog
const updateBlog = async(blogId,token) => {
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + blogId,config)

    return response.data
}


const blogService = {
    setBlog,
    getBlog,
    deleteBlog,
    updateBlog
}

export default blogService
