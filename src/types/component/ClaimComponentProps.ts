import type { AssetBalance } from '@/stores/wallet/state';
import type { Coin } from '@cosmjs/amino';

export interface ClaimComponentProps {
  selectedCurrency: AssetBalance;
  amount: string;
  password: string;
  txHash: string;
  fee: Coin;
  onNextClick: () => void;
}
