import React from "react";
import { ICardType } from "../components/Card";
import { IWrapper } from "../components/Wrapper";
import { _ICard } from "../components/Card";

export const cardStack  = [
     [
      { bank: "main", type: "mastercard", balance: "2,000",cvc: "243" },
      { bank: "gtb", type: "verve", balance: "2,000",cvc: "128" },
      { bank: "alat", type: "mastercard", balance: "5,000",cvc: "923" },
    ],
    [
        { bank: "gtb", type: "verve", balance: "2,000",cvc: "128" },
        { bank: "alat", type: "mastercard", balance: "5,000",cvc: "923" },
        { bank: "main", type: "mastercard", balance: "2,000",cvc: "243" }
    ],
    [
        { bank: "alat", type: "mastercard", balance: "5,000",cvc: "923" },
        { bank: "gtb", type: "verve", balance: "2,000",cvc: "128" },
        { bank: "main", type: "mastercard", balance: "2,000",cvc: "421" },
    ]
] as ICardType[][];
interface ctxValue {
  toggleCards: Function;
  cards: typeof cardStack[0];
  active: number ;
}

export const CreditCardContext = React.createContext({} as ctxValue);

export default function CreditCardContextProvider({ children }: IWrapper) {
  
  const [cards, setCards] = React.useState(cardStack[0] as ICardType[]);

  const [activeCard, setActiveCard] = React.useState(0);

  function toggleCards(i: number) {

    setCards( cardStack[i] as ICardType[]);
    setActiveCard(i);
  }

  return (
    <CreditCardContext.Provider
      value={{ cards, toggleCards, active: activeCard }}
    >
      {children}
    </CreditCardContext.Provider>
  );
}
