import classNames from 'classnames';
import patronStyles from './patron.module.scss';
import baseStyles from 'styles/base.module.scss';
import Underline from 'elements/underline/Underline';

// ! Import images
import patron00 from 'assets/patron00.jpg';
import patron0 from 'assets/patron0.jpg';
import patron1 from 'assets/patron1.jpg';
import patron2 from 'assets/patron2.jpg';
import patron3 from 'assets/patron3.jpg';
import patron4 from 'assets/patron4.jpg';

const Patron = () => {
  return (
    <div className={classNames(patronStyles.wrapper)}>
      <div className={classNames(baseStyles.container)}>
        <div className={classNames(patronStyles.top)}>
          <h2 className={classNames(patronStyles.title)}>Patron-Брендінг</h2>
          <Underline />
          {/* Below is end of patron.top */}
        </div>
        <div className={classNames(patronStyles.galleryWrapper)}>
          <div className={classNames(patronStyles.main)}>
            <img src={patron00} alt="amazing patron" />
            <img src={patron1} alt="amazing patron" />
            <img src={patron2} alt="amazing patron" />
            <img src={patron0} alt="amazing patron" />
            <img src={patron4} alt="amazing patron" />
            <img src={patron3} alt="amazing patron" />
          </div>
        </div>
        {/* Below is end of baseStyles.container */}
      </div>
      {/* Below is end of galleryWrapper */}
    </div>
  );
};

export default Patron;
