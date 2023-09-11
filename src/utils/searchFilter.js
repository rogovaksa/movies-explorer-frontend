import { MAX_SHORTS_DURATION } from '../constants/constants';

export default function searchFilter(array, query, short) {
  if (!array) {
    return [];
  }

  let filtered = [...array];

  if (query) {
    let filteredRU = filtered.filter((element) => element.nameRU
      .toLowerCase()
      .includes(query.toLowerCase()));
    let filteredEN = filtered.filter((element) => element.nameEN
      .toLowerCase()
      .includes(query.toLowerCase()));
    const filteredAll = [].concat(filteredRU, filteredEN);
    filtered = [...new Map(filteredAll.map((m) => [m.id, m])).values()];
  }

  if (short) {
    return filtered.filter((element) => element.duration <= MAX_SHORTS_DURATION);
  }

  return filtered;
}
