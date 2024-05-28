# Gas Estimator

## Create a new project directory and clone it:
```
mkdir linea-estimate-gas
cd linea-estimate-gas
git clone https://github.com/ronaldkohhh/estimate-gas
```

## Install necessary dependencies:
```
npm install npm install web3@1.7.4 dotenv
```

## Create a .env file to store your Infura Project ID:
```
touch .env
```

Add your Infura Project ID to the .env file:
```
INFURA_PROJECT_ID=your_infura_project_id
```

## Change the variables:
```
const fromAddress = '0xYourFromAddress'; // Replace with your address
const toAddress = '0xRecipientAddress'; // Replace with the recipient address
const value = web3.utils.toWei('0.01', 'ether'); // Value to send (e.g 0.01 ETH)
```

## Execute the script:
```
node estimateGas.js
```
