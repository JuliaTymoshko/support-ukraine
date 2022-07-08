import classNames from 'classnames';
import cardStyles from './card.module.scss';

const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className={classNames(cardStyles.wrapper)}>
        {/* Pic */}
        <img
          className={cardStyles.image}
          alt={'Катерининська церква'}
          src={image}
        />
        <h3 className={classNames(cardStyles.title)}>{title}</h3>
        <h3 className={classNames(cardStyles.description)}>{description}</h3>
      </div>
    </div>
  );
};

export default Card;
