import React, { useState } from 'react';
import ContactModal from './ContactModal';
import InfoModal from './InfoModal';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleModalOpen = (type) => {
    const content = {
      privacy: {
        title: 'Privacy Policy',
        body: 'We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website.'
      },
      disclaimer: {
        title: 'Disclaimer',
        body: 'The information provided on this website is for general informational purposes only. We make no representations or warranties about the accuracy or completeness of the content.'
      },
      terms: {
        title: 'Terms and Conditions',
        body: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to the entire website.'
      }
    };
    setModalContent(content[type]);
    setShowModal(true);
  };

  return (
    <>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="mb-3">
                <span 
                  className="text-light me-3" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => handleModalOpen('privacy')}
                >
                  Privacy
                </span>
                <span 
                  className="text-light me-3" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => setShowContact(true)}
                >
                  Contact
                </span>
                <span 
                  className="text-light me-3" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => handleModalOpen('disclaimer')}
                >
                  Disclaimer
                </span>
                <span 
                  className="text-light" 
                  style={{cursor: 'pointer'}} 
                  onClick={() => handleModalOpen('terms')}
                >
                  Terms and Conditions
                </span>
              </div>
              <p className="mb-0 text-muted">© 2025 bolbachchanmedia.com</p>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
      <InfoModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        title={modalContent.title}
        body={modalContent.body}
      />
    </>
  );
};

export default Footer;