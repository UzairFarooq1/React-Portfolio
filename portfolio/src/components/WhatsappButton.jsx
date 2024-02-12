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
    <>
    <div style={{backgroundColor: "#25d366", borderRadius:"5px",boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}}>
    <div className='whatsappText' style={{ marginBottom: "60px", color : "white", textDecorationColor : "white"}}>
          Feel free to reach out to me!
          </div>

      <div className='whatsappContainer'
          style={{
              position: 'fixed',
              bottom: '20px',
              right: '95px',
              backgroundColor: '#25d366',
              color: '#fff',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

          }}
          onClick={handleClick}
      >

              <FaWhatsapp size={30} />
          </div>
          </div>

           <style jsx>{`
                @media (max-width: 768px) {
                    .whatsappContainer {
                        right: 5px !important;
                        bottom: 15px !important;
                    }
                    .whatsappText{
                      display: none;
                    }
                }
            `}</style>
          </>

  );
};

export default WhatsappButton;
