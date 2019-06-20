import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5903.812981023361!2d18.879538128054723!3d42.28051941676909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd40cf8e7a561%3A0xc90b9353b8a0af55!2z0KDQsNGE0LDQuNC70L7QstC40ZvQuCwg0KbRgNC90LAg0JPQvtGA0LA!5e0!3m2!1ssr!2srs!4v1561018604433!5m2!1ssr!2srs" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;