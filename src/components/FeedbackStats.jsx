import React from 'react'
import PropsTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    let average =
        (feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length)
            .toFixed(1)
            .replace(/\.0$/, '');
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropsTypes.array.isRequired
}

export default FeedbackStats