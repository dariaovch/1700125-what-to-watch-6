import {filterCrime, filterDocumentary, filterDramas, filterFamily, filterHorror, filterRomance, filterScifi, filterThriller} from "../utils/filterMovies";

export const ActionType = {
  FILTER_CRIME: `filterMovies/filterCrime`,
  FILTER_DOCUMENTARY: `filterMovies/filterDocumentary`,
  FILTER_DRAMAS: `filterMovies/filterDramas`,
  FILTER_HORROR: `filterMovies/filterHorror`,
  FILTER_FAMILY: `filterMovies/filterFamily`,
  FILTER_SCIFI: `filterMovies/filterScifi`,
  FILTER_ROMANCE: `filterMovies/filterRomance`,
  FILTER_THRILLER: `filterMovies/filterThriller`,
  RESET_LIST: `filterMovies/resetList`,
};

export const ActionCreator = {
  filterCrime: () => ({
    type: ActionType.FILTER_CRIME,
    payload: filterCrime,
  }),
  filterDocumentary: () => ({
    type: ActionType.FILTER_DOCUMENTARY,
    payload: filterDocumentary,
  }),
  filterDramas: () => ({
    type: ActionType.FILTER_DRAMAS,
    payload: filterDramas,
  }),
  filterHorror: () => ({
    type: ActionType.FILTER_HORROR,
    payload: filterHorror,
  }),
  filterFamily: () => ({
    type: ActionType.FILTER_FAMILY,
    payload: filterFamily,
  }),
  filterScifi: () => ({
    type: ActionType.FILTER_SCIFI,
    payload: filterScifi,
  }),
  filterRomance: () => ({
    type: ActionType.FILTER_ROMANCE,
    payload: filterRomance,
  }),
  filterThriller: () => ({
    type: ActionType.FILTER_THRILLER,
    payload: filterThriller,
  }),
  listReset: () => ({
    type: ActionType.RESET_LIST,
  })
};

