import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Wrapper from "../wrapper/Wrapper";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import accountImage from "../../assets/image 6.svg";
import { useMediaQuery } from "@mui/material";
import closedMenuIcon from "../../assets/Frame 251.svg";
import openedMenuIcon from "../../assets/Vector.svg";
import theme from "../../theme/theme";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: colors.white,
    minHeight: "56px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  header__navigation: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
  },
  header__navigation_list: {
    display: "flex",
    gap: "24px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  header__inner: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__link: {
    textDecoration: "none",
    fontSize: fonts.h6,
    color: colors.gray,
    fontWeight: "500",
    "&:hover": {
      color: colors.blue,
      transition: "all 0.5s",
    },
  },
  header__image: {
    maxHeight: "40px",
  },
  header__auth: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  header__navigation_menu: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    height: "30vh",
    width: "100vw",
    padding: "24px 25px",
    top: "56px",
    left: "0",
    gap: "24px",
    boxShadow: "15px 25px 25px #0f0f0f",
    backgroundColor: colors.white,
  },
}));

const Header = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const [isOpen, setOpen] = useState(false);

  return matches ? (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.header__inner}>
          <div className={classes.header__navigation}>
            <img src={logo}></img>
            <nav className={classes.header__navigation_list}>
              <span onClick={() => setOpen(false)}>
                <a href="#about" className={classes.header__link}>
                  О компании
                </a>
              </span>
              <a
                href="#projects"
                className={classes.header__link}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Наши проекты
              </a>
              <a
                href="#blog"
                className={classes.header__link}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Личный блог
              </a>
              <a
                href="#contacts"
                className={classes.header__link}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Контакты
              </a>
            </nav>
          </div>
          <div className={classes.header__auth}>
            <Link
              to="#"
              className={classes.header__link}
              onClick={() => {
                setOpen(false);
              }}
            >
              Войти в аккаунт
            </Link>
            <img className={classes.header__image} src={accountImage} />
          </div>
        </div>
      </Wrapper>
    </header>
  ) : (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.header__inner}>
          <img src={logo}></img>
          {isOpen ? (
            <>
              <img
                src={openedMenuIcon}
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              />
              <div className={classes.header__navigation_menu}>
                <div className={classes.header__auth}>
                  <Link to="#" className={classes.header__link}>
                    Войти в аккаунт
                  </Link>
                  <img className={classes.header__image} src={accountImage} />
                </div>
                <nav className={classes.header__navigation_list}>
                  <a href="#about" className={classes.header__link}>
                    О компании
                  </a>
                  <a href="#projects" className={classes.header__link}>
                    Наши проекты
                  </a>
                  <a href="#blog" className={classes.header__link}>
                    Личный блог
                  </a>
                  <a href="#contacts" className={classes.header__link}>
                    Контакты
                  </a>
                </nav>
              </div>
            </>
          ) : (
            <img
              src={closedMenuIcon}
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
