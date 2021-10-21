import {atom} from "recoil";

/**
 *
 * @type {RecoilState<boolean>}
 */
export const backgroundState = atom({
    key: "background-state",
    default: false
})