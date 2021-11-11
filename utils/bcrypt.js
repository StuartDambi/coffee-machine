const bcrypt = require("bcrypt");

/**
 * Hash a password
 * @param password password string to be hashed
 * @returns hashed password
 */
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePasswords = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { comparePasswords, hashPassword };
