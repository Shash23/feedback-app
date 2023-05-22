function App() {

    // JSX elements have to be one parent element
    // you can use an empty tag

    // what is htmlfor used for?

    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [

        {id: 1, text: "Comment One"},
        {id: 2, text: "Comment Two"},
        {id: 3, text: "Comment Three"}

    ]

    // used state


    /*
    return (
        <div className = "container">
            <h1>Hello from the app component</h1>
            <p>I can put this here because I am putting it in a div</p>
            <label htmlFor = ""></label> 
        </div>
    )
    */
   return (
        <div className = "container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            <div className = "comments">
                <h3> Comments ({comments.length})</h3>
                <ul>
                
                    {comments.map((comment, index) => 
                    
                        <li key = {index}>{comment.text}</li>

                    )}
                
                </ul>
            </div>

            {Math.random() * (5+5)}
        </div>
    )


}

export default App