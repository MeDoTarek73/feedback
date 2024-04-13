import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text?.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect maxRating='10' select={(rating) => console.log(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='write a review' />
                    <Button
                        isDisabled={btnDisabled}
                        version="secondary"
                        type='submit'>
                        Submit
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm