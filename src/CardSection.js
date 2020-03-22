import React from "react";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";

const stylez = {
  card: {
    margin: "10px",
    width: "300px",
    // float: "left",
    display: "inline-block",
    top: "0",
    textAlign: "centre"
  },
  breadcrumb: {
    width: "100vw",
    position: "sticky",
    top: "0",
    backgroundColor: "white"
  },
  cardSection: {},
  cardList: {
    backgroundColor: "lightgrey",
    marginLeft: "3%",
    marginBottom: "50px",
    width: "95%",
    borderRadius: "5px",
    overflowY: "auto"
  },
  cardText: {
    height: "100px",
    overflow: "auto",
    width: "100%"
  },
  cardIcon: {
    float: "left"
  },
  detailButton: {
    float: "right"
  },
  backButtonSection: {
    backgroundColor: "white",
    position: "fixed",
    bottom: "0px",
    width: "100vw",
    padding: "5px",
    height: "40px"
  }
};

class CardSection extends React.Component {
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
  openThisLink(hyperlink) {
    window.open(hyperlink, "_blank");
  }
  generateCardsList(cards) {
    const cardsList = cards.map(card => (
      <Card style={stylez.card} key={card.id} align="center">
        <CardContent>
          <Avatar style={stylez.cardIcon} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <Typography variant="h6">
            {card.header}
            {card.id}
          </Typography>
          <Typography style={stylez.cardText} variant="body1">
            {card.text}
          </Typography>
        </CardContent>
        <CardActions style={stylez.detailButton}>
          {card.hyperlinkText ? (
            <Button onClick={this.openThisLink.bind(this, card.hyperlink)}>
              {card.hyperlinkText}
            </Button>
          ) : (
            <Button disabled>Link</Button>
          )}

          {card.cards ? (
            <Button onClick={() => this.onDetailsClicked(card)}>Details</Button>
          ) : (
            <Button disabled>Details</Button>
          )}
        </CardActions>
      </Card>
    ));
    return <>{cardsList}</>;
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
    return <>{breadcrumb}</>;
  }
  render() {
    return (
      <div style={stylez.cardSection}>
        <div style={stylez.breadcrumb}>{this.generatebreadcrumb()}</div>
        <div style={stylez.cardList}>
          {this.generateCardsList(this.state.cards)}
        </div>
        <div style={stylez.backButtonSection}>
          {this.state.breadcrumb.length > 1 ? (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => this.onBackClicked()}
            >
              Back
            </Button>
          ) : (
            <Button variant="disabled">Back</Button>
          )}
        </div>
      </div>
    );
  }
}
export default CardSection;
