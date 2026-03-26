import { useContext, useEffect, useMemo } from "react";
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

  function mudarQuantidade(id, valor) {
    return carrinho.map((item) => {
      if (!item) return item;

      if (item.id === id) {
        return {
          ...item,
          quantidade: (item.quantidade || 0) + valor,
        };
      }

      return item;
    });
  }

  function adicionarProduto(novoProduto) {
    if (!novoProduto) return;

    const temProduto = carrinho.some(
      (produto) => produto && produto.id === novoProduto.id,
    );

    if (!temProduto) {
      setCarrinho((prev) => [...prev, { ...novoProduto, quantidade: 1 }]);
    } else {
      setCarrinho(mudarQuantidade(novoProduto.id, 1));
    }
  }

  function removerProdutoCarrinho(itemCarrinhoId) {
    setCarrinho((carrinhoAnterior) =>
      carrinhoAnterior.filter((item) => item.id !== itemCarrinhoId),
    );
  }
  function removerProduto(itemCarrinhoId) {
    const item = carrinho.find((item) => item.id === itemCarrinhoId);
    if (!item) return;
    if (item.quantidade === 1) {
      removerProdutoCarrinho(itemCarrinhoId);
    } else {
      const carrinhoAtualizado = mudarQuantidade(itemCarrinhoId, -1);
      setCarrinho([...carrinhoAtualizado]);
    }
  }
  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      },
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  });

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
