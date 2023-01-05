const createTileTitles = () => {
  for (let i = 0; i < 25; i++) {
    const tiles = document.querySelectorAll(".tile");
    const tileTitle = document.createElement("div");
    tileTitle.classList.add("tile-title");

    // only append titles on outter-most tiles
    if (
      i !== 6 &&
      i !== 7 &&
      i !== 8 &&
      i !== 11 &&
      i !== 12 &&
      i !== 13 &&
      i !== 16 &&
      i !== 17 &&
      i !== 18
    ) {
      tiles[i].appendChild(tileTitle);

      // apply text to Synthohl Scenarios
      if (tiles[2].children[0]) {
        tiles[2].children[0].innerHTML = "Steroid Scenarios";
      }
      if (tiles[10].children[0]) {
        tiles[10].children[0].innerHTML = "Steroid Scenarios";
      }
      if (tiles[14].children[0]) {
        tiles[14].children[0].innerHTML = "Steroid Scenarios";
      }
      if (tiles[22].children[0]) {
        tiles[22].children[0].innerHTML = "Steroid Scenarios";
      }

      // apply text Drink Goggin's Sweat tile
      if (tiles[0].children[0]) {
        tiles[0].children[0].innerHTML = "Drink Goggin's Sweat";
      }

      // apply text to Fake Natty tile
      if (tiles[1].children[0]) {
        tiles[1].children[0].innerHTML = "Labeled Fake Natty";
      }

      // apply text to Athlean-X Magic Show tile
      if (tiles[3].children[0]) {
        tiles[3].children[0].innerHTML = "Athlean-X Magic Show";
      }

      // apply text to Dirty Bulk Goes Wrong tile
      if (tiles[4].children[0]) {
        tiles[4].children[0].innerHTML = "Dirty Bulk Goes Wrong";
      }

      // apply text to Arnold Hires Your Mom tile
      if (tiles[5].children[0]) {
        tiles[5].children[0].innerHTML = "Arnold Hires Your Mom";
      }

      // apply text to Train w/ Larry Wheels tile
      if (tiles[9].children[0]) {
        tiles[9].children[0].innerHTML = "Train w/ Larry Wheels";
      }

      // apply text to DMT w/ Joe Rogan tile
      if (tiles[15].children[0]) {
        tiles[15].children[0].innerHTML = "DMT w/ Joe Rogan";
      }

      // apply text to Hulkster's Proposal tile
      if (tiles[19].children[0]) {
        tiles[19].children[0].innerHTML = "Hulkster's Proposal";
      }

      // apply text Tommy Tren Collab tile
      if (tiles[20].children[0]) {
        tiles[20].children[0].innerHTML = "Tommy Tren Collab";
      }

      // apply text to 8 Hour Arms tile
      if (tiles[21].children[0]) {
        tiles[21].children[0].innerHTML = "8 Hour Arms";
      }

      // apply text to Low on Pre-Workout tile
      if (tiles[23].children[0]) {
        tiles[23].children[0].innerHTML = "Low on Pre-Workout";
      }

      // apply text to Mom's Basement tile
      if (tiles[24].children[0]) {
        tiles[24].children[0].innerHTML = "Mom's Basement";
      }
    }
  }
};

export default createTileTitles;
