let initialState = {
    showList: [
      {
        id: 1,
        rowA: [1, 9],
        rowB: [1, 6],
        rowC: [2, 6],
        booked: [],
      },
      {
        id: 2,
        rowA: [1, 9],
        rowB: [2, 6],
        rowC: [1, 4],
        booked: [],
      },
      {
        id: 3,
        rowA: [1, 8],
        rowB: [2, 6],
        rowC: [1, 4],
        booked: [],
      },
    ],
  };
  

function showsReducer(state = initialState, action){
    if (action.type === "UPDATE_BOOKINGS") {
      let newState = Object.assign({}, state);
      action.payload.forEach((obj) => {
        let show = newState.showList.find((x) => x.id === parseInt(obj.showId));
        show.booked.push(obj.seat);
      });
      return newState;
    }
    return state;
  }

 
export default showsReducer;