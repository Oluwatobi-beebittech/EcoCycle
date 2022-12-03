/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum EcoChampion {
  ECO_PROCESSOR = 'ECO_PROCESSOR',
  ECO_COLLECTOR = 'ECO_COLLECTOR',
}

export enum Coins {
  ECO = 'ECO',
  USDT = 'USDT',
  USDC = 'USDC',
  DAI = 'DAI',
  BUSD = 'BUSD'
}

export enum PaymentTypeReadable {
  'waste_recycling' = 'Waste Recycling',
  'eco_product' = 'EcoProduct',
  'eco_tax_credit' = 'EcoTaxCredit'
}

export enum PaymentTypeMapping {
  'waste_recycling' = 'waste_recycling',
  'eco_product' = 'eco_product',
  'eco_tax_credit' = 'eco_tax_credit'
}

export enum WebRoute {
  LOGIN = '/login',
  DASHBOARD_OVERVIEW = '/dashboard',
  SIGNUP = '/signup',
  LEARN_MORE = '/learn-more',
  LEARN_ECO_DISCOUNT = '/learn-more#eco-discount',
  LEARN_ECO_TAX_CREDIT = '/learn-more#eco-tax-credit',
  LEARN_ECO_REDEEM = '/learn-more#eco-redeem',
  LEARN_COP_27 = '/learn-more#cop27'
}
