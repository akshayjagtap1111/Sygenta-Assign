import { FIRSTFILL, PUSH, REGAIN } from "./action";

const initstate = {
  firstArr: [],
  secondArr: [],
};

export const arrReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case FIRSTFILL:
      return {
        ...state,
        firstArr: [...payload],
      };

    case PUSH:
      let id = payload.id;
      let first_arr = state.firstArr;
      let second_arr = state.secondArr;

      for (let i = 0; i < first_arr.length; i++) {
        if (first_arr[i].id == id) {
          let poped = first_arr.splice(i, 1);
          second_arr.push(poped[0]);
          break;
        }
      }
      return {
        ...state,
        firstArr: first_arr,
        secondArr: second_arr,
      };

    case REGAIN:
        return state;

    default:
        return state;
  }
};
