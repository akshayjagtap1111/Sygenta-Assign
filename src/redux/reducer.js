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
      let id = payload - 1;
      let first_arr = state.firstArr;
      let second_arr = state.secondArr;

      for (let i = 0; i < first_arr.length; i++) {
        if (i == id) {
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
      let el = payload;
      let firstarr = state.firstArr;
      let secondarr = state.secondArr;

      for (let i = 0; i < secondarr.length; i++) {
        if (el.id == secondarr[i].id) {
          let poped = secondarr.splice(i, 1);
          firstarr.push(poped[0]);
          break;
        }
      }
      firstarr.sort((a, b) => a.id - b.id);
      return {
        ...state,
        firstArr: firstarr,
        secondArr: secondarr,
      };

    default:
      return state;
  }
};
