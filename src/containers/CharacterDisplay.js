import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateCharacters, setFilters } from '../actions/index';
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
    const { updateCharacters, setFilters, filters } = this.props;
    const newFilters = { [e.target.name]: e.target.value, page: 1 };

    setFilters(newFilters);
    updateCharacters({ ...filters, ...newFilters });
  }

  handlePageChange(e) {
    const {
      updateCharacters, filters, setFilters, filters: { page: current }, characters: { count },
    } = this.props;
    const page = e.target.alt === 'Next' ? current + 1 : current - 1;

    if (page >= 1 && page <= count) {
      setFilters({ page });
      updateCharacters({ ...filters, page });
    }
  }

  render() {
    const { characters: { all }, filters: { name } } = this.props;

    return (
      <>
        <Filter
          name={name}
          handleChange={this.handleFilterChange}
        />
        <button type="button" className={`${styles.btnPrev} ${styles.arrowBtn}`} onClick={e => this.handlePageChange(e)}>
          <img src={Arrow} alt="Previous" className={styles.arrow} />
        </button>
        <button type="button" className={`${styles.btnNext} ${styles.arrowBtn}`} onClick={e => this.handlePageChange(e)}>
          <img src={Arrow} alt="Next" className={`${styles.arrow} ${styles.next}`} />
        </button>
        <div className={styles.container}>
          {all.map(character => (
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
  characters: PropTypes.shape({
    count: PropTypes.number.isRequired,
    all: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  updateCharacters: PropTypes.func.isRequired,
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
  updateCharacters,
  setFilters,
};

export default connect(mapState, mapDispatch)(CharacterDisplay);
