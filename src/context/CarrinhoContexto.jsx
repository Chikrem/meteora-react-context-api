import { createContext, useReducer, useState } from "react";

export const CarrinhoContext = createContext();

CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidadeProdutos,
        valorTotalCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
