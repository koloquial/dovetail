function renderStamina() {
  let current = HERO.skills.stamina;
  let max = HERO.skills.maxStamina;


  document.getElementById('stamina-bar').innerHTML = `
    <div id='stamina-wedge' class='stamina-wedge'></div>
  `

}