import React from 'react';
import { connect } from 'react-redux';
import { getNextNewsByPage } from '../actions';


const PageListContainerBase = (props) => {


  const handlePageClick = (pageNumber) => () => {
    props.getNextNewsPage(pageNumber);
  }

  const pages = props && props.pageNumbers && props.pageNumbers.map((pageNum) => {
    return (<div key={pageNum} onClick={(pageNum) => handlePageClick(pageNum)}> {pageNum}</div>)
  })

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