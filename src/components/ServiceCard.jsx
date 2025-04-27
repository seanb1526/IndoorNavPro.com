import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ image, video, title, description, linkTo }) {
  const cardStyle = {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'left',
    height: '380px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const mediaContainerStyle = {
    width: '100%',
    height: '200px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0' // Placeholder color
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const cardVideoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const cardContentStyle = {
    padding: '1.5rem'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#333'
  };

  const cardDescriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.5'
  };

  const arrowButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#a0a0a0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    border: 'none',
    zIndex: 2
  };

  // Replaced custom arrow with a Unicode arrow character
  const arrowStyle = {
    color: '#fff',
    fontSize: '22px',
    lineHeight: '22px',
    fontWeight: 'bold',
    transform: 'rotate(-45deg)', // Rotate to make it point to top-right
    display: 'block',
    marginTop: '-2px', // Minor adjustment for visual centering
    marginLeft: '2px'  // Minor adjustment for visual centering
  };

  return (
    <div style={cardStyle}>
      <div style={mediaContainerStyle}>
        {video ? (
          <video 
            style={cardVideoStyle}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={image} 
            alt={title} 
            style={cardImageStyle} 
          />
        )}
        <Link to={linkTo || '/solutions'}>
          <button style={arrowButtonStyle}>
            <span style={arrowStyle}>→</span>
          </button>
        </Link>
      </div>
      <div style={cardContentStyle}>
        <h3 style={cardTitleStyle}>{title}</h3>
        <p style={cardDescriptionStyle}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
