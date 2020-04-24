import React from 'react';
import { connect } from 'react-redux';
import { getNextNewsByPage } from '../actions';


const PageListContainerBase = (props) => {


  const handlePageClick = (pageNumber) => () => {
    props.getNextNewsByPage(pageNumber);
  }

  let pages = [];
  for(let i = 0; i <= props.pageNumbers; i++) {
    pages.push((<span key={i} onClick={handlePageClick(i)}> {i}</span>));
  }

  return (
    <React.Fragment>
      <div>{pages}</div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  pageNumbers: state.pageNumbers,
})

const mapDispatchToProps = {
  getNextNewsByPage,
};

const PageListContainer = connect(mapStateToProps, mapDispatchToProps)(PageListContainerBase);
export default PageListContainer;