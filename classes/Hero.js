class Hero {
  constructor(
    name, appearance, location = [], direction = 'down',
    inventory = [], toolbar = [],
    skills = {
      stamina: 100,
      maxStamina: 100,
      health: 100,
      maxHealth: 100,
      hatchetLevel: 1,
      hatchetXP: 0,
      hatchetNext: 10
    },
    sounds = {
      mute: false,
      system: true,
      music: false,
      bgsfx: false,
      sfx: true,
    }) {
    this.name = name;
    this.location = location;
    this.appearance = appearance;
    this.direction = direction;
    this.inventory = inventory;
    this.toolbar = toolbar;
    this.skills = skills;
    this.sounds = sounds;
  }

  getStamina(){
    return this.skills.stamina;
  }
  setStamina(amt){
    this.skills.stamina += amt;
  }

  addToInventory(item) {
    let validate = false;
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name === item.name) {
        validate = true;
        this.inventory[i].qty += item.qty;
      }
    }

    if (!validate) {
      this.inventory.push(item);
    }
  }

  setSound(key, value) {
    this.sounds[key] = value;
  }

  addXP(skill, amt) {
    switch (skill) {
      case 'hatchet':
        this.skills.hatchetXP += amt;
        if (this.skills.hatchetXP >= this.skills.hatchetNext) {
          //level up
          this.skills.hatchetXP = 0;
          this.skills.hatchetNext *= 2;
          this.skills.hatchetLevel += 1;
          addStatusUpdate("Hatchet proficiency increased.")
        }
        break;
      default: break;
    }
  }

  getHatchetMultiplier() {
    switch (this.skills.hatchetLevel) {
      case 1: return 1;
      case 2: return 1.2;
      case 3: return 1.4;
      case 4: return 1.6;
      case 5: return 1.8;
      case 6: return 2;
      case 7: return 2.2;
      case 8: return 2.4;
      case 9: return 2.6;
      case 10: return 3;
      default: return 1;
    }
  }

  save() {
    try {
      localStorage.setItem("dovetail", JSON.stringify(this));
    } catch (error) {
      console.log('error saving:', error);
    }
  }

  delete() {
    localStorage.removeItem("dovetail");
  }

  getHeroCoordinates() {
    const heroCoordinates = [];
    for (let i = 0; i < this.location.length; i++) {
      for (let j = 0; j < this.location[i].length; j++) {
        if (this.location[i][j].includes('h')) {
          heroCoordinates.push(i, j)
        }
      }
    }
    return heroCoordinates;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(value) {
    try {
      this.direction = value;
    } catch (e) {
      console.log('error setting direction', e)
    }
  }

  setHeroCoordinates(coords) {
    try {
      this.location[coords[0]][coords[1]] += 'h';
    } catch (e) {
      console.log('error setting hero coordinates', e);
    }
  }

  removeHeroCoordinates(coords) {
    try {
      this.location[coords[0]][coords[1]] = this.location[coords[0]][coords[1]].replace('h', '');
    } catch (e) {
      console.log('error removing hero coordinates', e)
    }
  }

  walk(face) {
    let heroCoords = this.getHeroCoordinates();
    let row = heroCoords[0];
    let col = heroCoords[1];

    switch (face) {
      case 'down':
        this.setHeroCoordinates([row + 1, col]);
        break;
      case 'up':
        this.setHeroCoordinates([row - 1, col]);
        break;
      case 'left':
        this.setHeroCoordinates([row, col - 1]);
        break;
      case 'right':
        this.setHeroCoordinates([row, col + 1]);
        break;
      default: break
    }

    this.removeHeroCoordinates([row, col])
    this.save();
  }

  checkSpace(face) {
    let heroCoords = this.getHeroCoordinates();
    let row = heroCoords[0];
    let col = heroCoords[1];

    try {
      switch (face) {
        case 'down':
          if (this.location[row + 1][col].length === 1 && !this.location[row + 1][col].includes('w')) {
            return true;
          } else {
            return false;
          }
        case 'up':
          if (this.location[row - 1][col].length === 1 && !this.location[row - 1][col].includes('w')) {
            return true;
          } else {
            return false;
          }
        case 'left':
          if (this.location[row][col - 1].length === 1 && !this.location[row][col - 1].includes('w')) {
            return true
          } else {
            return false;
          }
        case 'right':
          if (this.location[row][col + 1].length === 1 && !this.location[row][col + 1].includes('w')) {
            return true
          } else {
            return false;
          }
        default: return false;
      }
    } catch (e) {
      console.log('error checking space', e)
      return false;
    }
  }

}