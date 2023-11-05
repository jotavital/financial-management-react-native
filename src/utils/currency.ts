export const toBrl = (amount: number): string => {
    if (!amount) {
        return '-';
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(amount);
};
