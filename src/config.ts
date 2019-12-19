import {
  OrderKind,
  ActionsOrderActionKind,
  SignedDynamicActionsOrder
} from "@0xcert/ethereum-gateway";

export const config = {
  providerConfig: {
    requiredConfirmations: 1,
    // ropsten config
    gatewayConfig: {
      actionsOrderId: "0x6Cb40DB529637C218824a2660EFC7CbaD5485115",
      assetLedgerDeployOrderId: "0x9de066264347165693eC890ccC1C8Af8f9A15f51",
      valueLedgerDeployOrderId: "0x327577e70e21AcEe01447AD06939Fb4057232b2A"
    }
  },
  assetLedgerId: "0xd4466A99672366Ad2Acd7304AD35D0705ce26787", // Input you own asset ledger id
  account1Id: "0x9cb3b30E995F968e044C0Bf48C70559a53b86cfb", // Input your primary metamask account Id.
  signatureAccount1: "",
  signatureDynamic: ""
};

export const order = {
  kind: OrderKind.SIGNED_DYNAMIC_ACTIONS_ORDER,
  signers: [config.account1Id],
  seed: Date.now(),
  expiration: Date.now() + 86400000,
  actions: [
    {
      kind: ActionsOrderActionKind.TRANSFER_ASSET,
      ledgerId: config.assetLedgerId,
      senderId: config.account1Id,
      assetId: "100"
    },
    {
      kind: ActionsOrderActionKind.CREATE_ASSET,
      ledgerId: config.assetLedgerId,
      senderId: config.account1Id,
      assetId: "101",
      assetImprint:
        "c6c14772f269bed1161d4350403f4c867c749b3cce7abe84c6d0605068cd8a87"
    }
  ]
} as SignedDynamicActionsOrder;
