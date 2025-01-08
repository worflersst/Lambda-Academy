export const API_URL = {
    COIN_BASE: {
        Bitcoin: 'https://api.coinbase.com/v2/prices/BTC-USD/buy',
        Ethereum: 'https://api.coinbase.com/v2/prices/ETH-USD/buy',
        Ripple: 'https://api.coinbase.com/v2/prices/XRP-USD/buy',
    },
    COIN_STATS: {
        Bitcoin: 'https://openapiv1.coinstats.app/coins/bitcoin',
        Ethereum: 'https://openapiv1.coinstats.app/coins/ethereum',
        Ripple: 'https://openapiv1.coinstats.app/coins/ripple',
    },
    KUCOIN: {
        Bitcoin: 'https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT',
        Ethereum: 'https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=ETH-USDT',
        Ripple: 'https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=XRP-USDT',
    },
    COIN_PAPRIKA: {
        Bitcoin: 'https://api.coinpaprika.com/v1/tickers/btc-bitcoin',
        Ethereum: 'https://api.coinpaprika.com/v1/tickers/eth-ethereum',
        Ripple: 'https://api.coinpaprika.com/v1/tickers/xrp-xrp',
    },
};