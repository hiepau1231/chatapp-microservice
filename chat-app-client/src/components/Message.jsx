import React from 'react';
import PropTypes from 'prop-types';
import { formatMessageTime, formatDetailedTime } from '../utils/dateFormatter';
import './Message.css';

const Message = ({ content, timestamp, isSent, isRead, sender }) => {
  const messageTime = formatMessageTime(timestamp);
  const detailedTime = formatDetailedTime(timestamp);

  return (
    <div className={`message ${isSent ? 'message-sent' : 'message-received'}`}>
      <div className="message-content">
        {!isSent && <div className="message-sender">{sender}</div>}
        <div className="message-text">{content}</div>
        <div className="message-info">
          <span className="message-time" title={detailedTime}>
            {messageTime}
          </span>
          {isSent && (
            <span className={`message-status ${isRead ? 'read' : ''}`}>
              {isRead ? '✓✓' : '✓'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  isSent: PropTypes.bool.isRequired,
  isRead: PropTypes.bool,
  sender: PropTypes.string
};

Message.defaultProps = {
  isRead: false,
  sender: ''
};

export default Message;
