import React from "react";
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
        <p className="message_text"> {message} </p>
    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Notification;