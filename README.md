# Deploy to Görli

```bash
cp .env.example .env
npx hardhat run --network goerli scripts/deploy.js
```

# Deploy to Polygon Mumbai

```bash
cp .env.example .env
npx hardhat run --network mumbai scripts/deploy.js
```

# Example .env file

```text
API_URL=https://polygon-mumbai.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=YOUR_PRIVATE_KEY
RECIPIENT_ADDRESS=0xb794f5ea0ba39494ce839613fffba74279579268
```
