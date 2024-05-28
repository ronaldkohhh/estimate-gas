require('dotenv').config();
const Web3 = require('web3');

const infuraProjectId = process.env.INFURA_PROJECT_ID;
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraProjectId}`);

const estimateGasCost = async () => {
    const fromAddress = '0xB79284FbE7a75851c7864835e4b4DcA0C5f0d7a1'; // Replace with your address
    const toAddress = '0xe79f059CAFf1c2977C2cDd94C597f80134cEFEF4'; // Replace with the recipient address
    const value = web3.utils.toWei('0.01', 'ether'); // Example value to send (0.01 ETH)

    const transaction = {
        from: fromAddress,
        to: toAddress,
        value: value,
        // Include any additional data or fields required by the transaction
    };

    try {
        const estimatedGas = await web3.eth.estimateGas(transaction);
        const gasPrice = await web3.eth.getGasPrice();
        const gasCost = estimatedGas * gasPrice;

        console.log(`Estimated Gas: ${estimatedGas}`);
        console.log(`Gas Price: ${web3.utils.fromWei(gasPrice, 'gwei')} Gwei`);
        console.log(`Transaction Cost: ${web3.utils.fromWei(gasCost.toString(), 'ether')} ETH`);
    } catch (error) {
        console.error('Error estimating gas:', error);
    }
};

estimateGasCost();
