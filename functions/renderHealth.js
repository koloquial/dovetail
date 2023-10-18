function renderHealth() {
  let current = HERO.skills.health;
  let max = HERO.skills.maxHealth;

  let value = current / max;
  value *= 100;
  console.log('health', value)

  document.getElementById('health-bar').innerHTML = `
    <div id='health-wedge' class='health-wedge' style='background: linear-gradient(to bottom, rgba(255, 0, 0, .5), rgba(255, 0, 0, .3)); width: ${value}px;'></div>
    `
}