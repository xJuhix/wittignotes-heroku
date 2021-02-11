import React from 'react';
import {
  FaGoodreadsG,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__text">
            <p>&copy; 2020 Wittig Notes</p>
          </div>
          <div className="footer__links">
            <a
              href="https://www.goodreads.com/review/list/93584625?ref=nav_mybooks"
              aria-label=" Felix Wittig Reading List"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaGoodreadsG />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UC6HslxZb3iZMZcc8mj32cyQ"
              aria-label="Felix Wittig Youtubepage"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.instagram.com/felix_9727/?hl=en"
              aria-label=" Felix Wittig Instagram"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.facebook.com/felix.wi.355"
              aria-label=" Felix Wittig Facebook"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaFacebook />
              </span>
            </a>
            <a
              href="https://twitter.com/felix_wittig?lang=en"
              aria-label=" Felix Wittig Twitter"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
