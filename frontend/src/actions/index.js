export function selectSeat(seat) {
  return {
    type: "UPDATE_CURRENT_SELECTION",
    payload: seat,
  };
}

export function updateAmount(amt) {
  return {
    type: "UPDATE_AMOUNT",
    payload: amt,
  };
}

export function resetCurrentOrder() {
  return {
    type: "RESET_CURRENT_ORDER",
  };
}

export function updateTotalRevenue(amt) {
  return {
    type: "UPDATE_REVENUE",
    payload: amt,
  };
}

export function updateBookings(arr) {
  return {
    type: "UPDATE_BOOKINGS",
    payload: arr,
  };
}
