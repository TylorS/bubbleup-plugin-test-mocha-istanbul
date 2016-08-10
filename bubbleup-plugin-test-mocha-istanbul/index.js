'use strict'

process.env.ISTANBUL_REPORT_DIR = 'coverage'

module.exports = {
  exec: function (mocha, register) {
    mocha.reporter('mocha-istanbul')
    mocha.reporter('spec')
  },
  base: false
}
