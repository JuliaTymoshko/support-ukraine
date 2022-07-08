import baseStyles from 'styles/base.module.scss';
import classNames from 'classnames';
import Underline from 'elements/underline/Underline';
import supportStyles from './support.module.scss';
import yellowHeart from 'assets/yellowHeart.png';
import Button from 'elements/button/Button';

const Support = () => {
  return (
    <div className={classNames(supportStyles.wrapper, baseStyles.container)}>
      <div className={classNames(supportStyles.top)}>
        <h2 className={classNames(supportStyles.title)}>Підтримати Україну</h2>
        <Underline />
      </div>
      <img
        src={yellowHeart}
        className={supportStyles.image}
        alt={'Support Ukraine'}
      />
      <Button
        text="Допомогти Україні"
        href="https://savelife.in.ua/donate/"
        className={classNames(supportStyles.button)}
      />
    </div>
  );
};

export default Support;
