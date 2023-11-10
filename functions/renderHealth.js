function renderHealth() {
  let current = HERO.skills.health;
  let max = HERO.skills.maxHealth;

  let value = current / max;
  value *= 100;

  document.getElementById('health-bar').innerHTML = `
    <div id='health-wedge' class='health-wedge' style='width: ${value}px;'></div>
    `
}