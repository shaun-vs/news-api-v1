import React from 'react';
import { connect } from 'react-redux';



const NewsResultsContainerBase = (props) => {


  const results = props.newsResults && props.newsResults.map((result, index) => {
    return (
      <div key={index}>{result.title}</div>
    )
  })

  return (
    <React.Fragment>
      <div>{results}</div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  newsResults: state.newsResults,
})

const NewsResultsContainer = connect(mapStateToProps, null)(NewsResultsContainerBase);
export default NewsResultsContainer;