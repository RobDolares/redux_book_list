import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div className="getStarted">Select a book to get started!</div>
      )
    }
    return (
      <div className="col-md-6">
        <h3> Details for: </h3>
        <h4 className="title"><em>{this.props.book.title}</em></h4>
        <div>{this.props.book.pages} pages</div>
        <div>Author: {this.props.book.author}</div>
        <div>Price: ${this.props.book.price} USD</div>
        <div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div>Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
