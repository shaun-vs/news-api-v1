import React from 'react';
import { connect } from 'react-redux';
import { getNewsBySearch } from '../actions';


const NewsResultsContainerBase = (props) => {


  return (
    <React.Fragment>
      <div>{props.newsResults}</div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  newsResults: state.newsResults,
})

const NewsResultsContainer = connect(mapStateToProps, null)(NewsResultsContainerBase);
export default NewsResultsContainer;