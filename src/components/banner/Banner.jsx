import baseStyles from 'styles/base.module.scss';
import classNames from 'classnames';
import bannerStyles from './banner.module.scss';

const Banner = () => {
  return (
    <>
      {/* BG */}

      <div className={classNames(bannerStyles.banner)}>
        <div className={bannerStyles.bgFilter} />
        {/* Main content */}
        <div className={classNames(bannerStyles.main, baseStyles.container)}>
          <div className={classNames(bannerStyles.parts)}>
            <div
              className={classNames(bannerStyles.part, bannerStyles.partBlue)}
            />
            <div
              className={classNames(bannerStyles.part, bannerStyles.partYellow)}
            />
          </div>
          <div className={classNames(bannerStyles.text)}>
            Осінь Чернігівська, де ж ти була? <br />
            Чом не прийшла ти до мене раніше? <br />
            Сонце все нижче, і мало тепла, <br />
            Та все одно ти мені наймиліша.
          </div>
        </div>
        {/* Main content */}
      </div>
    </>
  );
};

export default Banner;
