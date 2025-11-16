import './Contactcard.scss'


const ContactCard = () => {
  return (
    // Use React Fragment instead of a wrapping div
    <>
      

      {/* 1. The header element */}
      <div className="contact-header">
        <span>Contact Us</span>
        <svg
          className="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>

      {/* 2. Your SVG shape and the video */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 803.63 917.44"
        width="100%"
        height="100%"
      >
        {/* A. The background shape (with original fill) */}
        <path
          fill="rgba(0, 0, 0, 0.7)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M538.49,35.33v59.74c0,29.33-24.03,53.11-53.67,53.11H26.62c-14.43,0-26.12,11.57-26.12,25.85v689.8c0,29.33,24.03,53.11,53.67,53.11h725.3c29.64,0,53.67-23.78,53.67-53.11V53.61c0-29.33-24.03-53.11-53.67-53.11h-205.78c-19.44,0-35.19,15.59-35.19,34.83Z"
        />

        
        <foreignObject x="150" y="290" width="530" height="400">
          {/* Replace this src with your video URL */}
          <video
            src="./video2.webm"
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
          ></video>
        </foreignObject>

      </svg>
    </>
  );
};

export default ContactCard;