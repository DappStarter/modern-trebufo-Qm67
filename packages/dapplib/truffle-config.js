require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hope kite bone tooth tissue riot sister proof install cricket slot gasp'; 
let testAccounts = [
"0x87fc1a9fe478e079c0bc4d001ed0117e824e98b3e63f9151095700553a6e37f4",
"0xe597c5d076289bddb7de7035913dae75465c213981fad4acc19677d03f6db2ba",
"0x7df8f878adc3f4635cb0597b34e888225056288fbf05c0d01343a7b6db44caf5",
"0x444bc8b4e4eaeea7d4b931738afcc8dcb72b8dfc052afff4eb65c3fbaa3f6a39",
"0x671747fad70d58b58531aae78f019c5b3d56a37f68b7d1ba2c0f114648be23c5",
"0xfbbfb4863b5c12d5c05db6d48ddf8627e227d5be85d3fad055bdc66134e2def6",
"0x4da8a171284e261c7332d800d228085c201eb5bed5f6adb490a042c59bda665a",
"0x16ec706b60793e6ea49da8949cf558f0d2848a48e426aa7664c5f4b1f13bda50",
"0x73c25f4f58b27eb5824a72fa06b6856201fd6737f326e5648cbe4f1952c01039",
"0x4b3294a5af70cc64ec58f5a5e580adc5e79876110f860bd303097ff49d26acac"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


