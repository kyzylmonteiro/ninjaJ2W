import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  app: {
    backgroundColor: "lightgrey",
    height: "100%"
  },
  card: {
    marginRight: "10px",
    marginLeft: "10px",
    width: 275,
    float: "left",
    textAlign: "centre"
  }
});

function App(props) {
  const stylez = useStyles();
  let data = props.data;
  let cards = data.cards;

  var cardsList = cards.map(card => (
    <Card className={stylez.card} key={card.id}>
      <CardContent>
        <h4>
          {card.header}
          {card.id}
        </h4>
        {card.text}
        <div>Details</div>
      </CardContent>
      <CardActions>
        <Button>Back</Button>
      </CardActions>
    </Card>
  ));

  return (
    <div className="App" className={stylez.app}>
      <h1>{data.header}</h1>
      <h3>{data.subheader}</h3>
      {cardsList}
    </div>
  );
}

export default App;
