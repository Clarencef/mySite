import {
  GET_WANTED_LIST
} from './types';
import 'whatwg-fetch';

export default function getWantedList() {
  return dispatch => {
    fetch('../wanted_list.json')
      .then(res => {
        const people = res.data.map(person => {
          person.note = 'none';
          return preson;
        });
        dispatch(getUsersAsyc(people));
      });
  };
}

function getUsersAsyc(people) {
  return {
    type: GET_WANTED_LIST,
    payload: people
  };
}
