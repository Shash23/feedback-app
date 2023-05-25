import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // its more common to use than hash router
import { useState } from "react"
import Card from './components/shared/Card'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './data/FeedbackStats'
import AboutPage from './pages/AboutPage.jsx'
import FeedbackForm from "./components/FeedbackForm"
import AboutPageIcon from './components/shared/AboutIconLink'
import Post from './components/Post'


function App() {

    const [feedback, setFeedback] = useState
    (FeedbackData)

    const deleteFeedback = (id) => {

        if(window.confirm("Are you sure you want to delete?")) {

            setFeedback(feedback.filter((item) => item.id != id))

        }

    }
    
    return (
        
        <FeedbackProvider>
            
            <Router>
                <Header />
                <div classNam = 'container'>

                    <Routes>
                        <Route
                            exact
                            path = '/'
                            element = {

                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />


                                </>
                            }

                            ></Route>


                            <Route path = '/about' element = {<AboutPage />} />
                            <Route path = '/post/:id' element = {<Post />} />
                        </Routes>


                        <Card>
                            
                            <NavLink to = '/' activeClassName = 'active'>
                                Home
                            </NavLink>

                            <NavLink to = '/about' activeClassName = 'active'>
                                About
                            </NavLink>

                        </Card>


                </div>
            </Router>



        </FeedbackProvider>
    )
    
}

export default App