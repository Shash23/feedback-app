import React from 'react'
import {Navigate} from 'react-router-dom'

function Post() {
  
    const status = 404

    const navigate = useNavigate()

    const onClick = () => {

        console.log("Hello")
        navigate("/about")

    }

    if(status == 404)
        return <Navigate to = "/notfound" />


    const params = useParams()

    return (
    
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>

            <Routes>
                <Route path = '/show' element = {/*<Post />*/
            <h1>Tester</h1>} />
            </Routes>
        </div>

    )
}

export default Post