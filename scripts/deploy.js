const dotenv = require("dotenv");
const { ethers } = require("ethers");
const hre = require("hardhat");

dotenv.config();

async function main() {
  // Deploy the ERC20 token
  const Token = await hre.ethers.getContractFactory("memecoin");
  const token = await Token.deploy();

  await token.deployed();
  console.log("Token deployed to:", token.address);

  // Pre-Allocation to meet tokenomics
  
   // Get the total supply
  const totalSupply = await token.totalSupply();

  // Calculate the allocation amount (5% of total supply)
  const allocationAmount = totalSupply.mul(5).div(100);
  
  // Get the recipient address from the environment variable
  const recipient = process.env.RECIPIENT_ADDRESS;
  
  // Preallocate tokens to the recipients
  const signer = (await ethers.getSigners())[0];
  const tokenWithSigner = token.connect(signer);
  await tokenWithSigner.transfer(recipient, allocationAmount);

  console.log("Successfully completed pre-allocation");
}

// Execute the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
