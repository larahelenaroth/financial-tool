import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getCards } from '../../actions/finActions';
// COMPONENTS
import CardContent from '../layout/CardContent';
// CSS
import MediaQuery from 'react-responsive';

class Home extends Component {
  componentDidMount() {
    this.props.getCards();
  }
  render() {
    const { cards } = this.props;
    return (
      <div className="d-flex justify-content-center flex-wrap">
        <MediaQuery query="(min-device-width: 1025px)">
          {cards.map(card => (
            <CardContent key={card.id} content={card} width="30%" />
          ))}
        </MediaQuery>
        <MediaQuery query="(min-width: 768px) and (max-width: 1024px)">
          {cards.map(card => (
            <CardContent key={card.id} content={card} width="45%" />
          ))}
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          {cards.map(card => (
            <CardContent key={card.id} content={card} width="100%" />
          ))}
        </MediaQuery>
      </div>
    );
  }
}

Home.propTypes = {
  cards: PropTypes.array.isRequired,
  //EVENTS
  getCards: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cards: state.fin.cards
});

export default connect(
  mapStateToProps,
  { getCards }
)(Home);
