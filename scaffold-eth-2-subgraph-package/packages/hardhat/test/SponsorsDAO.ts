import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { Contract, ContractFactory } from "ethers";
import { Signer, BigNumber } from "ethers";

describe("SponsorsDAO", function () {
  let SponsorsDAO: ContractFactory;
  let sponsorsDAO: Contract;
  let MockToken: ContractFactory;
  let mockToken: Contract;
  let HackerSoulboundNFT: ContractFactory;
  let hackerSoulboundNFT: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;
  let addrs: Signer[];

  describe("Deployment", function () {

    it("Should deploy the  contracts", async function () {
        SponsorsDAO = await ethers.getContractFactory("SponsorsDAO");
    MockToken = await ethers.getContractFactory("MockToken");
    HackerSoulboundNFT = await ethers.getContractFactory("HackerSoulboundNFT");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy the MockToken contract
    mockToken = await MockToken.deploy("MockToken", "MOCK");
    await mockToken.deployed();
    hackerSoulboundNFT = await HackerSoulboundNFT.deploy("HackerSoulboundNFT","HSNFT");
    await hackerSoulboundNFT.deployed();
    sponsorsDAO = await SponsorsDAO.deploy(mockToken.address, hackerSoulboundNFT.address);
    await sponsorsDAO.deployed();
    });
    
    it("Should set the soulbound token to point to the SponsorsDAO", async function () {
        expect(await hackerSoulboundNFT.setSponsorsDAO(sponsorsDAO.address))
      expect(await sponsorsDAO.hackerNFT()).to.equal(hackerSoulboundNFT.address);
    });

  });

  describe("Transactions", function () {
    it("Should register a new hacker", async function () {
      // Define a new Hacker.
      const newHacker = {
        isRegistered: true,
        lensUrl: "https://lens.com/johndoe",
        githubUrl: "https://github.com/johndoe",
        linkedInUrl: "https://linkedin.com/in/johndoe",
        twitterUrl: "https://twitter.com/johndoe",
        websiteUrl: "https://johndoe.com",
        telegramHandle: "johndoe",
        discordHandle: "johndoe#1234",
        email: "johndoe@gmail.com",
        location: "San Francisco, CA",
        DAOs: [], // fill this with addresses if required
      };

      // Connect with addr1 and register a new Hacker.
      await expect(sponsorsDAO.connect(addr1).registerHacker(newHacker))
        .to.emit(sponsorsDAO, "HackerRegistration")
        .withArgs(await addr1.getAddress());
    });

    it("Should register a new hackathon", async function () {
      // Define Hackathon data
      const name = "Hackathon 2023";
      const logoUrl = "https://example.com/logo.png";
      const websiteUrl = "https://hackathon2023.com";
      const description = "The ultimate Hackathon of 2023";
      const startDate = Math.floor(Date.now() / 1000) + 2 * 24 * 60 * 60; // Start date from the day after tomorrow
      const endDate = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // End date a week from now
      const lastSponsorDeadline = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // Sponsor deadline a day from now

      // Call the contract function
      const tx = await sponsorsDAO
        .connect(addr1)
        .registerHackathon(name, logoUrl, websiteUrl, description, startDate, endDate, lastSponsorDeadline);
        tx.wait();

      
    });

    it("Should register a new sponsor", async function () {
       await mockToken.connect(addr1).mint(addr1.getAddress(), ethers.utils.parseEther("1000"));
      // Define Sponsor data
      const sponsor = {
        name: "Test Sponsor",
        logoUrl: "https://logo.url",
        websiteUrl: "https://website.url",
        email: "test@email.com",
        description: "Test sponsor description",
        offeredAmount: BigNumber.from(100),
        fundedAmount: BigNumber.from(0),
        deadline: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Deadline a day from now
        upfrontPercentage: 5000,
      };
      const hackathonIndex = 0; // Assuming a hackathon already exists at index 0

      // First, approve the contract to spend the sponsor's tokens
      await mockToken.connect(addr1).approve(sponsorsDAO.address, sponsor.offeredAmount);

      // Call the contract function
      const tx = await sponsorsDAO.connect(addr1).registerSponsor(sponsor, hackathonIndex);

      //// Wait for the transaction to be mined
      //await tx.wait();

      // Get the event from the transaction
      //const event = tx.events?.filter(x => {
      //  return x.event == "SponsorRegistration";
      //})[0];
//
      //// Assert that the event has been emitted with the expected arguments
      //expect(event).to.not.be.undefined;
      //expect(event.args?.hackathonIndex).to.equal(hackathonIndex);
      //expect(event.args?.sponsor).to.equal(addr1.address);

    });

    it("Should request a sponsorship", async function () {
        console.log(await sponsorsDAO.hackathons(0));
      const amount = 500;
      const hackathonIndex = 0;
      const description = "Sponsorship for coding resources";

      // Assuming that the hacker is the first account
      const hacker = addr1;
      await sponsorsDAO.connect(hacker).requestSponsorship(amount, hackathonIndex, description);
      console.log(await sponsorsDAO.hackathons(0));
    });

    it("Should fund a hackathon", async function () {
        const hackathonIndex = 0;
        const amount = 1000;
    
        // Assuming the sponsor is the second account
        const sponsor = addr1;
    
        // Approve the contract to spend tokens
        await mockToken.connect(sponsor).approve(sponsorsDAO.address, amount);
    
    
    
        // Verify the event
        await expect(sponsorsDAO.connect(sponsor).fundHackathon(hackathonIndex, amount))
            .to.emit(sponsorsDAO, 'SponsorshipFunded')
            .withArgs(sponsor.address, hackathonIndex, amount);
    
        // Verify the balance of the contract
        const contractBalance = await mockToken.balanceOf(sponsorsDAO.address);
        assert.equal(contractBalance.toString(), amount.toString(), "Contract balance should match the funded amount");
    });
    

    // Add more test cases for all the functions.
  });
});
