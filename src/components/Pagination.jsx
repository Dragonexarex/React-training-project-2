import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personPerPage: props.personPerPage,
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  showPreviousPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
  };

  showNextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { personPerPage, currentPage } = this.state;
    const { children } = this.props;
    const lastPerson = children.length;
    const indexOfLastPerson = currentPage * personPerPage;
    const indexOfFirstPerson = indexOfLastPerson - personPerPage;
    const individPersons = React.Children.map(children, (child, i) => {
      if (indexOfLastPerson > i && indexOfFirstPerson <= i) {
        return child;
      }
      return null;
    });
    return (
      <div className="list-container">
        {individPersons}
        <div>
          <button type="button" disabled={currentPage === 1} onClick={this.showPreviousPage}>
            Previous Page
          </button>
          <button type="button" disabled={lastPerson <= indexOfLastPerson} onClick={this.showNextPage}>
            Next Page
          </button>
        </div>
      </div>
    );
  }
}
export default Pagination;
