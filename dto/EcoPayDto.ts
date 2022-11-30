export type EcoPayDto = {
    amount: number;
    coin: string;
    paymentType: string;
    receiverAddress: string;
    additionalNote?: string | undefined;
    weight?: string | undefined;
    itemName?: string | undefined;
    itemQuantity?: string | undefined;
};