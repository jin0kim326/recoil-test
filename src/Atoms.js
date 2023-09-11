import { atom } from "recoil";

export const userToken = atom({
    key: 'userToken', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });
