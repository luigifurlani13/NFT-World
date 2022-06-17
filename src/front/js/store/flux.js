const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      withMetadata: "true",
      apiKey: "6Rzo-oME78T9bFV5Wh_Ve_HWdJLFbUpD",
      baseURL:
        "https://eth-mainnet.alchemyapi.io/nft/v2/6Rzo-oME78T9bFV5Wh_Ve_HWdJLFbUpD/getNFTsForCollection",
      collections: [],
    },
    actions: {
      getCollections: async () => {
        const url = `${getStore().baseURL}?contractAddress=${
          getStore().address
        }&withMetadata=${getStore().withMetadata}`;
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setStore({ collections: data.nfts });
            console.log(getStore().collections);
            // console.log(data.nfts);
          }
        } catch (error) {
          throw Error(error);
        }
      },
    },
  };
};

export default getState;
