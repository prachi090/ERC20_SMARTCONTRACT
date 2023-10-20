async function main() {
    const Erc20contract = await ethers.getContractFactory("ERC20TOKEN");
  
    // Specify the constructor arguments if required
    const totalSupply = 1000000;

    // Start deployment, passing the constructor arguments
    const myNFT = await Erc20contract.deploy(totalSupply);
    await myNFT.deployed();
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
