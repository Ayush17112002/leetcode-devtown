import { configureStore } from "@reduxjs/toolkit";

import { codeReducer } from "../features/code/index";

export default store = configureStore({ reducer: { code: codeReducer } });
