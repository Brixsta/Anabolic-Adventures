const paintTiles = () => {
  const tiles = document.querySelectorAll(".tile");

  // Drink Goggin's Sweat tile
  tiles[0].style.backgroundImage = "url('images/goggins.png')";

  // Athlean-X Magic Show tile
  tiles[3].style.backgroundImage = "url('images/athlean.png')";

  // Dirty Bulk Goes Wrong tile
  tiles[4].style.backgroundImage = "url('images/doughboy.png')";

  // Arnold Hires Your Mom tile
  tiles[5].style.backgroundImage = "url('images/arnold.png')";

  // Larry Wheels tile
  tiles[9].style.backgroundImage = "url('images/larry.png')";

  // Hulkster's blessing tile
  tiles[19].style.backgroundImage = "url('images/hulk.png')";

  // Tommy Tren tile
  tiles[20].style.backgroundImage = "url('images/tren.png')";

  // 8 Hour Arms tile
  tiles[21].style.backgroundImage = "url('images/greg.png')";

  // Mom's basement tile
  tiles[24].style.backgroundImage = "url('images/basement.png')";

  // Steroid Scenarios tile
  tiles[2].style.backgroundImage = "url('images/syringe.png')";
  tiles[10].style.backgroundImage = "url('images/syringe.png')";
  tiles[14].style.backgroundImage = "url('images/syringe.png')";
  tiles[22].style.backgroundImage = "url('images/syringe.png')";

  // Pre-Workout tile
  tiles[23].style.backgroundImage = "url('images/preworkout.png')";

  //Joe Rogan tile
  tiles[15].style.backgroundImage = "url('images/rogan.png')";

  // Fake Natty tile
  tiles[1].style.backgroundImage = "url('images/fake-natty.png')";
};

export default paintTiles;
