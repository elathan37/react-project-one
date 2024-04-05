import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const VideoContentModal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  const { title, url } = data;

  return (
    <>
      <Modal 
      show={isOpen}
      onHide={handleClose}
      size="lg"
      centered
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        backdropFilter: 'blur(4px)',
      }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {url && (
            <iframe
              width="560"
              height="315"
              src={url}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {!url && <p>No video available</p>}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="dark" size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoContentModal;
