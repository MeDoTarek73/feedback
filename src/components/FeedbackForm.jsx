import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text?.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(rating, text)
        if (text.trim().length > 10) {
            const newFeedback = { rating, text }
            handleAdd(newFeedback)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect maxRating={10} select={(rating) => console.log(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' />
                    <Button
                        isDisabled={btnDisabled}
                        version="secondary"
                        type='submit'>
                        Send
                    </Button>
                </div>
                <span className='message'>{message}</span>
            </form>
        </Card>
    )
}

export default FeedbackForm