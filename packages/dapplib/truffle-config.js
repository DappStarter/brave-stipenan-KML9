require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong riot place arrow hover arena metal gaze'; 
let testAccounts = [
"0xad37567c363772df3fada01285ba8018389c72ab09c62bdde9e84ae2f8db9214",
"0x57fafb903fd8d14f02e9b751d260da24e260c20d64ac1b74e00bc00d6eabdd24",
"0xea0b5174247e7cfea66a1e4a24c1257797f64560fdea05ee6b15b684ca769e2e",
"0xe0bdd73d678ae835e05b7bff7a0a040afc893de22e80a80fe04b764fcc7401f4",
"0x1d2b460072e0affd88a4ddb3cb0ae34a476b3d60e8da3b9eda1e590b1ea82d14",
"0xf34120cfae97fceebe58bfe8f3c2d22052053b062014040a943afd87269c2666",
"0xb076bf4e79c17dcdac74a08a66c98613ef4e1782bb4f6b4fba397ce997914273",
"0x4e17c7dfd4f40ca0bd205cedc4c7f05ef634c579db5e8f483ae7968b37a623f7",
"0xaa11d8cf45cae8cfd086154fe2a1f37cff3b8a6ff76e32e525288a5046f06713",
"0xf80e5f8f4696c1d41f1db227471d71da3a0674dc02944e38448715c8865920ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

