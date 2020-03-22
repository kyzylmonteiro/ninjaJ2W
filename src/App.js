import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardList from "./CardList";

const useStyles = makeStyles({
  root: {
    color: "red"
  },
  app: {
    backgroundColor: "lightgrey",
    height: "100vh",
    textAlign: "center"
  },
  cardsSection: {
    marginTop: "35px"
  }
});

function App(props) {
  const stylez = useStyles();
  let data = props.data;
  let cards = data.cards;
  return (
    <div className="App">
      <div className={stylez.app}>
        <Typography variant="h2">{data.header}</Typography>
        <Typography variant="h5">{data.subheader}</Typography>
        <div className={stylez.cardsSection}>
          <CardList cards={cards} breadcrumb={data.header}></CardList>
        </div>
      </div>
    </div>
  );
}

export default App;
