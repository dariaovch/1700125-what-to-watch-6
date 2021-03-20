import {movies} from "../mocks/films";

export const filterCrime = movies.filter((item) => item.genre === `Crime`);
export const filterDocumentary = movies.filter((item) => item.genre === `Documentary`);
export const filterDramas = movies.filter((item) => item.genre === `Drama`);
export const filterHorror = movies.filter((item) => item.genre === `Horror`);
export const filterFamily = movies.filter((item) => item.genre === `Kids & Family`);
export const filterScifi = movies.filter((item) => item.genre === `Sci-Fi`);
export const filterRomance = movies.filter((item) => item.genre === `Romance`);
export const filterThriller = movies.filter((item) => item.genre === `Thriller`);
