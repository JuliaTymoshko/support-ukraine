import classNames from 'classnames';
import footerStyles from './footer.module.scss';
// ! Icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className={classNames(footerStyles.footer)}>
        <div className={classNames(footerStyles.text)}>
          Stand
          <span className={classNames(footerStyles.innerText)}>With</span>
          Ukraine
        </div>

        <div className={classNames(footerStyles.iconWrapper)}>
          <a
            href="https://www.linkedin.com/in/julia-tymoshko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={classNames(footerStyles.icon)}
            />
          </a>

          <a
            href="https://tmtr.me/JuliaTymoshko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className={classNames(footerStyles.icon)}
            />
          </a>

          <a
            href="https://www.instagram.com/_banana_bee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={classNames(footerStyles.icon)}
            />
          </a>
        </div>
        <div className={classNames(footerStyles.contact)}>
          Powered by Julia Tymoshko
        </div>
      </footer>
    </div>
  );
};

export default Footer;
