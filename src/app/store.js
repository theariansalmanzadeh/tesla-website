import { configureStore, createSlice } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

import { sectionDetails } from "../features/sectionDetails";

const initialState = {
  showMenu: false,
  showTitle: false,
  isMouseOn: false,
  positionMouse: 0,
  sectionsDisplay: [false, false, false],
  sectionObserves: [],
  sectionModel: 0,
};

const Slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    hideMenu(state, action) {
      state.showMenu = false;
    },
    showMenu(state, action) {
      state.showMenu = true;
    },
    interiorTitleState(state, action) {
      state.showTitle = action.payload;
    },
    sectionsDisplay(state, action) {
      if (action.payload.showState)
        state.sectionsDisplay[action.payload.indx] = true;
      else {
        state.sectionsDisplay[action.payload.indx] = false;
      }
    },
    mouseOn(state, action) {
      state.isMouseOn = action.payload.isMouseOn;
      state.positionMouse = action.payload.position;
    },
    changeHoverPosition(state, action) {
      state.positionMouse = action.payload.position;
    },
    findSection(state, action) {
      state.sectionModel = sectionDetails.findIndex(
        (model) => model.title === action.payload
      );
    },
  },
});

export const store = configureStore({
  reducer: Slice.reducer,
});

export const actions = Slice.actions;
