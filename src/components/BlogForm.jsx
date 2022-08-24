import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setBlog } from '../features/blogs/blogSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function BlogForm() {
    
    const[formData, setFormData] = useState({
        title:"",
        content:""
    })

    const { title, content } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading } = useSelector((state) => state.blogs)
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title === '' || content=== ''){
            toast.error('Fill in all the fields')
        }else {
            const blogData = { title, content }
            dispatch(setBlog(blogData))
            navigate('/allblogs')
        }

        if(isLoading){
            return <p>Loading...</p>
        }
        
    }
  return (
    <>
    <section className="form">
        <form onSubmit={handleSubmit }>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="title">Content</label>
                <textarea 
                    type="text"
                    name="title"
                    value={content}
                    onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-block">Create</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default BlogForm