import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
  resetCurrentOrder,
  updateTotalRevenue,
  updateBookings,
} from "../../actions";
import Amounts from "../../components/Amounts";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Checkout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleClick = () => {
    this.setState({ open: true });
  };
  bookSeats = () => {
    this.props.updateTotalRevenue(this.props.currentTotal);
    this.props.updateBookings(this.props.selectedSeats);
    this.props.resetCurrentOrder();
    this.handleClick();
  };

  handleClose = (event, reason) => {
    this.setState({ open: false });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="payments">
        <Snackbar
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Ticket is Successfully Booked!
          </Alert>
        </Snackbar>
        <h3>Current Order Details</h3>
        {this.props.currentTotal.amount !== 0 ? (
          <>
            <Amounts amt={this.props.currentTotal} />
            <Link to="/">
              <button className="book" style={{ marginRight: "1rem" }}>
                Go Back
              </button>
            </Link>
            <button onClick={this.bookSeats}>Pay and Book Now</button>
          </>
        ) : (
          <>
            {this.state.open ? (
              "  Ticket is Successfully Booked! "
            ) : (
              <>
                <p className="error">No Seats Selected!</p>
                <Link to="/">
                  <button>Please Select Seats</button>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSeats: state.currentOrder.selectedSeats,
    currentTotal: state.currentOrder.currentTotal,
  };
}

function mapDispatchToState(dispatch) {
  return {
    resetCurrentOrder: () => dispatch(resetCurrentOrder()),
    updateTotalRevenue: (amt) => dispatch(updateTotalRevenue(amt)),
    updateBookings: (arr) => dispatch(updateBookings(arr)),
  };
}

export default connect(mapStateToProps, mapDispatchToState)(Checkout);
