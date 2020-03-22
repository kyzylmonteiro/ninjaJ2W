import React from "react";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";

const stylez = {
  app: {
    backgroundColor: "lightgrey",
    height: "100%",
    margin: "0"
  },
  card: {
    margin: "10px",
    width: 275,
    float: "left",
    textAlign: "centre"
  },
  cardSection: {
    width: "100vw",
    height: "65vh",
    textAlign: "centre",
    overflowY: "scroll"
  },
  buttonSet: {
    float: "right"
  }
};

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      breadcrumb: [props.breadcrumb],
      links: [props.cards]
    };
    this.onDetailsClicked = this.onDetailsClicked.bind(this);
    this.generateCardsList = this.generateCardsList.bind(this);
    this.generatebreadcrumb = this.generatebreadcrumb.bind(this);
  }
  onDetailsClicked(card) {
    this.state.breadcrumb.push(card.header);
    this.state.links.push(this.state.cards);
    this.setState({
      cards: card.cards
    });
  }
  onBackClicked() {
    this.state.breadcrumb.pop();
    this.setState({
      cards: this.state.links[this.state.links.length - 1]
    });
    this.state.links.pop();
  }
  onBreadcrumbClicked(indexOfBrdC) {
    while (this.state.breadcrumb.length !== indexOfBrdC + 1) {
      this.state.breadcrumb.pop();
      this.setState({
        cards: this.state.links[this.state.links.length - 1]
      });
      this.state.links.pop();
    }
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
        </CardContent>
        <CardActions style={stylez.buttonSet}>
          {card.cards ? (
            <Button onClick={() => this.onDetailsClicked(card)}>Details</Button>
          ) : (
            <Button variant="disabled">Details</Button>
          )}
        </CardActions>
      </Card>
    ));
    return <div style={stylez.cardSection}>{cardsList}</div>;
  }
  generatebreadcrumb() {
    const breadcrumb = this.state.breadcrumb.map(brdC => (
      <>
        <Button
          onClick={() =>
            this.onBreadcrumbClicked(this.state.breadcrumb.indexOf(brdC))
          }
          key={this.state.breadcrumb.indexOf(brdC)}
        >
          {brdC}
        </Button>
        {">"}
      </>
    ));
    return <div>{breadcrumb}</div>;
  }
  render() {
    return (
      <div>
        {this.generatebreadcrumb()}
        <div>{this.generateCardsList(this.state.cards)}</div>
        {this.state.breadcrumb.length > 1 ? (
          <Button onClick={() => this.onBackClicked()}>Back</Button>
        ) : (
          <Button variant="disabled">Back</Button>
        )}
      </div>
    );
  }
}
export default CardList;
