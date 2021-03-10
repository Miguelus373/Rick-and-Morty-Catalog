import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCharacters, filterCharacters } from '../actions/index';
import CharacterCard from '../components/CharacterCard';
import Filter from '../components/Filter';
import Arrow from '../assets/arrow.svg';
import styles from '../assets/display.module.css';

class CharacterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      status: '',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { filterCharacters } = this.props;
    this.setState(
      { [e.target.name]: e.target.value, page: 1 },
      () => filterCharacters(this.state),
    );
  }

  handlePageChange(e) {
    const { getCharacters, filterCharacters } = this.props;
    const page = e.target.alt === 'Next' ? 1 : -1;

    this.setState(
      prev => ({ page: prev.page + page }),
      () => {
        if (Object.values(this.state).some(state => state !== '')) {
          filterCharacters(this.state);
        } else {
          const { page } = this.state;
          getCharacters({ page });
        }
      },
    );
  }

  render() {
    const { page, name } = this.state;
    const { characters } = this.props;

    return (
      <>
        <p>
          page
          {page}
        </p>
        <Filter
          name={name}
          handleChange={this.handleFilterChange}
          handleSubmit={this.handleFilterSubmit}
        />
        <button type="button" className={`${styles.btnPrev} ${styles.arrowBtn}`} onClick={e => this.handlePageChange(e)}>
          <img src={Arrow} alt="Previous" className={styles.arrow} />
        </button>
        <button type="button" className={`${styles.btnNext} ${styles.arrowBtn}`} onClick={e => this.handlePageChange(e)}>
          <img src={Arrow} alt="Next" className={`${styles.arrow} ${styles.next}`} />
        </button>
        <div className={styles.container}>
          {characters.map(character => (
            <Link to={`/character/${character.id}`} key={character.id}>
              <CharacterCard
                name={character.name}
                status={character.status}
                image={character.image}
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
}

CharacterDisplay.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCharacters: PropTypes.func.isRequired,
  filterCharacters: PropTypes.func.isRequired,
};

const mapState = state => ({
  characters: state.characters,
});

const mapDispatch = {
  getCharacters,
  filterCharacters,
};

export default connect(mapState, mapDispatch)(CharacterDisplay);
