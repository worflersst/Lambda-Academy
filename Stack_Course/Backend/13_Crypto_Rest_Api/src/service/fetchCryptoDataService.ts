import {API_URL} from "../constants/cryptoApiUrls";

interface FetchOptions {
    headers?: { [key: string]: string };
}

class fetchCryptoDataService {
    giveCryptoDataWithAPI = async () => {
        const requests: Promise<any>[] = [];

        Object.entries(API_URL).forEach(([apiName, cryptoURLs]) => {
            Object.entries(cryptoURLs).forEach(([cryptoSymbol, url]) => {
                requests.push(
                    this.fetchWithApiKey(url, apiName).then((data) => ({
                        market: apiName,
                        crypto: cryptoSymbol,
                        price: this.formatPrice(this.extractPrice(data, apiName)),
                        timestamp: new Date().toISOString(),
                    }))
                );
            });
        });

        const response = await Promise.all(requests);
        console.log(response)
        return response;
    };

    fetchWithApiKey = async (url: string, apiName: string): Promise<any> => {
        const options: FetchOptions = {};
        if (apiName === 'COIN_STATS') {
            options.headers = {
                'X-API-KEY': '1/4cWpM/pgx7vB9zOnqqZ6NFzd+MRNTERf9J20cDpi8=',
            };
        }

        try {
            const response = await fetch(url, options);
            return await response.json();
        } catch (error) {
            console.error(`Error fetching data from ${apiName}:`, error);
            return null;
        }
    };


    extractPrice(data: any, apiName: string): number | null {
        switch (apiName) {
            case 'COIN_BASE':
                return parseFloat(data?.data?.amount) || null;
            case 'COIN_STATS':
                return parseFloat(data?.price) || null;
            case 'KUCOIN':
                return parseFloat(data?.data?.price) || null;
            case 'COIN_PAPRIKA':
                return parseFloat(data?.quotes?.USD?.price) || null;
            default:
                return null;
        }
    }

    formatPrice(price: number | null): string | null {
        return price !== null ? price.toFixed(2) : null;
    }
}

export default new fetchCryptoDataService();
