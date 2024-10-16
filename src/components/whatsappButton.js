import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsappButton.css'; // CSS for the button styles

const WhatsappButton = () => {
  const whatsappUrl = 'https://wa.me/+919947929822'; // Add your WhatsApp number here

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsappButton;
