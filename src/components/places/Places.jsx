// ! Import base
import baseStyles from 'styles/base.module.scss';
import placesStyles from './places.module.scss';
import classNames from 'classnames';
import Card from 'elements/card/Card';

// ! Import images
import kate from 'assets/kate.jpg';
import platz from 'assets/platz.jpg';
import val from 'assets/val.jpg';
import Underline from 'elements/underline/Underline';

// ! Import swiper
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// ! Import custom for swiper
import sliderStyles from './slider.scss';

// ! Import styles for swiper
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/mousewheel';

// ! Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';

const Places = () => {
  return (
    <div className={classNames(placesStyles.wrapper)}>
      <div className={classNames(baseStyles.container)}>
        <div className={classNames(placesStyles.top)}>
          <h2 className={classNames(placesStyles.title)}>
            Неймовірні місця Чернігова
          </h2>
          <Underline />
        </div>
        <div className="arrowflex">
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={classNames(
              placesStyles.icon,
              placesStyles.arrowLeft,
              'review-swiper-button-prev'
            )}
          />
          <div className={classNames(sliderStyles.slider, sliderStyles.swiper)}>
            <div
              className={classNames(placesStyles.cards, sliderStyles.container)}
            >
              {/* // ! Инициализация Swiper */}
              <Swiper
                className="placesSwiper"
                modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation={{
                  nextEl: '.review-swiper-button-next',
                  prevEl: '.review-swiper-button-prev',
                }}
                mousewheel={{ invert: true }}
                // ! Responsive breakpoints
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {/* // ! Карточки */}
                <SwiperSlide>
                  <Card
                    image={kate}
                    title="Катерининська церква"
                    description="Пам’ятка розташована в історичному середмісті, поблизу давнього Дитинця. Є однією із провідних архітектурних домінант Чернігова."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={val}
                    title="Захисний Вал (Дитинець)"
                    description="Дитинець давнього Чернігова розташований на мису, у місці злиття річки Десни і Стрижня. Знаходячись на перетині головних природних напрямів, він займає пануюче положення серед оточуючого ландшафту. Саме таке місцерозташування дитинця забезпечувало найбільш сприятливі умови для контроля над округою і візуального зв’язку з нею. Через це в стародавні часи його територія була найзручнішим місцем для оселення людей."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={platz}
                    title="Красна площа"
                    description="Ще з часів князювання у місті ця площа, яка називалася П’ятницьким полем, була місцем усіх торгів та базару. «П’ятницька» назва зумовлена знаходженням поруч П’ятницької церкви, яку у свій час профінансував сам князь Ігор із «Повісті минулих літ». А факт того, що в центрі був базар, створив нову назву «Базарна». Варто також сказати про назву «Театральна», адже поруч із нею височіє Чернігівський обласний драматичний театр імені Т.Г. Шевченка, який побудували 1959 року."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={val}
                    title="Захисний Вал (Дитинець)"
                    description="Дитинець давнього Чернігова розташований на мису, у місці злиття річки Десни і Стрижня. Знаходячись на перетині головних природних напрямів, він займає пануюче положення серед оточуючого ландшафту. Саме таке місцерозташування дитинця забезпечувало найбільш сприятливі умови для контроля над округою і візуального зв’язку з нею. Через це в стародавні часи його територія була найзручнішим місцем для оселення людей."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={platz}
                    title="Красна площа"
                    description="Ще з часів князювання у місті ця площа, яка називалася П’ятницьким полем, була місцем усіх торгів та базару. «П’ятницька» назва зумовлена знаходженням поруч П’ятницької церкви, яку у свій час профінансував сам князь Ігор із «Повісті минулих літ». А факт того, що в центрі був базар, створив нову назву «Базарна». Варто також сказати про назву «Театральна», адже поруч із нею височіє Чернігівський обласний драматичний театр імені Т.Г. Шевченка, який побудували 1959 року."
                  />
                </SwiperSlide>
              </Swiper>
              {/* // ! ниже закрываетя div sliderStyles.container */}
            </div>
          </div>
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            className={classNames(
              placesStyles.icon,
              placesStyles.arrowRight,
              'review-swiper-button-next'
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Places;
