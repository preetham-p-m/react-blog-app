import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = { title:title, body:body, author:author };
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(
            setIsPending(false),
            history.push('/')
        );      
    }
    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <h2>Blog Title: </h2>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => { setTitle(e.target.value) }}
                />
                <h2>Blog Body: </h2>
                <textarea 
                    rows="6" cols="50"
                    required
                    value={body}
                    onChange ={ (e) => { setBody(e.target.value) }}
                />
                <h2>Blog Author: </h2>
                <select
                    value={author}
                    onChange={ (e) => { setAuthor(e.target.value) }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;