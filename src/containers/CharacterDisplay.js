import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCharacters from '../actions/index';

class CharacterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest() {
    const { getCharacters } = this.props;

    this.setState(prev => {
      getCharacters(prev.page);
      return { page: prev.page + 1 };
    });
  }

  render() {
    const { page } = this.state;
    const { characters } = this.props;

    return (
      <div>
        <p>
          page
          {page}
        </p>
        {characters.map(character => (
          <span key={character.id}>
            {character.name}
            {' '}
            |
            {' '}
          </span>
        ))}
        <br />
        <button type="button" onClick={this.handleRequest}>
          Show More
        </button>
      </div>
    );
  }
}

CharacterDisplay.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCharacters: PropTypes.func.isRequired,
};

const mapState = state => ({
  characters: state.characterReducer,
});

const mapDispatch = {
  getCharacters,
};

export default connect(mapState, mapDispatch)(CharacterDisplay);
