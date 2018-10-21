var TestToken = artifacts.require("./AMIS.sol");
var UbiRewardToken = artifacts.require("./UbiRewardToken.sol");
var BookERC20EthV1 = artifacts.require("./BookERC20EthV1.sol"); // obsoleted by V1p1
var BookERC20EthV1Dec = artifacts.require("./BookERC20EthV1Dec.sol"); // obsoleted by V1p1
var BookERC20EthV1p1 = artifacts.require("./BookERC20EthV1p1.sol");
var OnChainOrderBookV012b = artifacts.require("./OnChainOrderBookV012b.sol");
module.exports = function(deployer) {
  deployer.deploy(TestToken);
  deployer.deploy(UbiRewardToken);
  deployer.deploy(BookERC20EthV1);
  deployer.deploy(BookERC20EthV1Dec);
  deployer.deploy(BookERC20EthV1p1);
  deployer.deploy(OnChainOrderBookV012b);
};
