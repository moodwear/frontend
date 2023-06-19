import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo-dark.svg";
import Wrapper from "../wrapper/Wrapper";
import colors from "../../theme/colors";
import { Link } from "react-router-dom";
import fonts from "../../theme/fonts";
import theme from "../../theme/theme";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: colors.white,
    minHeight: "240px",
    height: "100%",
    backgroundImage: `url('/Footer.png')`,
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url('/Group 725.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
  footer__inner: {
    margin: "40px 0",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: '25px'
    },
  },
  footer__content: {
    display: "flex",
    gap: "80px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: '30px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      gap: '40px'
    },
  },
  footer__links: {
    display: "flex",
    gap: "24px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    },
  },
  footer__content_table: {
  },
  footer__title: {
    color: colors.titles,
    fontSize: fonts.h5,
    fontWeight: 600,
    lineHeight: '130%',
    marginBottom: '16px'
  },
  footer__link_gray: {
    textDecoration: "none",
    color: colors.icons,
    fontSize: fonts.h7,
    "&:hover": {
        color: colors.blue,
        transition: 'all 0.5s'
    },
  },
  footer__link: {
    textDecoration: "none",
    color: colors.gray,
    fontSize: fonts.h6,
    marginRight: '24px',
    fontWeight: '500',
    lineHeight: '140%',
    "&:hover": {
        color: colors.blue,
        transition: 'all 0.5s'
    } 
  },
  footer__navigation: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    maxHeight: "80px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "100px"
    },
  },
  footer__image: {
    marginTop: '10px'
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <div className={classes.footer__inner}>
          <div className={classes.footer__content}>
            <img className={classes.footer__image} src={logo} />
            <div className={classes.footer__content_table}>
              <h2 className={classes.footer__title}>О нас</h2>
              <div className={classes.footer__navigation}>
                <Link to="/" className={classes.footer__link}>
                  О компании
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Наши проекты
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Контакты
                </Link>
              </div>
            </div>
            <div className={classes.footer__content_table}>
              <h2 className={classes.footer__title}>Пользователю</h2>
              <div className={classes.footer__navigation}>
                <Link to="/" className={classes.footer__link}>
                  Новости
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Обучение
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Личный кабинет
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Вакансии
                </Link>
                <Link to="/" className={classes.footer__link}>
                  Полезное
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.footer__links}>
            <Link to="/" className={classes.footer__link_gray}>
              © 2023, ПолитехМедиа
            </Link>
            <Link to="/" className={classes.footer__link_gray}>
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
