const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {ethers} = require("hardhat");
const contract = require("../artifacts/contracts/TestSC.sol/TestSC.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract instance
const TestSCContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    // reading the message variable from the public function declared earlier
    const message = await TestSCContract.message();
    // sanity check!
    console.log("Here you go champ, this is your message:" + message);

    console.log("looks like something's about to happen though...");
    const tx = await TestSCContract.update("Argh, here you go champ:");
    await tx.wait();

    const newMessage = await TestSCContract.message();
    console.log("Here you go champ, this is your message:" + newMessage);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});