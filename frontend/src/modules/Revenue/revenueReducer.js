function revenueReducer(
  state = { sales: { amount: 0, serviceTax: 0, sbCess: 0, kkCess: 0 } },
  action
) {
  if (action.type === "UPDATE_REVENUE") {
    let newState = Object.assign({}, state);
    newState.sales.amount += action.payload.amount;
    newState.sales.serviceTax += action.payload.serviceTax;
    newState.sales.sbCess += action.payload.sbCess;
    newState.sales.kkCess += action.payload.kkCess;
    return newState;
  }
  return state;
}

export default revenueReducer;
