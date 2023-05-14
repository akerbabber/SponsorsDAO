# SponsorsDAO
A platform to sponsor hackers to let them join hackatons.

## Installation

This package requires Node.js and yarn to be installed. Once you have them installed, navigate to the directory containing the `package.json` file and install this package using yarn:

\`\`\`bash
cd scaffold-eth-2-subgraph-package
yarn install
\`\`\`

## Scripts

This package provides a set of yarn scripts for common development tasks:

- `yarn account`: Lists accounts.
- `yarn chain`: Runs a local Ethereum node.
- `yarn compile`: Compiles the contracts.
- `yarn deploy`: Deploys the contracts and generates TypeScript ABIs.
- `yarn fork`: Runs a forked Ethereum node.
- `yarn generate`: Generates an account.
- `yarn lint`: Lints the TypeScript files.
- `yarn lint-staged`: Lints staged files.
- `yarn test`: Runs the tests and reports gas usage.
- `yarn verify`: Verifies the contracts on Etherscan.

## Dependencies

This package uses a number of open source projects:

- `@ethersproject/abi`: A library for encoding and decoding Ethereum function calls and events.
- `@ethersproject/providers`: A library that provides Ethereum provider implementations.
- `@nomicfoundation/hardhat-*`: A set of libraries for developing Ethereum smart contracts with Hardhat.
- `@nomiclabs/hardhat-*`: Another set of libraries for developing Ethereum smart contracts with Hardhat.
- `@typechain/*`: Libraries to generate TypeScript typings for Ethereum smart contracts.
- `eslint`: A JavaScript and TypeScript linter.
- `hardhat`: A development environment to compile, deploy, test, and debug Ethereum software.
- `prettier`: An opinionated code formatter.
- `typescript`: A statically typed superset of JavaScript that compiles to plain JavaScript.
- `chai`: A BDD / TDD assertion library for node.js and the browser that can be delightfully paired with any javascript testing framework.
- `solidity-coverage`: A tool that shows how much of your solidity codebase is covered by your tests.
- `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- `qrcode`: A library for generating QR codes.
- `@openzeppelin/contracts`: A library for secure smart contract development.
- `envfile`: A library for reading and writing .env files.


## License

This project is licensed under the MIT License.
