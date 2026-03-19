import React, { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { CarrinhoContext } from "@/context/contextCarrinho";

const Produtos = ({}) => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

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
      setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.map((itemDoCarrinho) => {
          if (itemDoCarrinho.id === novoProduto.id)
            itemDoCarrinho.quantidade += 1;
          return itemDoCarrinho;
        }),
      );
    }
  }
  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
