pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SponsorsDAO {
    using SafeERC20 for IERC20;

    struct Hacker {
        bool isRegistered;
        string lensUrl;
        string githubUrl;
        string linkedInUrl;
        string twitterUrl;
        string websiteUrl;
        string telegramHandle;
        string discordHandle;
        string email;
        string location;
        address[] DAOs;
    }

    struct Sponsor {
        string name;
        string logoUrl;
        string websiteUrl;
        string email;
        string description;
        uint offeredAmount;
        uint fundedAmount;
        uint deadline;
        uint upfrontPercentage;
    }

    struct Sponsorship {
        address hacker;
        address[] sponsors;
        mapping (address => bool) isSponsor;
        string description;
        uint requestedAmount;
        mapping (address => uint) fundedAmountBySponsorAddress;
        mapping (address => uint) unlockedAmountBySponsorAddress;
        mapping (address => bool) isApprovedBySponsorAddress;
        mapping (address => bool) isLockedBySponsorAddress;
        mapping (address => uint) amountHandledBySponsor;
        mapping (address => uint) amountWithdrawnByHacker;
        uint totalFundedAmount;

    }



    struct Hackathon {
        address admin;
        string name;
        string logoUrl;
        string websiteUrl;
        string description;
        uint256 startDate;
        uint256 endDate;
        mapping(uint => Sponsor) sponsorsList;
        mapping(uint => address) sponsorAddressByIndex;
        uint sponsorsCounter;
        mapping(uint => Hacker) hackersList;
        mapping(uint => address) hackerAddressByIndex;
        uint hackersCounter;
        mapping (address => uint) sponsorIndexByAddress;
        mapping (address => mapping (address => uint256)) sponsorshipIndexByHackerAndSponsor;
        mapping (uint => Sponsorship) sponsorshipsList;
        mapping (uint => address) sponsorshipAddressByIndex;
        uint sponsorshipsCounter;
        uint lastSponsorDeadline;

    }
    

    event HackerRegistration(
        address indexed hacker
    );

    event HackathonRegistration(
        uint hackathonIndex
    );

    event SponsorRegistration(
        address indexed sponsor,
        uint hackathonIndex

    );

    event SponsorshipRequested(
        address indexed hacker,
        uint hackathonIndex,
        uint256 amount
    );

    event SponsorshipFunded(
        address indexed sponsor,
        uint hackathonIndex,
        uint256 amount
    );
    event SponsorshipApproved(
        address indexed hacker,
        address indexed sponsor,
        uint hackathonIndex,
        uint256 sponsorshipIndex
    );

    event SponsorshipUnlocked(
        address indexed hacker,
        address indexed sponsor,
        uint256 sponsorshipIndex,
        uint hackathonIndex,
        uint256 amount
    );

    event UpfrontGiven(
        address indexed hacker,
        address indexed sponsor,
        uint256 sponsorshipIndex,
        uint hackathonIndex,
        uint256 amount
    );

    event TrailGiven(
        address indexed hacker,
        address indexed sponsor,
        uint256 sponsorshipIndex,
        uint hackathonIndex,
        uint256 amount
    );

    event SponsorshipWithdrawn(
        address indexed hacker,
        uint256 sponsorshipIndex,
        uint hackathonIndex,
        uint256 amount
    );

    event LockedFundsHandled(
        address indexed hacker,
        address indexed sponsor,
        uint256 sponsorshipIndex,
        uint hackathonIndex,
        uint256 amount
    );
   
    IERC20 public immutable paymentToken;
    mapping (address => Hacker) public hackers;
    mapping (uint => address) public hackerAddressByIndex;
    uint public hackersCounter;
    mapping (uint => Hackathon) public hackathons; //this behaves like an array
    uint public hackathonsCounter;
    uint constant public PRECISION = 10000;

    address public admin;

    constructor(IERC20 _paymentToken) {
        paymentToken = _paymentToken;
        admin = msg.sender;
    }

    function registerHacker(Hacker memory hacker) external {
       require(!hackers[msg.sender].isRegistered, "Hacker already registered");
        hackers[msg.sender] = hacker;
        hackers[msg.sender].isRegistered = true;
        hackerAddressByIndex[hackersCounter] = msg.sender;
        hackersCounter++;
        emit HackerRegistration(msg.sender);
    }

    function registerSponsor(Sponsor memory sponsor, uint hackathonIndex) external {
        hackathons[hackathonIndex].sponsorsList[hackathons[hackathonIndex].sponsorsCounter] = sponsor;
        hackathons[hackathonIndex].sponsorsCounter++;
        hackathons[hackathonIndex].sponsorAddressByIndex[hackathons[hackathonIndex].sponsorsCounter] = msg.sender;
        if(hackathons[hackathonIndex].lastSponsorDeadline < sponsor.deadline) {
            hackathons[hackathonIndex].lastSponsorDeadline = sponsor.deadline;
        }
        IERC20(paymentToken).safeTransferFrom(msg.sender, address(this), sponsor.offeredAmount);
    }

    function registerHackathon(
        string calldata name,
        string calldata logoUrl,
        string calldata websiteUrl,
        string calldata description,
        uint256 startDate,
        uint256 endDate,
        uint lastSponsorDeadline) external {
        require(msg.sender == admin, "Only admin can register hackathon");
        Hackathon storage hackathon = hackathons[hackathonsCounter];
            hackathon.admin = msg.sender;
            hackathon.name = name;
            hackathon.logoUrl = logoUrl;
            hackathon.websiteUrl = websiteUrl;
            hackathon.description = description;
            hackathon.startDate = startDate;
            hackathon.endDate = endDate;
            hackathon.lastSponsorDeadline = lastSponsorDeadline;

        hackathonsCounter++;
        emit HackathonRegistration(hackathonsCounter - 1);
    }

    function requestSponsorship(uint amount,  uint hackathonIndex, string memory description) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        require(hackathon.lastSponsorDeadline > block.timestamp, "Sponsorship deadline has passed");
        require(hackathon.sponsorsCounter > 0, "No sponsors registered");
        hackathon.hackersList[hackathon.hackersCounter] = hackers[msg.sender];
        hackathon.hackersCounter++;
        hackathon.hackerAddressByIndex[hackathon.hackersCounter] = msg.sender;
        uint sponsorshipIndex = hackathon.sponsorshipsCounter;
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex] ;       
        sponsorship.hacker = msg.sender;
        sponsorship.description = description;
        sponsorship.requestedAmount = amount;
        hackathon.sponsorshipsCounter++;
        hackathon.sponsorshipAddressByIndex[hackathon.sponsorshipsCounter] = msg.sender;
        
        emit SponsorshipRequested(msg.sender, hackathonIndex, amount);
    }

    function fundHackathon(uint hackathonIndex, uint amount) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        IERC20(paymentToken).safeTransferFrom(msg.sender, address(this), amount);
        Sponsor storage sponsor = hackathon.sponsorsList[hackathon.sponsorsCounter];
        hackathon.sponsorsCounter++;
        emit SponsorshipFunded(msg.sender, hackathonIndex, amount);
    }

    function approveSponsorship(uint hackathonIndex, uint sponsorshipIndex, uint amount, bool isLocked) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        require(!sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship already approved");
        require(sponsorship.hacker == msg.sender, "Only hacker can approve sponsorship");
        sponsorship.isApprovedBySponsorAddress[msg.sender] = true;
        emit SponsorshipApproved(sponsorship.hacker, msg.sender, hackathonIndex, sponsorshipIndex);
        sponsorship.sponsors.push(msg.sender);
        sponsorship.fundedAmountBySponsorAddress[msg.sender] = amount;
        sponsorship.totalFundedAmount += amount;
        sponsorship.isLockedBySponsorAddress[msg.sender] = isLocked;
        if (!isLocked) {
            unlockSponsorship(hackathonIndex, sponsorshipIndex, hackathon.sponsorIndexByAddress[msg.sender]);
        }
        
    }

    function unlockSponsorship (uint hackathonIndex, uint sponsorshipIndex, uint sponsorIndex) public {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        require(sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship not approved by sponsor");
        require(sponsorship.isLockedBySponsorAddress[msg.sender], "Sponsorship not locked by sponsor");
        require(sponsorship.sponsors[sponsorIndex] == msg.sender, "Only sponsor can unlock sponsorship");
        sponsorship.isLockedBySponsorAddress[msg.sender] = false;
        emit SponsorshipUnlocked(sponsorship.hacker,msg.sender, sponsorshipIndex, hackathonIndex, sponsorship.fundedAmountBySponsorAddress[msg.sender]);
        giveUpfrontFunding(hackathonIndex, sponsorshipIndex, sponsorIndex);
    }

    function giveUpfrontFunding(uint hackathonIndex, uint sponsorshipIndex, uint sponsorIndex) public {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        Sponsor storage sponsor = hackathon.sponsorsList[sponsorIndex];
        require(sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship not approved by sponsor");
        require(msg.sender == sponsorship.sponsors[sponsorIndex], "Only sponsor can give funding");
        uint upfrontAmount = sponsorship.fundedAmountBySponsorAddress[msg.sender] * sponsor.upfrontPercentage / PRECISION;
        sponsorship.unlockedAmountBySponsorAddress[msg.sender] = upfrontAmount;
        emit UpfrontGiven(sponsorship.hacker, msg.sender, sponsorshipIndex, hackathonIndex, upfrontAmount);
    }

    function giveTrailFunding(uint hackathonIndex, uint sponsorshipIndex, uint sponsorIndex) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        Sponsor storage sponsor = hackathon.sponsorsList[sponsorIndex];
        require(!sponsorship.isLockedBySponsorAddress[msg.sender], "Sponsorship locked by sponsor");
        require(sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship not approved by sponsor");
        require(msg.sender == sponsorship.sponsors[sponsorIndex], "Only sponsor can give funding");
        uint trailAmount = sponsorship.fundedAmountBySponsorAddress[msg.sender] * (PRECISION - sponsor.upfrontPercentage) / PRECISION;
        sponsorship.unlockedAmountBySponsorAddress[msg.sender] += trailAmount;
        emit TrailGiven(sponsorship.hacker, msg.sender, sponsorshipIndex, hackathonIndex, trailAmount);
    }

    function handleLockedHackerFunds(uint hackathonIndex, uint sponsorshipIndex, uint sponsorIndex, uint amount) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        require(sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship not approved by sponsor");
        require(msg.sender == sponsorship.sponsors[sponsorIndex], "Only sponsor can handle locked funds");
        require(sponsorship.isLockedBySponsorAddress[msg.sender], "Sponsorship not locked by sponsor");
        uint lockedAmount = sponsorship.fundedAmountBySponsorAddress[msg.sender] - sponsorship.unlockedAmountBySponsorAddress[msg.sender];
        require (amount <= lockedAmount, "Amount exceeds locked amount");
        sponsorship.amountHandledBySponsor[msg.sender] += amount;
        IERC20(paymentToken).safeTransferFrom(address(this), msg.sender, lockedAmount);
        emit LockedFundsHandled(sponsorship.hacker, msg.sender, sponsorshipIndex, hackathonIndex,lockedAmount);
        
    }

    function withdrawUnlockedFunds(uint hackathonIndex, uint sponsorshipIndex, uint sponsorIndex) external {
        Hackathon storage hackathon = hackathons[hackathonIndex];
        Sponsorship storage sponsorship = hackathon.sponsorshipsList[sponsorshipIndex];
        require(sponsorship.isApprovedBySponsorAddress[msg.sender], "Sponsorship not approved by sponsor");
        require(msg.sender == sponsorship.hacker, "Only hacker can withdraw unlocked funds");
        uint unlockedAmount = sponsorship.unlockedAmountBySponsorAddress[msg.sender];
        sponsorship.unlockedAmountBySponsorAddress[msg.sender] = 0;
        emit SponsorshipWithdrawn(msg.sender, sponsorshipIndex, hackathonIndex, unlockedAmount);
        IERC20(paymentToken).safeTransferFrom(address(this), sponsorship.hacker, unlockedAmount);
    }





    function getHackers() external view returns (address[] memory) {
        address[] memory hackersAddresses = new address[](hackersCounter);
        for (uint i = 0; i < hackersCounter; i++) {
            hackersAddresses[i] = hackerAddressByIndex[i];
        }
        return hackersAddresses;
    }

    function getHackerDAOs (address hacker) external view returns (address[] memory) {
        return hackers[hacker].DAOs;
    }

    function getSponsorsByHackathonIndex(uint hackathonIndex) external view returns (address[] memory) {
        uint sponsorsCounter = hackathons[hackathonIndex].sponsorsCounter;
        address[] memory sponsorsAddresses = new address[](sponsorsCounter);
        for (uint i = 0; i < sponsorsCounter; i++) {
            sponsorsAddresses[i] = hackathons[hackathonIndex].sponsorAddressByIndex[i];
        }
        return sponsorsAddresses;
    }

    function getAllHackersByHackathonIndex(uint hackathonIndex) external view returns (address[] memory)
    {
        uint hackathonHackersCounter = hackathons[hackathonIndex].hackersCounter;
        address[] memory hackersAddresses = new address[](hackathonHackersCounter);
        for (uint i = 0; i < hackathonHackersCounter; i++) {
            hackersAddresses[i] = hackathons[hackathonIndex].hackerAddressByIndex[i];
        }
        return hackersAddresses;
    }
}




   
