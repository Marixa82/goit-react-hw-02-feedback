import React from "react";
import PropTypes from 'prop-types';
 const Statistics = ({good, neutral, bad, total, PositivePercentage }) => ( 
    <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total:{total}</li>
            <li>PositiveFeedback:{ PositivePercentage}%</li>
    </ul>
)
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    PositivePercentage: PropTypes.number.isRequired,
 }
export default Statistics;