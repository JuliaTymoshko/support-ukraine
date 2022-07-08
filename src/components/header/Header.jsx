import classNames from 'classnames';
import headerStyles from './header.module.scss';
// import baseStyles from './../../styles/base.module.scss';

const Header = () => {
  return (
    <div>
      <header className={classNames(headerStyles.header)}>
        <div className={classNames(headerStyles.text)}>
          Stand
          <span className={classNames(headerStyles.innerText)}>With</span>
          Ukraine
        </div>
      </header>
    </div>
  );
};

export default Header;
