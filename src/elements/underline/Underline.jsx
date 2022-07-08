import classNames from 'classnames';
import underlineStyles from './underline.module.scss';

const Underline = () => {
  return (
    <div className={classNames(underlineStyles.wrapper)}>
      <div className={classNames(underlineStyles.line)}></div>
    </div>
  );
};

export default Underline;
