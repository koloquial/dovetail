function renderStamina() {
  let current = HERO.skills.stamina;
  let max = HERO.skills.maxStamina;

  let value = current / max;
  value *= 100;

  console.log('stamina', value)

  document.getElementById('stamina-bar').innerHTML = `
    <div 
      id='stamina-wedge' 
      class='stamina-wedge'
      style='width: ${value}px;'>
    </div>
    `

}