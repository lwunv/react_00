import { NavigateFunction } from "react-router-dom";
import type { Location } from "@remix-run/router";

// custom history object to allow navigation outside react components
export type ihistory = {
    navigate: NavigateFunction;
    location: Location;
};

export const history: ihistory = {
    navigate: '' as unknown as NavigateFunction,
    location: '' as unknown as Location
}