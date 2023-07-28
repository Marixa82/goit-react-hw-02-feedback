import React from "react";
import PropTypes from 'prop-types';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className="Feedback__options">
        {options.map((option) => (
          <li className="Feedback__option" key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
          
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
 }
        
export default FeedbackOptions;
