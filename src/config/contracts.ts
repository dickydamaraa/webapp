import { ContractConfig } from '@/types/ContractConfig'

export const CONTRACTS: ContractConfig = {
  devnet: {
    oracle: {
      instance: 'nolus1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgsv3wzl4',
      codeId: ''
    },
    leaser: {
      instance: 'nolus1zwv6feuzhy6a9wekh96cd57lsarmqlwxdypdsplw6zhfncqw6ftqmx7chl',
      codeId: ''
    }
  },
  testnet: {
    oracle: {
      instance: '',
      codeId: ''
    },
    leaser: {
      instance: '',
      codeId: ''
    }
  }

}
