const contracts = {
  5: [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        HackerSoulboundNFT: {
          address: "0x0F59674D0D8409552f077d55DaA9d680aef50Da5",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockToken: {
          address: "0xBDe0420E90C459FDfB7046d9Cbb8f514cAce4cCb",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0xB84009f078f987DeCE99168fa8350581397F9800",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  420: [
    {
      name: "optimismGoerli",
      chainId: "420",
      contracts: {
        MockToken: {
          address: "0xd9f95e39E5Dd91cc5B0357C3c9f7C370d65E087C",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        HackerSoulboundNFT: {
          address: "0x7F168704858814e6424040e796e65186325a94BC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0x394D6b784E955268C012c0A62618507BF3De784b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  10200: [
    {
      name: "gnosisTestnet",
      chainId: "10200",
      contracts: {
        HackerSoulboundNFT: {
          address: "0x7F168704858814e6424040e796e65186325a94BC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockToken: {
          address: "0xd9f95e39E5Dd91cc5B0357C3c9f7C370d65E087C",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0x394D6b784E955268C012c0A62618507BF3De784b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        MockToken: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "admin",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  59140: [
    {
      name: "lineaTestnet",
      chainId: "59140",
      contracts: {
        HackerSoulboundNFT: {
          address: "0x7F168704858814e6424040e796e65186325a94BC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockToken: {
          address: "0xd9f95e39E5Dd91cc5B0357C3c9f7C370d65E087C",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0x394D6b784E955268C012c0A62618507BF3De784b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "polygonMumbai",
      chainId: "80001",
      contracts: {
        HackerSoulboundNFT: {
          address: "0x7F168704858814e6424040e796e65186325a94BC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockToken: {
          address: "0xd9f95e39E5Dd91cc5B0357C3c9f7C370d65E087C",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0x394D6b784E955268C012c0A62618507BF3De784b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  534353: [
    {
      name: "scrollTestnet",
      chainId: "534353",
      contracts: {
        HackerSoulboundNFT: {
          address: "0x7F168704858814e6424040e796e65186325a94BC",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "SponsorsDAO",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_SponsorsDAO",
                  type: "address",
                },
              ],
              name: "setSponsorsDAO",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockToken: {
          address: "0xd9f95e39E5Dd91cc5B0357C3c9f7C370d65E087C",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SponsorsDAO: {
          address: "0x394D6b784E955268C012c0A62618507BF3De784b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IERC20",
                  name: "_paymentToken",
                  type: "address",
                },
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "_hackerNFT",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "HackathonRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "HackerRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "LockedFundsHandled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorRegistration",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
              ],
              name: "SponsorshipApproved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipFunded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SponsorshipWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "TrailGiven",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sponsor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "UpfrontGiven",
              type: "event",
            },
            {
              inputs: [],
              name: "PRECISION",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isLocked",
                  type: "bool",
                },
              ],
              name: "approveSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "fundHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getAllHackersByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "hacker",
                  type: "address",
                },
              ],
              name: "getHackerDAOs",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getHackers",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "getSponsorsByHackathonIndex",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveTrailFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "giveUpfrontFunding",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackathons",
              outputs: [
                {
                  internalType: "address",
                  name: "admin",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackersCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipsCounter",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackathonsCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "hackerAddressByIndex",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackerNFT",
              outputs: [
                {
                  internalType: "contract HackerSoulboundNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hackers",
              outputs: [
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "lensUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "githubUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "linkedInUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "twitterUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "telegramHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "discordHandle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "email",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "location",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hackersCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "handleLockedHackerFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paymentToken",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "logoUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "websiteUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "startDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endDate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastSponsorDeadline",
                  type: "uint256",
                },
              ],
              name: "registerHackathon",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isRegistered",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "lensUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "githubUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "linkedInUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "twitterUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "telegramHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "discordHandle",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "location",
                      type: "string",
                    },
                    {
                      internalType: "address[]",
                      name: "DAOs",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Hacker",
                  name: "hacker",
                  type: "tuple",
                },
              ],
              name: "registerHacker",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "logoUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "websiteUrl",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "email",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "offeredAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "fundedAmount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "upfrontPercentage",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SponsorsDAO.Sponsor",
                  name: "sponsor",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
              ],
              name: "registerSponsor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
              ],
              name: "requestSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "unlockSponsorship",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "hackathonIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorshipIndex",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sponsorIndex",
                  type: "uint256",
                },
              ],
              name: "withdrawUnlockedFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
