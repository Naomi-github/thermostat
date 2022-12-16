const Thermostat = require('./thermostat')

thermostat = new Thermostat

describe('Thermostat', () => {
  it('returns 20 for the current temperature', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('returns 22 for the temperature, after increasing the thermostat twice', () => {
    thermostat.up()
    thermostat.up()

    expect(thermostat.getTemperature()).toEqual(22)
  });

  it('returns 21 for the temperature, after decreasing the thermostat once', () => {
    thermostat.down()

    expect(thermostat.getTemperature()).toEqual(21)
  });

  it('returns true as power saving mode is set on', () => {

    expect(thermostat.setPowerSavingMode(true)).toEqual(true)
  });

  it('returns 25, as max temp reached in power saving mode', () => {

    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toEqual(25)
  });

  it('returns false as power saving mode is set off', () => {
    expect(thermostat.setPowerSavingMode(false)).toEqual(false)
  });

  it('returns 26 as temp increased once', () => {
    thermostat.setPowerSavingMode(false)
    console.log(thermostat.setPowerSavingMode());
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(26)
  });

  it('returns 20 as the thermostat is reset', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20)
  });
});
