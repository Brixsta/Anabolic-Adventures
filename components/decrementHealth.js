const decrementHealth = (amt) => {
  gameState.health -= amt;
  const healthBar = document.querySelector(".health-bar");
  healthBar.style.height = gameState.health + "%";
};

export default decrementHealth;
