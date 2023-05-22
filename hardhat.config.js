/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config(); // Required to load environment variables from .env file

const { INFURA_PROJECT_ID, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.6.5",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: [PRIVATE_KEY],
    },
  },
  // Contract deployment scripts
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // Configure the Solidity compiler
  solidity: {
    version: "0.6.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
