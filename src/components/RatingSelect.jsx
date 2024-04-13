import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingSelect({ select, maxRating }) {
    const [selected, setSelected] = useState(1);

    const handleChange = (e) => {
        const rating = +e.currentTarget.value;
        setSelected(rating);
        select(rating);
    };

    const renderRatingOptions = () => {
        const options = [];
        for (let i = 1; i <= maxRating; i++) {
            options.push(
                <li key={i}>
                    <input
                        type="radio"
                        id={`num${i}`}
                        name="rating"
                        value={i}
                        checked={selected === i}
                        onChange={handleChange}
                    />
                    <label htmlFor={`num${i}`}>{i}</label>
                </li>
            );
        }
        return options;
    };

    return <ul className="rating">{renderRatingOptions()}</ul>;
}

RatingSelect.defaultProps = {
    maxRating: 5,
};
RatingSelect.propTypes = {
    select: PropTypes.func.isRequired,
    maxRating: PropTypes.number,
};

export default RatingSelect;
