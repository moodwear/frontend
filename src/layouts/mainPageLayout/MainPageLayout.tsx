import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const useStyles = makeStyles(() => ({
  main: {
    flexGrow: 1,
  },
}));

const MainPageLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainPageLayout;
