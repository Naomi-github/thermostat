let current_temperature = 20
let power_saver = ''


class Thermostat {
  getTemperature() {
    while (power_saver === 'on') {
      if (current_temperature > 25) {
        current_temperature = 25
      }
      else {
        return current_temperature
      }
    }
    while (power_saver === 'off') {
      if (current_temperature > 32) {
        current_temperature = 32
      }
      else {
        return current_temperature
      }
    }

    return current_temperature
  }

  up() {
    current_temperature += 1
    return current_temperature
  }

  down() {
    current_temperature -= 1
    return current_temperature
  }

  setPowerSavingMode(saver_on) {
    if (saver_on === false) {
      power_saver = 'off'
        return (current_temperature) && (false)
    }
    else if (saver_on === true) {
      power_saver = 'on'
      return (current_temperature) && (true)
  }
  else {
    return 'The power saver mode has not been set'
  }
}

  reset() {
    current_temperature = 20
  }
}

// thermostat = new Thermostat()
// thermostat.setPowerSavingMode(false);
// console.log(power_saver);
// console.log(thermostat.setPowerSavingMode());
// console.log(power_saver);
// console.log(thermostat.getTemperature());

module.exports = Thermostat
