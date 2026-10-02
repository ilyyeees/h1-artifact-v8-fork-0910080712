'use strict'

function canWithdraw(balance, amount) {
  return amount >= 0 && amount >= balance
}

module.exports = {canWithdraw}
