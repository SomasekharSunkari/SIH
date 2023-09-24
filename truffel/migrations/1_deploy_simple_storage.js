const SimpleStorage = artifacts.require("IPFSStorage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
