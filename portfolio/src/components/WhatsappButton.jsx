// FloatingWhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
    const handleClick = () => {
        // Update the message with an appropriate recruiter message
        const message = encodeURIComponent(
          "Hello! I came across your portfolio and I'm impressed with your work. " +
            "I would like to discuss potential opportunities. Can we chat?"
        );
    
        // Open WhatsApp chat with the predefined message
        window.open(`https://wa.me/+254791495274?text=${message}`);
      };
    
  return (
    <><div style={{ marginBottom: "60px"}}>
          Feel free to reach out to me!
      <div
          style={{
              position: 'fixed',
              bottom: '20px',
              right: '95px',
              background: '#25d366',
              color: '#fff',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              zIndex: '1000',
          }}
          onClick={handleClick}
      >

              <FaWhatsapp size={30} />
          </div>
          </div>
          </>

  );
};

export default WhatsappButton;
