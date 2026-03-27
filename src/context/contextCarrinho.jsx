import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "@/reducers/carrinhoreducer";

export const CarrinhoContext = createContext();
const inicialState = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, inicialState);
  const [valorTotal, setValorTotal] = useState([]);
  const [quantidade, setQuantidade] = useState([]);

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
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        valorTotal,
        quantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
