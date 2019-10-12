import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getNewsBySearch } from '../actions';


const NewsSearchContainerBase = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchClick = (e) => (term) => {
    props.getNewsBySearch(searchTerm);
  }

  return (
    <React.Fragment>
      <input type="text" onChange={handleInputChange} value={searchTerm} />
      <button onClick={handleSearchClick()}>Search</button>
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  getNewsBySearch,
};

const NewsSearchContainer = connect(null, mapDispatchToProps)(NewsSearchContainerBase);
export default NewsSearchContainer;