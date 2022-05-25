async function main() {
    const TestSC = await ethers.getContractFactory("TestSC");
 
    // Start deployment, returning a promise that resolves to a contract object
    const test_sc = await TestSC.deploy("Hello World!, My First SC!");
    console.log("Contract deployed to address:", test_sc.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });