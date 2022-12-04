export type EcoPayDto = {
    amount: number;
    coin: string;
    paymentType: string;
    receiverBEP20Address?: string | undefined;
    receiverEcoTokenAddress?: string | undefined;
    additionalNote?: string | undefined;
    weight?: string | undefined;
    itemName?: string | undefined;
    itemQuantity?: string | undefined;
};