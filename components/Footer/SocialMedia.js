import React from "react";
import content from "../../content.json";

const SocialMedia = () => {
  return (
    <ul className="social-media mb-0">
      {content.social_facebook.length > 0 && (
        <li className="social-facebook">
          <a
            href={content.social_facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      )}

      {content.social_youtube.length > 0 && (
        <li className="social-youtube">
          <a
            href={content.social_youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      )}

      {content.social_twitter.length > 0 && (
        <li className="social-twitter">
          <a
            href={content.social_twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      )}

      {content.social_linkedin.length > 0 && (
        <li className="social-linkedIn">
          <a
            href={content.social_linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      )}

      {content.social_whatsapp.length > 0 && (
        <li className="social-whatsApp">
          <a
            href={content.social_whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      )}

      {content.social_instagram.length > 0 && (
        <li className="social-instagram">
          <a
            href={content.social_instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialMedia;
