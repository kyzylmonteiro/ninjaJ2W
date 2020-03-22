import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardSection from "./CardSection";

const useStyles = makeStyles({
  root: {},
  app: {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
    textAlign: "center"
  },
  cardsSection: {
    width: "100vw"
  },
  notCardSection: {}
});

function App(props) {
  const stylez = useStyles();
  let data = props.data;
  let cards = data.cards;
  return (
    <div className="App">
      <div className={stylez.app}>
        <div className={stylez.notCardSection}>
          <Typography variant="h3">{data.header}</Typography>
          <Typography variant="h6">{data.subheader}</Typography>
        </div>
        <div className={stylez.cardsSection}>
          <CardSection cards={cards} breadcrumb={data.header}></CardSection>
        </div>
      </div>
    </div>
  );
}

export default App;
