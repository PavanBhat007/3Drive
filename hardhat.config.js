require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
  multicallAddresses: {
    1337: `http://localhost:8545`,
    [ChainId.Localhost]: `http://localhost:8545`,
  },
};
