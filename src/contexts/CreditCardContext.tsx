import React from "react";
import { ICardType } from "../components/Card";
import { IWrapper } from "../components/Wrapper";
import { _ICard } from "../components/Card";

const navTable = [
     [
      { bank: "main", type: "mastercard", balance: "2,000" },
      { bank: "gtb", type: "verve", balance: "2,000" },
      { bank: "alat", type: "mastercard", balance: "5,000" },
    ],
    [
        { bank: "gtb", type: "verve", balance: "2,000" },
        { bank: "alat", type: "mastercard", balance: "5,000" },
        { bank: "main", type: "mastercard", balance: "2,000" }
    ],
    [
        { bank: "alat", type: "mastercard", balance: "5,000" },
        { bank: "gtb", type: "verve", balance: "2,000" },
        { bank: "main", type: "mastercard", balance: "2,000" },
    ]
];
interface ctxValue {
  toggleCards: Function;
  cards: typeof navTable[0];
  active: number ;
}

export const CreditCardContext = React.createContext({} as ctxValue);

export default function CreditCardContextProvider({ children }: IWrapper) {
  
  const [cards, setCards] = React.useState(navTable[0] as ICardType[]);

  const [activeCard, setActiveCard] = React.useState(0);

  function toggleCards(i: number) {

    setCards( navTable[i] as ICardType[]);
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
