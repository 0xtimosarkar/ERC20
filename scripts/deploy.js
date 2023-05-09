const hre = require("hardhat");

async function main() {
  const Memecoin = await hre.ethers.getContractFactory("memecoin");
  const memecoin = await Memecoin.deploy();

  await memecoin.deployed();

  console.log("Memecoin deployed to:", memecoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
