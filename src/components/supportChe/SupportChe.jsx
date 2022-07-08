import baseStyles from 'styles/base.module.scss';
import classNames from 'classnames';
import Underline from 'elements/underline/Underline';
import supportCheStyles from './supportChe.module.scss';
import ukraine from 'assets/ukraine.png';
import heart from 'assets/icon-heart.svg';
import Button from 'elements/button/Button';
import { Link } from 'react-router-dom';

// ! Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const SupportChe = () => (
  <div className={classNames(supportCheStyles.wrapper, baseStyles.container)}>
    <div className={classNames(supportCheStyles.top)}>
      <h2 className={classNames(supportCheStyles.title)}>
        Підтримати Чернігів
      </h2>
      <Underline />
    </div>
    <div className={classNames(supportCheStyles.imagesWrapper)}>
      <img
        src={ukraine}
        className={supportCheStyles.image}
        alt={'support Chernihiv from Ukraine'}
      />
      <img
        src={heart}
        className={supportCheStyles.heart}
        alt={'support Chernihiv from Ukraine'}
      />
    </div>
    <Button
      text="Допомогти Чернігову"
      href="https://linktr.ee/iron_fist_chernihiv"
      className={classNames(supportCheStyles.button)}
    />
    <Link to="/gallery" className={classNames(supportCheStyles.paw)}>
      <Button
        text={<FontAwesomeIcon icon={faPaw} />}
        className={classNames(supportCheStyles.button)}
      />
    </Link>
  </div>
);

export default SupportChe;
