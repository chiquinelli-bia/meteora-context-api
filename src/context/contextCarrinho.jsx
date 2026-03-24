import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState([]);
  const [quantidade, setQuantidade] = useState([]);
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        valorTotal,
        setValorTotal,
        quantidade,
        setQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
