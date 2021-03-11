import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCharacters, filterCharacters, setFilters } from '../actions/index';
import CharacterCard from '../components/CharacterCard';
import Filter from '../components/Filter';
import Arrow from '../assets/arrow.svg';
import styles from '../assets/display.module.css';

class CharacterDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { filterCharacters, setFilters, filters } = this.props;
    const newFilters = { [e.target.name]: e.target.value, page: 1 };

    setFilters(newFilters);
    filterCharacters({ ...filters, ...newFilters });
  }

  handlePageChange(e) {
    const {
      getCharacters, filterCharacters, filters, setFilters, filters: { page: current },
    } = this.props;
    const page = e.target.alt === 'Next' ? current + 1 : current - 1;

    if (Object.values(filters).some(state => state !== '')) {
      filterCharacters({ ...filters, page });
    } else {
      getCharacters({ page });
    }

    setFilters({ page });
  }

  render() {
    // const { name } = this.props.filters;
    const { characters, filters: { name, page } } = this.props;

    return (
      <>
        <p>{page}</p>
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
            <Link to={`/character/${character.id}`} key={character.id} className={styles.link}>
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
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    page: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const mapState = state => ({
  characters: state.characters,
  filters: state.filters,
});

const mapDispatch = {
  getCharacters,
  filterCharacters,
  setFilters,
};

export default connect(mapState, mapDispatch)(CharacterDisplay);
