import React, { PureComponent } from "react";
import { selectSeat, updateAmount } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";

class Shows extends PureComponent {
  seatSelector = (e, showId) => {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      if (e.target.closest(".row").classList.contains("platinum")) {
        this.props.updateAmount(-320);
      } else if (e.target.closest(".row").classList.contains("gold")) {
        this.props.updateAmount(-280);
      } else if (e.target.closest(".row").classList.contains("silver")) {
        this.props.updateAmount(-240);
      }
    } else {
      e.target.classList.add("selected");
      if (e.target.closest(".row").classList.contains("platinum")) {
        this.props.updateAmount(320);
      } else if (e.target.closest(".row").classList.contains("gold")) {
        this.props.updateAmount(280);
      } else if (e.target.closest(".row").classList.contains("silver")) {
        this.props.updateAmount(240);
      }
    }
    this.props.selectSeat({
      showId: showId,
      seat: e.target.innerHTML,
    });
  };

  generateRow = (r, name, show) => {
    let row = [];
    //blank spaces
    for (let i = 1; i < r[0]; i++) {
      row.push(<div key={name + i} className="seat empty"></div>);
    }
    for (let j = r[0]; j <= r[1]; j++) {
      let isBooked =
        show.booked.findIndex((x) => x === name + j) !== -1 ? true : false;
      let isSelected =
        this.props.selectedSeats.findIndex(
          (x) => x.seat === name + j && x.showId === show.id
        ) !== -1
          ? true
          : false;
      row.push(
        <div
          key={name + j}
          className={`seat ${isBooked ? "booked" : ""} ${
            isSelected ? "selected" : ""
          }`}
          onClick={!isBooked ? (e) => this.seatSelector(e, show.id) : undefined}
        >
          {name + j}
        </div>
      );
    }
    return row;
  };

  generateLayout = (showId) => {
    const { shows } = this.props;
    let show = shows.find((x) => x.id === parseInt(showId));
    let layout = [];
    layout.push(
      <div key="platinum" className="row platinum">
        {this.generateRow(show.rowA, "A", show)}
      </div>
    );
    layout.push(
      <div key="gold" className="row gold">
        {this.generateRow(show.rowB, "B", show)}
      </div>
    );
    layout.push(
      <div key="silver" className="row silver">
        {this.generateRow(show.rowC, "C", show)}
      </div>
    );

    return layout;
  };

  render() {
    let showId = queryString.parse(this.props.location.search).id;
    return (
      <>
        <Link to="/">
          <button className="book">Go Back</button>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Select Show: </h1>

          <Link to="/show?id=1">
            <button style={{ marginLeft: "0.3rem" }}>Show 1</button>
          </Link>
          <br />
          <Link to="/show?id=2">
            <button style={{ marginLeft: "0.3rem" }}>Show 2</button>
          </Link>
          <br />
          <Link to="/show?id=3">
            <button style={{ marginLeft: "0.3rem" }}>Show 3</button>
          </Link>
          <br />
        </div>
        <div className="layout">
          <h2>Show {showId}</h2>
          <h3>Select Seats and Proceed for Payments</h3>
          {this.generateLayout(showId)}
        </div>
        <div className="footer">
          <Link to="/">
            <button className="book">Other Shows </button>
          </Link>
          <Link to="/checkout">
            <button className="book">Proceed Next</button>
          </Link>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows.showList,
    selectedSeats: state.currentOrder.selectedSeats,
    currentTotal: state.currentOrder.currentTotal,
  };
}

function mapDispatchToState(dispatch) {
  return {
    selectSeat: (seat) => dispatch(selectSeat(seat)),
    updateAmount: (amt) => dispatch(updateAmount(amt)),
  };
}

export default connect(mapStateToProps, mapDispatchToState)(Shows);
