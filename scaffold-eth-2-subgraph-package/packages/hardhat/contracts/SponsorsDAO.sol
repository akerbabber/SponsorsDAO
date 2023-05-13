pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SponsorsDAO {
    using SafeERC20 for IERC20;

    struct Hacker {
        string lensUrl;
        string github4Url;
        string linkedInUrl;
        string twitterUrl;
        string websiteUrl;
        string location;
        address[] DAOs;
    }

    struct Sponsor {
        string name;
        string logoUrl;
        string websiteUrl;
    }

    struct Sponsorship {
        address hacker;
        address sponsor;
        bool isApproved;
        bool isLocked;
        uint256 amount;
        string description;
    }

    struct Hackathon {
        address admin;
        string name;
        string logoUrl;
        string websiteUrl;
        string description;
        uint256 startDate;
        uint256 endDate;
        Sponsor[] sponsors;
        Hacker[] hackers;
        mapping (address => mapping (address => uint256)) sponsorshipIndexByHackerAndSponsor;
        Sponsorship[] sponsorships;
    }

    event SponsorshipCreated(
        address indexed hacker,
        address indexed sponsor,
        uint256 amount
    );



    event HackerRegistration(
        address indexed hacker
    );

    event SponsorRegistration(
        address indexed sponsor
    );

    IERC20 public immutable paymentToken;
    mapping (address => Hacker) public hackers;
    mapping (address => Sponsor) public sponsors;
    address[] public hackerAddresses;
    address[] public sponsorAddresses;
    Sponsorship[] public sponsorships;
    mapping (address => mapping (address => uint256)) public sponsorshipIndexByHackerAndSponsor;

    address admin;

    constructor(IERC20 _paymentToken) {
        paymentToken = _paymentToken;
        admin = msg.sender;
    }

    



   
}