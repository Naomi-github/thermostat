The Thermostat starts with an initial temperature of 20 degrees
You can increase the temperature with an up method
You can decrease the temperature with a down method
The minimum possible temperature is 10 degrees
The Power saving mode is on by default but it can also be turned off
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
You can reset the temperature to 20 with a reset method

class Thermostat

increase_temp
decrease_temp

min_temp(10)
max_temp(32)

power_saver_max_temp(25)

reset_temp(20)

energy_use
low_usage (<18)
medium_usage (<=25)
high_usage (> 25)


input // output
const thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
