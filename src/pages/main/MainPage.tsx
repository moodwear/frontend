import Wrapper from "../../components/wrapper/Wrapper";
import { makeStyles } from "@mui/styles";

import mainPicture from "./images/main.jpg";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import account1 from "./images/accaunt-logo1.svg";
import articleImage from "./images/main.png";
import tg from "./images/Frame 95.png";
import wapp from "./images/Frame 96.png";
import theme from "../../theme/theme";

const useStyles = makeStyles(() => ({
  prewiew: {
    backgroundImage: `url('${mainPicture}')`,
    height: "300px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "24px",
  },
  prewiew__title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fonts.h1,
    lineHeight: "130%",
    marginTop: "58px",
    textAlign: "center",
  },
  prewiew__subtitle: {
    color: colors.white,
    fontWeight: "400",
    fontSize: fonts.h6,
    lineHeight: "130%",
    marginTop: "8px",
    textAlign: "center",
  },
  prewiew__button: {
    maxWidth: "185px",
    width: "100%",
    marginTop: "40px",
    backgroundColor: colors.blue,
    color: colors.white,
    fontSize: fonts.h6,
    lineHeight: "140%",
    padding: "10px 16px",
    fontWeight: 600,
    borderRadius: "12px",
    "&:hover": {
      opacity: "0.7",
      transition: "all 0.7s",
    },
  },
  advantages: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px",
    gap: "15px",
    flexWrap: "wrap",
  },
  advantage: {
    backgroundColor: colors.white,
    maxWidth: "370px",
    width: "100%",
    padding: "16px 24px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "600px",
    },
  },
  advantage__number: {
    fontWeight: "700",
    fontSize: "80px",
    lineHeight: "120%",
  },
  advantage__title: {
    fontWeight: "600",
    fontSize: fonts.h4,
    lineHeight: "120%",
    color: colors.gray,
  },
  advantage__text: {},
  advantage__number_pink: {
    color: "#FD567E",
  },
  text: {
    fontSize: fonts.h6,
    fontWeight: "400",
    lineHeight: "140%",
    color: colors.gray,
  },
  advantage__number_orange: {
    color: colors.orange,
  },
  advantage__number_green: {
    color: colors.green,
  },
  title: {
    fontSize: fonts.h2,
    fontWeight: "700",
    lineHeight: "130%",
    color: colors.gray,
    textAlign: "center",
  },
  about: {
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    },
  },
  about__content: {
    marginTop: "32px",
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
  about__item: {
    backgroundColor: colors.white,
    maxWidth: "568px",
    width: "100%",
    padding: "32px 128px 32px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    borderRadius: "20px",
  },
  about__item_orange: {
    backgroundImage: `url('/styled-orange.png')`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  about__item_pink: {
    backgroundImage: `url('/styled-pink.png')`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  about__item_green: {
    backgroundImage: `url('/styled-green.png')`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  about__item_blue: {
    backgroundImage: `url('/styled-blue.png')`,
    backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  about__title: {
    fontWeight: 600,
    fontSize: fonts.h3,
    color: colors.gray,
    lineHeight: "120%",
  },
  about__question: {
    display: "flex",
    borderRadius: "20px",
    backgroundColor: colors.blue,
    justifyContent: "space-between",
    padding: "24px 32px",
    marginTop: "16px",
    color: colors.white,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "16px",
    },
  },
  about__question_title: {
    fontWeight: "600",
    fontSize: fonts.h3,
    lineHeight: "120%",
  },
  about__question_button: {
    backgroundColor: colors.white,
    color: colors.blue,
    fontSize: fonts.h6,
    fontWeight: 600,
    padding: "10px 16px",
    borderRadius: "12px",
  },
  projects: {
    marginTop: "80px",
    paddingRight: "25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
      paddingRight: "0",
    },
  },
  project: {
    padding: "24px",
    maxWidth: "580px",
    backgroundColor: colors.white,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderRadius: "20px",
  },
  project__title: {
    color: colors.titles,
    fontWeight: 600,
    lineHeight: "140%",
    fontSize: fonts.h5,
  },
  projects__list: {
    marginTop: "32px",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridTemplateRows: "128px 128px 128px 100px",
    columnGap: "24px",
    rowGap: "16px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  project__image: {
    width: "540px",
    borderRadius: "20px",
    marginTop: "8px",
  },
  project_1: {
    gridRow: "1",
  },
  project_2: { gridRow: "1/4" },
  project_3: { gridRow: "2/5" },
  project__more: {
    backgroundColor: colors.blue,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "20px",
    padding: "24px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "16px",
    },
  },
  project__more_title: {
    color: colors.white,
    fontWeight: "600",
    fontSize: fonts.h5,
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  project__more_button: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: fonts.h6,
    backgroundColor: colors.white,
    borderRadius: "12px",
    padding: "10px 16px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  blog: {
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    },
  },
  subtitle: {
    color: colors.gray,
    fontSize: fonts.h6,
    lineHeight: "140%",
    textAlign: "center",
    paddingBottom: "32px",
  },
  blog__list: {
    display: "grid",
    paddingRight: "25px",
    gridTemplateColumns: "50% 50%",
    gridTemplateRows: "236px 214px 60px 24px",
    columnGap: "24px",
    rowGap: "16px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      display: "flex",
      flexDirection: "column",
    },
  },
  article_1: {
    gridRow: "1",
  },
  article_2: {
    gridRow: "1/4",
  },
  article_3: {
    gridRow: "2/3",
  },
  article_4: {
    gridRow: "3/5",
  },
  article: {
    backgroundColor: colors.white,
    padding: "24px",
    borderRadius: "20px",
    overflow: "hidden",
  },
  article__header: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  article__tag: {
    fontWeight: 600,
    fontSize: fonts.h7,
    lineHeight: "140%",
    padding: "2px 8px",
    borderRadius: "10px",
  },
  article__tag_pink: {
    backgroundColor: "rgba(253, 86, 126, 0.16)",
    color: colors.pink,
  },
  article__tag_green: {
    backgroundColor: "rgba(58, 221, 162, 0.16);",
    color: colors.green,
  },
  article__tag_orange: {
    backgroundColor: "rgba(243, 169, 23, 0.16);",
    color: colors.orange,
  },
  article__images: {
    display: "flex",
  },
  article__account_image: {
    width: "20px",
    height: "20px",
  },
  article__account_name: {
    color: colors.titles,
    fontWeight: 600,
    lineHeight: "140%",
    fontSize: fonts.h7,
  },
  article__time: {
    color: colors.lightGray,
    fontWeight: 400,
    lineHeight: "140%",
    fontSize: fonts.h7,
  },
  article__content: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  article__title: {
    color: colors.titles,
    fontWeight: 600,
    lineHeight: "140%",
    fontSize: fonts.h5,
  },
  article__image: {
    maxWidth: "540px",
    maxHeight: "280px",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  },
  contacts: {
    marginTop: "80px",
    marginBottom: "80px",
    [theme.breakpoints.down("sm")]: {
        marginTop: '60px',
        marginBottom: '60px',
      },
  },
  contacts__item: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "120px 24px 24px 24px",
    backgroundColor: colors.white,
    borderRadius: "20px",
    maxWidth: "388px",
    [theme.breakpoints.down("sm")]: {
        maxWidth: '600px'
      },
  },
  contacts__list: {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    columnGap: "24px",
    paddingRight: "25px",
    rowGap: "16px",
    [theme.breakpoints.down("sm")]: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 0
      },
  },
  advantage__footer: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
  },
  contacts__item_1: {
    backgroundImage: `url('./Vector.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "34px 34px",
  },
  contacts__item_2: {
    backgroundImage: `url('./Vector2.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "34px 34px",
  },
  contacts__item_3: {
    paddingTop: "24px",
  },
  contacts__item_4: {
    backgroundImage: `url('./Vector3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "34px 34px",
  },
  contacts__item_5: {
    backgroundImage: `url('./Vector4.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "34px 34px",
  },
  article__info: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <section>
        <div className={classes.prewiew}>
          <h2 className={classes.prewiew__title}>
            Лаборатория идей «ПолитехМедиа»
          </h2>
          <h3 className={classes.prewiew__subtitle}>
            Создаем продукты в условиях нечеткого или отсутствующего ТЗ
          </h3>
          <button className={classes.prewiew__button}>Связаться с нами</button>
        </div>
      </section>
      <section className={classes.advantages}>
        <div className={classes.advantage}>
          <h2
            className={`${classes.advantage__number} ${classes.advantage__number_pink}`}
          >
            1
          </h2>
          <h2 className={classes.advantage__title}>Интервью</h2>
          <h2 className={`${classes.advantage__text} ${classes.text}`}>
            Связываемся с заказчиками и собираем первичную информацию для
            проекта
          </h2>
        </div>
        <div className={classes.advantage}>
          <h2
            className={`${classes.advantage__number} ${classes.advantage__number_orange}`}
          >
            2
          </h2>
          <h2 className={classes.advantage__title}>Сбор команды</h2>
          <h2 className={`${classes.advantage__text} ${classes.text}`}>
            Ищем профессионалов и приглашаем их для сотрудничества, формируем ТЗ
          </h2>
        </div>
        <div className={classes.advantage}>
          <h2
            className={`${classes.advantage__number} ${classes.advantage__number_green}`}
          >
            3
          </h2>
          <h2 className={classes.advantage__title}>Реализация</h2>
          <h2 className={`${classes.advantage__text} ${classes.text}`}>
            Договариваемся с администрацией или руководителями и устраиваем шоу!
          </h2>
        </div>
      </section>
      <section className={classes.about} id="about">
        <h2 className={classes.title}>О компании</h2>
        <div className={classes.about__content}>
          <div
            className={`${classes.about__item} ${classes.about__item_orange}`}
          >
            <h2 className={classes.about__title}>Организация мероприятий</h2>
            <p className={classes.text}>
              Ищем профессионалов и приглашаем их для сотрудничества, формируем
              ТЗ
            </p>
          </div>
          <div className={`${classes.about__item} ${classes.about__item_pink}`}>
            <h2 className={classes.about__title}>Видеомэппинг</h2>
            <p className={classes.text}>
              Ищем профессионалов и приглашаем их для сотрудничества, формируем
              ТЗ
            </p>
          </div>
          <div
            className={`${classes.about__item} ${classes.about__item_green}`}
          >
            <h2 className={classes.about__title}>Представления</h2>
            <p className={classes.text}>
              Ищем профессионалов и приглашаем их для сотрудничества, формируем
              ТЗ
            </p>
          </div>
          <div className={`${classes.about__item} ${classes.about__item_blue}`}>
            <h2 className={classes.about__title}>Танцы</h2>
            <p className={classes.text}>
              Ищем профессионалов и приглашаем их для сотрудничества, формируем
              ТЗ
            </p>
          </div>
        </div>
        <div className={classes.about__question}>
          <h2 className={classes.about__question_title}>
            У вас есть интересный проект?
          </h2>
          <button className={classes.about__question_button}>
            Связаться с нами
          </button>
        </div>
      </section>
      <section className={classes.projects} id="projects">
        <h2 className={classes.title}>Наши проекты</h2>
        <div className={classes.projects__list}>
          <div className={`${classes.project} ${classes.project_1}`}>
            <h2 className={classes.project__title}>
              Фестиваль «Круг света» в Москве
            </h2>
            <p className={classes.text}>
              Проекционные шоу в разных частях столицы: на Театральной площади,
              в Царицыно, парке Коломенское и Музее Победы
            </p>
          </div>
          <div className={`${classes.project} ${classes.project_2}`}>
            <h2 className={classes.project__title}>
              «Письма победы» в рамках мероприятия
            </h2>
            <p className={classes.text}>
              В основу шоу легли письма омичей-фронтовиков, в которых они
              делились эмоциями и переживаниями со своими родными в годы Великой
              Отечественной Войны
            </p>
            <img className={classes.project__image} src="/theatre.png" />
          </div>
          <div className={`${classes.project} ${classes.project_3}`}>
            <h2 className={classes.project__title}>
              Омский Аэропорт им. Д. М. Карбышева
            </h2>
            <p className={classes.text}>
              Разработали с нуля дизайн и графическое сопровождение. Согласовали
              и выполнили в стилистике по ТЗ
            </p>
            <img className={classes.project__image} src="/pr-img.png" />
          </div>
          <div className={classes.project__more}>
            <h2 className={classes.project__more_title}>
              Это далеко не все проекты, которыми мы занимаемся
            </h2>
            <button className={classes.project__more_button}>
              Узнать больше
            </button>
          </div>
        </div>
      </section>
      <section className={classes.blog} id="blog">
        <h2 className={classes.title}>Личный блог</h2>
        <h2 className={classes.subtitle}>
          Пишем о проектах, обучаем новому и рассказываем о последних событиях
        </h2>
        <div className={classes.blog__list}>
          <div className={`${classes.article} ${classes.article_1}`}>
            <div className={classes.article__header}>
              <span
                className={`${classes.article__tag} ${classes.article__tag_pink}`}
              >
                Новости
              </span>
              <div className={classes.article__info}>
                <div className={classes.article__images}>
                  <img
                    className={classes.article__account_image}
                    src={account1}
                  ></img>
                </div>
                <p className={classes.article__account_name}>ПолитехМедиа</p>
                <p className={classes.article__time}>Сейчас</p>
              </div>
            </div>
            <div className={classes.article__content}>
              <h2 className={classes.article__title}>
                Влияние медитации на мозг. На чем это завязано и как работает?
              </h2>
              <p className={classes.text}>
                Увидел я ролик на ютюбе « как сделать пуф своими руками». На вид
                выглядело все легко и просто. Почему бы не заняться
                производством мебели, подумал я, и выбрал пуф для своего первого
                изделия. Казалось легче легкого.
              </p>
            </div>
          </div>

          <div className={`${classes.article} ${classes.article_2}`}>
            <div className={classes.article__header}>
              <span
                className={`${classes.article__tag} ${classes.article__tag_orange}`}
              >
                Обучение
              </span>
              <div className={classes.article__info}>
                <div className={classes.article__images}>
                  <img
                    className={classes.article__account_image}
                    src={account1}
                  ></img>
                </div>
                <p className={classes.article__account_name}>ПолитехМедиа</p>
                <p className={classes.article__time}>14 мая, 2023</p>
              </div>
            </div>
            <div className={classes.article__content}>
              <h2 className={classes.article__title}>
                Влияние медитации на мозг. На чем это завязано и как работает?
              </h2>
              <p className={classes.text}>
                Увидел я ролик на ютюбе « как сделать пуф своими руками». На вид
                выглядело все легко и просто. Почему бы не заняться
                производством мебели, подумал я, и выбрал пуф для своего первого
                изделия. Казалось легче легкого.
              </p>
              <img className={classes.article__image} src={articleImage}></img>
            </div>
          </div>

          <div className={`${classes.article} ${classes.article_3}`}>
            <div className={classes.article__header}>
              <span
                className={`${classes.article__tag} ${classes.article__tag_green}`}
              >
                Проекты
              </span>
              <div className={classes.article__info}>
                <div className={classes.article__images}>
                  <img
                    className={classes.article__account_image}
                    src={account1}
                  ></img>
                </div>
                <p className={classes.article__account_name}>ПолитехМедиа</p>
                <p className={classes.article__time}>2 мая, 2023</p>
              </div>
            </div>
            <div className={classes.article__content}>
              <h2 className={classes.article__title}>
                Мы привлекли 200000 долларов инвестирования, чтобы лишить работы
                дизайнеров
              </h2>
              <p className={classes.text}>
                Как мы делаем международный стартап, который поможет
                цифровизировать полиграфическую продукцию для оффлайна
                и избавиться от коррупции, которую поддерживают типографии
              </p>
            </div>
          </div>
          <div className={`${classes.project__more} ${classes.article_4}`}>
            <h2 className={classes.project__more_title}>
              Еще у нас есть библиотека знаний и вакансии для участия в проектах
            </h2>
            <button className={classes.project__more_button}>
              Узнать больше
            </button>
          </div>
        </div>
      </section>
      <section className={classes.contacts} id="contacts">
        <h2 className={classes.title}>Есть что обсудить?</h2>
        <h3 className={classes.subtitle}>
          Свяжитесь с нами удобным для вас способом, ответим в течение рабочего
          дня
        </h3>
        <div className={classes.contacts__list}>
          <div
            className={`${classes.contacts__item} ${classes.contacts__item_1}`}
          >
            <h2 className={classes.advantage__title}>Развитие</h2>
            <p className={classes.text}>
              Наши проекты никогда не стоят на месте
            </p>
          </div>
          <div
            className={`${classes.contacts__item} ${classes.contacts__item_2}`}
          >
            <h2 className={classes.advantage__title}>Честная зарплата</h2>
            <p className={classes.text}>Платим столько, сколько заработал</p>
          </div>
          <div
            className={`${classes.contacts__item} ${classes.contacts__item_3}`}
          >
            <h2 className={classes.advantage__title}>8 (800) 800-80-80</h2>
            <p className={classes.text}>Звоните с 12:00 до 22:00 по МСК</p>
            <br />
            <h2 className={classes.advantage__title}>example@gmail.com</h2>
            <p className={classes.text}>Пишите, когда вам удобно </p>
            <div className={classes.advantage__footer}>
              <img src={tg} />
              <img src={wapp} />
            </div>
          </div>
          <div
            className={`${classes.contacts__item} ${classes.contacts__item_4}`}
          >
            <h2 className={classes.advantage__title}>Обучение</h2>
            <p className={classes.text}>
              Нам важно, чтобы наши сотрудники были самыми лучшими
            </p>
          </div>
          <div
            className={`${classes.contacts__item} ${classes.contacts__item_5}`}
          >
            <h2 className={classes.advantage__title}>Зоны роста</h2>
            <p className={classes.text}>
              Заказчиками наших проектов являются крупные компании
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default MainPage;
