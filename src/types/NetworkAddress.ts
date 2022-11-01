export interface NetworkAddress {
  tendermintRpc: string;
  api: string;
  govern: string,
  web3auth: {
    clientId: string,
    network: string | any,
    google: {
      name: string,
      verifier: string,
      typeOfLogin: string | any,
      clientId: string,
    },
  }
}
