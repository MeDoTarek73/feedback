import React from 'react'
import Header from "./components/Header"
import { useState } from 'react'
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid'
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            const updatedFeedback = feedback.filter((item) => item.id !== id);
            setFeedback(updatedFeedback)
        }
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}
export default App; 