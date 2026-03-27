export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export function carrinhoReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const novoProduto = action.payload;
      if (!novoProduto) return state;
      const temProduto = state.some(
        (produto) => produto && produto.id === novoProduto.id,
      );
      if (!temProduto) {
        return [...state, { ...novoProduto, quantidade: 1 }];
      } else {
        return state.map((produto) =>
          produto.id === novoProduto.id
            ? { ...produto, quantidade: produto.quantidade + 1 }
            : produto,
        );
      }
    case REMOVE_PRODUCT:
      const produtoId = action.payload;
      return state.filter((item) => item.id !== produtoId);
    case UPDATE_PRODUCT:
      const { produtoId: id, quantidade } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
      );
    default:
      return state;
  }
}
