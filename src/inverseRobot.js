'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};
  for (const key in robot) {
    const value = robot[key];
     if (inverse.hasOwnProperty(value)) {
      return null;
    }
    inverse[value] = key;
  }
  return inverse;
}

module.exports = inverseRobot;
