import { makeStyles } from "@mui/styles";
import colors from "../../theme/colors";

import logo from "../../assets/logo.svg";
import fonts from "../../theme/fonts";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import theme from "../../theme/theme";

const useStyles = makeStyles(() => ({
  page: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  right__side: {
    width: "40%",
    height: "100%",
    backgroundColor: colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  left__side: {
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    height: "150px",
  },
  right__side_inner: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "530px",
    gap: "40px",
    padding: "25px",
  },
  title: {
    color: colors.titles,
    lineHeight: "120%",
    fontSize: fonts.h2,
    fontWeight: 600,
    marginBottom: "8px",
  },
  text: {
    color: colors.gray,
    lineHeight: "140%",
    fontSize: fonts.h6,
    fontWeight: 400,
  },
  input: {
    width: "100%",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: "12px",
    width: "100%",
    color: colors.white,
    padding: "10px",
    fontWeight: "600",
    fontSize: fonts.h6,
    lineHeight: "140%",
    marginBottom: "16px",
  },
  link: {
    color: colors.blue,
    fontWeight: "600",
    lineHeight: "140%",
    fontSize: fonts.h7,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Register = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isConfirmed, setConfirmed] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={classes.page}>
      <div className={classes.left__side}>
        <img className={classes.logo} src={logo} />
      </div>
      <div className={classes.right__side}>
        {!isConfirmed ? (
          <div className={classes.right__side_inner}>
            <div>
              <h2 className={classes.title}>Зарегистрируйтесь</h2>
              <p className={classes.text}>
                Укажите свою почту, которую будете вводить при входе и
                придумайте пароль
              </p>
            </div>
            <div className={classes.inputs}>
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Введите почту"
                variant="standard"
              />
              <FormControl className={classes.input} variant="standard">
                <InputLabel
                  htmlFor="standard-adornment-password"
                  className={classes.input}
                >
                  Введите пароль
                </InputLabel>
                <Input
                  className={classes.input}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className={classes.buttons}>
              <button
                className={classes.button}
                onClick={() => setConfirmed(true)}
              >
                Перейти к личной информации
              </button>
              <Link className={classes.link} to="/login">
                У меня уже есть аккаунт
              </Link>
            </div>
          </div>
        ) : (
          <div className={classes.right__side_inner}>
            <div>
              <h2 className={classes.title}>Представьтесь</h2>
              <p className={classes.text}>
                Чтобы мы создали уникальный личный кабинет, вам необходимо
                ввести свои данные
              </p>
            </div>
            <div className={classes.inputs}>
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Имя и фамилия "
                variant="standard"
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Логин"
                variant="standard"
              />
            </div>
            <div className={classes.buttons}>
              <button
                className={classes.button}
              >
                Зарегестрироваться
              </button>
              <Link className={classes.link} to="/login">
                У меня уже есть аккаунт
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
