import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "@/context/contextCarrinho";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "@/reducers/carrinhoreducer";

const addProductAction = (novoProduto) => ({
  type: ADD_PRODUCT,
  payload: novoProduto,
});
const removeProductAction = (produtoId) => ({
  type: REMOVE_PRODUCT,
  payload: produtoId,
});
const updateProductAction = (produtoId, quantidade) => ({
  type: UPDATE_PRODUCT,
  payload: { produtoId, quantidade },
});

export const useCarrinho = () => {
  const { carrinho, dispatch, valorTotal, quantidade } =
    useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    dispatch(addProductAction(novoProduto));
  }

  function removerProdutoCarrinho(itemCarrinhoId) {
    dispatch(removeProductAction(itemCarrinhoId));
  }

  function removerProduto(itemCarrinhoId) {
    debugger;
    const produto = carrinho.find((item) => item.id === itemCarrinhoId);
    if (!produto) return;
    if (produto.quantidade === 1) {
      dispatch(removeProductAction(itemCarrinhoId));
    } else {
      dispatch(updateProductAction(itemCarrinhoId, produto.quantidade - 1));
    }
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};
