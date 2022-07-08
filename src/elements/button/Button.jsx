import classNames from 'classnames';
import buttonStyles from './button.module.scss';

const Button = ({ text, href }) => {
  return (
    <>
      <a href={href} rel="noreferrer" target="_blank">
        <button className={classNames(buttonStyles.button)}>
          <span>{text}</span>
        </button>
      </a>
    </>
  );
};

export default Button;
