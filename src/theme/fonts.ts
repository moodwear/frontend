const mq = window.matchMedia("(min-width: 500px)");

const fonts = mq.matches
  ? {
      h1: "48px",
      h2: "40px",
      h3: "32px",
      h4: "26px",
      h5: "20px",
      h6: "16px",
      h7: "14px",
    }
  : {
      h1: "32px",
      h2: "24px",
      h3: "20px",
      h4: "18px",
      h5: "20px",
      h6: "14px",
      h7: "14px",
    };

export default fonts;
