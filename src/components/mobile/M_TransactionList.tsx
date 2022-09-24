import { Box } from "@chakra-ui/react"
import { TransactionContext } from "../../contexts/TransactionContext"
import { ITable, tableData } from "../../utils/data"
import { useContext } from "react";
import M_TransactionCard from "./M_TransactionCard";
function M_TransactionList() {
  const { type } = useContext(TransactionContext);
  const filteredTableData = tableData.find(t => t.type === type ) as ITable ?? tableData[0]
  return (
    <Box my={3}>
        {
          filteredTableData.data.map( data => <M_TransactionCard data={data} />)
        }

    </Box>
  )
}

export default M_TransactionList