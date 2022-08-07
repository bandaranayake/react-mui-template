import { startLoading } from "./user.slice";

export const startLoading = () => (dispatch, getState) => {
  dispatch(startLoading());
};
