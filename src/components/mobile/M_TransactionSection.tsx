import TransactionContextProvider from "../../contexts/TransactionContext";
import Wrapper from "../Wrapper";
import M_TransactionCard from "./M_TransactionCard";
import M_TransactionList from "./M_TransactionList";
import M_TransactionNav from "./M_TransactionNav";

function M_TransactionSection() {
  return (
    <TransactionContextProvider>
      <>
        <M_TransactionNav />
        <Wrapper>
          <M_TransactionList />
        </Wrapper>
      </>
    </TransactionContextProvider>
  );
}

export default M_TransactionSection;
