import React, { useEffect, useRef } from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';

const WhatsAppButton = () => {
  const whatsappWidgetRef = useRef(null);

  useEffect(() => {
    // Trigger the opening of the WhatsApp chat window when the component mounts
    if (whatsappWidgetRef.current) {
      whatsappWidgetRef.current.openChat();
    }
  }, []);

  return (
    <>
      {/* WhatsAppWidget component */}
      <WhatsAppWidget
        phoneNumber="+254791495274"
        message="Hello! I visited your portfolio."
        ref={whatsappWidgetRef}
      />
    </>
  );
};

export default WhatsAppButton;
