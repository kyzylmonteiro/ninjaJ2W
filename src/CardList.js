import React from "react";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";

const stylez = {
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
  },
  buttonSet: {
    float: "right"
  }
};

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: props.cards };
    this.onDetailsClicked = this.onDetailsClicked.bind(this);
    this.generateCardsList = this.generateCardsList.bind(this);
  }
  onDetailsClicked(card) {
    this.setState({ cards: card.cards });
  }
  generateCardsList(cards) {
    const cardsList = cards.map(card => (
      <Card style={stylez.card} key={card.id} align="center">
        <CardContent>
          <Typography variant="h6">
            {card.header}
            {card.id}
          </Typography>
          {card.text}
          {card.cards ? (
            <Button onClick={() => this.onDetailsClicked(card)}>Details</Button>
          ) : (
            <Button variant="disabled">Details</Button>
          )}
        </CardContent>
        <CardActions style={stylez.buttonSet}>
          <Button>Back</Button>
        </CardActions>
      </Card>
    ));
    return <div>{cardsList}</div>;
  }
  render() {
    return <div>{this.generateCardsList(this.state.cards)}</div>;
  }
}
export default CardList;
