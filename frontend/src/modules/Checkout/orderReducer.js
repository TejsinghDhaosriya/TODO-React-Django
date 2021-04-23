function orderReducer(
    state = {
      currentTotal: { amount: 0, serviceTax: 0, sbCess: 0, kkCess: 0 },
      selectedSeats: [],
    },
    action
  ) {
    if (action.type === "UPDATE_AMOUNT") {
      let newState = Object.assign({}, state);
      newState.currentTotal.amount += action.payload;
      newState.currentTotal.serviceTax += 0.14 * action.payload;
      newState.currentTotal.sbCess += 0.005 * action.payload;
      newState.currentTotal.kkCess += 0.005 * action.payload;
      return newState;
    }
  
    if (action.type === "UPDATE_CURRENT_SELECTION") {
      let i = state.selectedSeats.findIndex(
        (x) =>
          x.showId === action.payload.showId && x.seat === action.payload.seat
      );
      if (i !== -1) {
        let newState = Object.assign({}, state);
        newState.selectedSeats.splice(i, 1);
        return newState;
      } else {
        let newState = Object.assign({}, state);
        newState.selectedSeats.push(action.payload);
        return newState;
      }
    }
  
    if (action.type === "RESET_CURRENT_ORDER") {
      let newState = Object.assign({}, state);
      newState.currentTotal = { amount: 0, serviceTax: 0, sbCess: 0, kkCess: 0 };
      newState.selectedSeats.length = 0;
      return newState;
    }
    return state;
  }

  export default orderReducer;