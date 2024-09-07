import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: "../src/artifacts"
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: 'http://127.0.0.1:7545',
      accounts: [
        '0xffd14f23eb575942e4f5f53c8abb12b3ebd8b09f3f561a8543a85a997f16f595'
      ]
    }
  }
};

export default config;
