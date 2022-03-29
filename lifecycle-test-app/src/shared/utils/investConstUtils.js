export const addStockToConst = (investConstData, newStock) =>{
    investConstData.stockList.push(newStock);
    return investConstData;
}