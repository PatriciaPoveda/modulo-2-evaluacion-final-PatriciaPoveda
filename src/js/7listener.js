// const listenAddRemoveFavList = function () {
//   const favoritesClick = document.querySelectorAll(".favoritesList__item");
//   for (const favClick of favoritesClick) {
//     console.log(favorites);
//     favClick.addEventListener("click", addRemoveFavList);
//   }
// };
const listenFavList = function () {
  const seriesPaint = document.querySelectorAll(".js-serie");
  for (const serie of seriesPaint) {
    serie.addEventListener("click", paintFavList);
  }
};
btnSearch.addEventListener("click", getSerie);
getLocalStorage();