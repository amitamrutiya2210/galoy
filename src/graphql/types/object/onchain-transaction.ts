import { GT } from "@graphql/index"

import ITransaction, { transactionInterfaceFields } from "../abstract/transaction"
import OnChainAddress from "../scalar/on-chain-address"
import OnChainTxHash from "../scalar/onchain-tx-hash"

import { SettlementMethod as DomainSettlementMethod } from "@domain/wallets"

const OnChainTransaction = new GT.Object({
  name: "OnChainTransaction",
  interfaces: () => [ITransaction],
  isTypeOf: (source) => source.settlementVia === DomainSettlementMethod.OnChain,
  fields: () => ({
    ...transactionInterfaceFields,

    // Non-interface fields
    address: {
      type: GT.NonNull(OnChainAddress),
      resolve: (source) => {
        // this is required to support legacy data
        if (source && source.address) return source.address
        return ""
      },
    },

    transactionHash: {
      type: GT.NonNull(OnChainTxHash),
    },
  }),
})

export default OnChainTransaction
