import { useContext, useEffect } from "react";
import { CarrinhoContext } from "@/context/contextCarrinho";

export const useCarrinho = () => {
  const {
    carrinho,
    setCarrinho,
    valorTotal,
    setValorTotal,
    quantidade,
    setQuantidade,
  } = useContext(CarrinhoContext);

  function mudarQuantidade(id, quantidade) {
    return carrinho.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantidade: item.quantidade + quantidade,
        };
      }
      return item;
    });
  }

  function adicionarProduto(novoProduto) {
    const temProduto = carrinho.some(
      (produto) => produto.id === novoProduto.id,
    );
    if (!temProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    } else {
      const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);
      setCarrinho([...carrinhoAtualizado]);
    }
  }

  function removerProdutoCarrinho(itemCarrinhoId) {
    setCarrinho((carrinhoAnterior) =>
      carrinhoAnterior.filter((item) => item.id !== itemCarrinhoId),
    );
  }
  function removerProduto(itemCarrinhoId) {
    const carrinhoAtualizado = mudarQuantidade(itemCarrinhoId, -1);
    setCarrinho([...carrinhoAtualizado]);
  }
  useEffect(() => {
    const { totalTemp, quantidadeTemp } = carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      },
    );
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  }, [carrinho]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};
