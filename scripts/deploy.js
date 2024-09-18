async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TokenizedAsset = await ethers.getContractFactory("TokenizedAsset");
    const token = await TokenizedAsset.deploy(1000);
    console.log("Token deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});