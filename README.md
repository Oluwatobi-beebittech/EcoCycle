![EcoCycle Banner](https://res.cloudinary.com/dfybu7w8o/image/upload/v1670102878/ecocycle_banner_728X90_zc2ftp.png)
# :recycle: :seedling: EcoCycle

EcoCycle is a waste recycling-focused service which seeks to harmonise, reward, and empower actors involved in waste recycling and climate change mitigation, especially in Africa.

EcoCycle has two major system actors:
- Collectors: those who gather and sell recyclable waste. Usually individuals.
- Processors: those who process the recyclable waste bought from the collectors into new materials or refurbished items. Usually businesses.

As the collectors and processors interact, they are rewarded using EcoTokens, EcoCycle reward token. In EcoCycle, crypto stablecoins are the primary currency for transactions. However, the EcoTokens earned can also be used to pay for services, obtain tax credit (**EcoTaxCredit**) by burning earned tokens, get discounts for products from approved eco-friendly stores (**EcoDiscount**), and redeem eco-friendly items (**EcoRedeem**) from approved EcoStores.

EcoCycle helps its users:
- hedge against inflation as they use crypto stablecoins for transactions
- contribute to climate change mitigation as they collect or recycle waste on the one hand or on the other hand, buy or sell eco-friendly products (**EcoProducts**).

Furthermore, EcoCycle is positioned to proffer solutions to pertinent questions raised at the 27th United Nations Climate Change conference (**COP27**). Questions raised bordered on which developing countries to select that will benefit from the climate change fund contributions. Read about [EcoCycle's position on COP27 here](https://eco-cycle.vercel.app/learn-more#cop27) https://eco-cycle.vercel.app/learn-more#cop27.

This repository is the frontend repository for EcoCycle. A decoupled architecture was utilised hence different repositories for the frontend, backend, and smart contract.

## :gem: EcoCycle Application Repositories
- [**EcoCycle Frontend**](https://github.com/Oluwatobi-beebittech/EcoCycle#readme) https://github.com/Oluwatobi-beebittech/EcoCycle#readme
- [**EcoCycle Backend**](https://github.com/Oluwatobi-beebittech/EcoCycle-Backend#readme) https://github.com/Oluwatobi-beebittech/EcoCycle-Backend#readme
- [**EcoCycle Smart Contract (EcoToken)**](https://github.com/Oluwatobi-beebittech/EcoToken#readme) https://github.com/Oluwatobi-beebittech/EcoToken#readme
## :hammer_and_wrench: Built with
### Frontend
- Next JS
- Typescript
- React
- Redux Toolkit
- Axios
- Material UI (MUI) for theming
### Backend
- Nest JS
- TypeORM
- Typescript
- Ethers JS
- Alchemy SDK
### Smart Contract
- Solidity version 0.8.17
- Ethers JS
- Hardhat
- Typescript
- Polygon Mumbai Network
### Third-Party Integrations
- **Lazerpay**, for payments in stablecoins. Lazerpay will enable EcoCycle users topup their accounts using their country currency, withdraw funds to local bank accounts, and manage EcoProduct listings.

Currently, users of EcoCycle need to register seperately on Lazerpay and then link their public and secret keys to EcoCycle manually. A partnership with Lazerpay will ensure users only signup to EcoCycle while EcoCycle handles the user's registration on Lazerpay. Consequently, the process will be seamless for the user compared to the current setup.

## :control_knobs: Smart Contract Details
- Token Name: EcoToken (ECO)
- Initial Supply: 20,000,000
- Decimals: 2
- Contract Deployed Address: 0x300aca0433775D4848675D8876c9c604BC0887F0
- Contract Verified at: https://mumbai.polygonscan.com/address/0x300aca0433775D4848675D8876c9c604BC0887F0#code

## Getting Started (Frontend)
1. Clone repo using `git clonehttps://github.com/Oluwatobi-beebittech/EcoCycle.git`.
2. Ensure [Node Version Manager(NVM)](https://github.com/nvm-sh/nvm) is installed. The version of node used is 16.15.0.
3. Run `nvm use` to use node version 16.15.0.
4. Install all the application's packages using `npm install`.
5. To start the application, run `npm run dev`.
6. Create a `.env` file and insert the appropriate values for each environment variable.
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1 [EcoCycle backend API base URL]
NEXT_PUBLIC_IS_PROD=false
NEXT_PUBLIC_CHAIN_BLOCK_EXPLORER_URL=https://polygonscan.com/
NEXT_PUBLIC_CHAIN_CURRENCY_DECIMALS=18
NEXT_PUBLIC_CHAIN_CURRENCY_NAME=Polygon
NEXT_PUBLIC_CHAIN_CURRENCY_SYMBOL=MATIC
NEXT_PUBLIC_CHAIN_ID=0x13881
NEXT_PUBLIC_CHAIN_NAME=maticmum
NEXT_PUBLIC_CHAIN_RPC_URL=https://rpc-mumbai.maticvigil.com/
NEXT_PUBLIC_ECO_TOKEN_ADDRESS=
NEXT_PUBLIC_ECO_TOKEN_SYMBOL=
NEXT_PUBLIC_ECO_TOKEN_DECIMALS=
NEXT_PUBLIC_ECO_TOKEN_LOGO_URL=
```
