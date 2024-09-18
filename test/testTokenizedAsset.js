const { expect } = require("chai");

describe("TokenizedAsset", function() {
    it("Should transfer tokens between accounts", async function() {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const TokenizedAsset = await ethers.getContractFactory("TokenizedAsset");
        const token = await TokenizedAsset.deploy(1000);
        await token.deployed();

        // Transfer from owner to addr1
        await token.transfer(addr1.address, 100);
        expect(await token.balanceOf(addr1.address)).to.equal(100);
    });
});