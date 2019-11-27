import { compose, map, take } from "ramda";

export const ADD_STARTUP = "ADD_STARTUP";
export const ADDING_STARTUP = "ADDING_STARTUP";
export const GET_STARTUPS = "GET_STARTUPS";
export const SUCCESS_ADDING_STARTUP = "SUCCESS_ADDING_STARTUP";
export const LOADING_STARTUPS = "LOADING_STARTUPS";
export const SUCCESS_LOADING_STARTUPS = "SUCCESS_LOADING_STARTUPS";
export const LOAD_STARTUP = "LOAD_STARTUP";

export function addStartup(companyName) {
  return { type: ADD_STARTUP, payload: companyName };
}

function getStartups() {
  console.log(fetch("http://localhost:2688/startup"));
  
  return fetch("http://localhost:2688/startup");
}

export function addStartupListToAPI(companyName) {
  return function(dispatch) {
    dispatch({ type: ADDING_STARTUP });

    return addStartup(companyName)
      .then(result => result.json())
      .then(newCompany => {
        dispatch({
          type: ADD_STARTUP,
          payload: {
            text: newCompany.name,
            employees: newCompany.employees,
            location: newCompany.location,
            image: newCompany.image
          }
        });
      });
    dispatch(SUCCESS_ADDING_STARTUP);
  };
}

export function getStartupsFromAPI(limit) {
  return function(dispatch) {
    dispatch({ type: LOADING_STARTUPS });

    return getStartups()
      .then(result => result.json())
      .then(company => {
        dispatch({
          type: LOAD_STARTUP,
          payload: compose(
            map(x => ({
              text: company.name,
              employees: company.employees,
              location: company.location,
              image: company.image
            }), 
            take(10))
          )(company)
        });
      });
    dispatch(SUCCESS_LOADING_STARTUPS);
  };
}
