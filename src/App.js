import logo from './logo.svg';
import './App.css';
import invalidy from './images/invalidy.jpg'

function App() {
  return (
      <div className="main">
        <div className="main__head">
          <img className="main__head-img"
               src="https://in-museum.ru/wp-content/uploads/2019/04/cropped-logo_big.png" alt=""/>
          <a href="#" className="main__head-link main__head-link-active">ПАРТНЕРЫ</a>
          <a href="#" className="main__head-link main__head-link-active">СПЕЦПРОЕКТЫ</a>
          <a href="#" className="main__head-link main__head-link-active">ОРГАНИЗАТОРЫ</a>
          <a href="#" className="main__head-link main__head-link-active">АФИША</a>
          <a href="#" className="main__head-link main__head-link-active">АКЦИЯ</a>
        </div>

        <div className="main__content">
          <h2 className="main__content-h1">ВСЕРОССИЙСКАЯ ИНКЛЮЗИВНАЯ АКЦИЯ</h2>
          <h2 className="main__content-h2">МУЗЕЙ ДЛЯ ВСЕХ</h2>
          <div className="main__content-text">
            <p className="main__content-text-p">Выставки, экскурсии, концерты, театральные квесты</p>
            <p className="main__content-text-p">и мастер-классы для детей и взрослых, с инвалидностью и
              без.</p>
          </div>
          <p className="main__content-p4">18-20 АПРЕЛЯ 2020</p>
          <div className="main__content-stock">
            <p className="main__content-stock-p">До начала акции осталось:</p>
            <p className="main__content-stock-p2">117 ДНЕЙ</p>

          </div>
          <button className="main-content-btn">
            АФИША МЕРОПРИЯТИЙ
          </button>
        </div>
        <div className="main__info">
          <p className="main__info-p">
            Акция "Музей для всех" пройдет в Росси в третий раз. В 2017 году акция
            объединила
          </p>
          <p className="main__info-p">
            более 250 российских музеев и 13000 участников, а в 2018 году в ней приняли участие 360 музеев
          </p>
          <p className="main__info-p">
            и 16700 человек со всей страны. Мы надеемся, что количество наших единомышлеников будет расти!
          </p>
          <p className="main__info-p main__info-p-red-line">
            В рамках акции музеи приглашают посетителей на выставки, экскурсии,
            концерты, театральные
          </p>
          <p className="main__info-p">
            квесты и мастер-классы, адаптированнные или созданные с участием людей с инвалидностью.
          </p>
          <p className="main__info-p main__info-p-red-line">
            Задача акции - привлечь внимание широкой общественности к значимости
            равноправного
          </p>
          <p className="main__info-p">
            участия всех людей в культурной жизни. В этот день музеи приглашают всех тех, кто поддерживает
          </p>
          <p className="main__info-p">
            развитие инклюзии в нащей стране.
          </p>
        </div>
        <div className="main__project">
          <h2 className="main__project-h">
            Проекты
          </h2>
          <div className="main__project-photos">
            <img
                src={invalidy}
                alt="" className="main__project-img"/>
            <img src="https://i2.wp.com/philanthropy.ru/wp-content/uploads/2012/11/johnfranklinstephens.jpg"
                 alt=""
                 className="main__project-img"/>
            <img src="https://t3.ftcdn.net/jpg/02/35/28/40/360_F_235284088_78MfyIr67busTlLmT8N2wWFQJfCC48m2.jpg"
                 alt="" className="main__project-img"/>
          </div>
          <button className="main__project-btn">АФИША МЕРОПРИЯТИЙ</button>
        </div>
        <div className="main__organizers">
          <h2 className="main__organizers-h">
            ОРГАНИЗАТОРЫ
          </h2>
          <div className="main__organizers-photos">
            <img src="https://in-museum.ru/wp-content/uploads/2019/04/cropped-logo_big.png" alt=""
                 className="main__organizers-photos-img"/>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/ICOM-Logo-global-Fr.pdf/page1-1535px-ICOM-Logo-global-Fr.pdf.jpg"
                alt="" className="main__organizers-photos-img"/>
            <img src="https://static.tildacdn.com/tild3666-6462-4238-b161-326536313030/logo_for_movie.png"
                 alt=""
                 className="main__organizers-photos-img"/>
          </div>
          <h2 className="main__organizers-h2">
            ПРИ ПОДДЕРЖКЕ
          </h2>
          <h2 className="main__organizers-h3">
            ПАРТНЕРЫ
          </h2>
          <div className="main__organizers-support">
            <img src="https://www.b-soc.ru/wp-content/uploads/2019/10/logo-1.png" alt=""
                 className="main__organizers-support-img"/>
            <img
                src="https://icom-russia.com/upload/%D1%84%D0%BE%D1%82%D0%BE/1200px-Vladimir_Potanin_Foundation_logo.png"
                alt="" className="main__organizers-support-img"/>
            <img
                src="https://tadviser.ru/images/7/77/Logo-%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0-%D0%A0%D0%A4-%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg"
                alt="" className="main__organizers-support-img"/>
          </div>
          <div className="main__footer">
            <p className="main__footer-p">inmeuseumrus@gmail.com</p>
            <p className="main__footer-p2">2019 Инклюзивный музей</p>
            <div className="main__footer-photo">
              <img
                  src="https://e7.pngegg.com/pngimages/478/171/png-clipart-youtube-music-logo-computer-icons-youtube-angle-rectangle.png"
                  alt="" className="main__footer-photo-img"/>
              <img
                  src="https://c1.klipartz.com/pngpicture/439/164/sticker-png-social-icon-social-icon-vk-social-logotype-icon-social-icons-rounded-icon-symbol-automotive-decal.png"
                  alt="" className="main__footer-photo-img"/>
              <img
                  src="https://flyclipart.com/thumb2/iconsetc-flat-circle-white-on-black-raphael-facebook-icon-466346.png"
                  alt="" className="main__footer-photo-img"/>
              <img src="https://i.pinimg.com/originals/ca/29/86/ca2986a43d699a2e11ccc83fd5fb9630.png  " alt=""
                   className="main__footer-photo-img"/>
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
