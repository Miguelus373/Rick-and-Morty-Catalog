import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCharacters from '../actions/index';
import CharacterCard from '../components/CharacterCard';

class CharacterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e) {
    const { getCharacters } = this.props;
    const page = e.target.innerHTML === 'Next' ? 1 : -1;

    this.setState(prev => {
      getCharacters(prev.page + page);
      return { page: prev.page + page };
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
          <CharacterCard
            key={character.id}
            name={character.name}
            status={character.status}
            image={character.image}
          />
        ))}
        <br />
        <button type="button" onClick={e => this.handlePageChange(e)}>
          Previous
        </button>
        <button type="button" onClick={e => this.handlePageChange(e)}>
          Next
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
