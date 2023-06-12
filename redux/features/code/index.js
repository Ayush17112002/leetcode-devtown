import { createSlice, configureStore } from "@reduxjs/toolkit";

//on beginning of test initialize the redux store with problems
//load initialState with localStorage object
const initialState = {
  collection: {},
};

const codeSlice = createSlice({
  name: "code",
  initialState: initialState,
  reducers: {
    //set problem
    //update code
    //store results having max score for a particular problem
  },
});

const codeActions = codeSlice.actions;
const codeReducer = codeSlice.reducer;
module.exports = { codeActions, codeReducer };
