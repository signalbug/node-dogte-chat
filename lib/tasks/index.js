/**
 * Main application tasks
 */

'use strict';

module.exports = function(bot) {
  require('fs').readdirSync(__dirname).forEach(function(file) {
    if(file.startsWith('task.')) {
      require('./'+file).schedule(bot);
    }
  });
};
