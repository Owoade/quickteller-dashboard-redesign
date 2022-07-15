import {
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";
import { ThemeContext } from "../App";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RiMore2Line, RiRefreshLine } from "react-icons/ri";
import { tableData, TableNameType } from "../utils/data";

interface ITable {
  type: TableNameType;
  heading: string[];
  data: Array<Array<any>>;
}

const TableMain = () => {
  const { transactionType } = useParams();
  const { scheme } = useContext(ThemeContext);

  const mainTable =
    tableData.find((table) => table.type === transactionType) ?? tableData[0];

  return (
    <TableContainer
      w="100%"
      p={3}
      overflowX="auto"
      borderRadius="10px"
      bgColor="brand.bgMain"
      boxShadow={scheme.shadow}
    >
      <Table variant="unstyled">
        <Thead>
          <Tr>
            {mainTable.heading.map((text) => (
              <Th fontSize="10px">{text}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {mainTable.data.map((data) => (
            <Tr>
              {data.map((text, i) =>
                i === 3 ? (
                  <Td fontSize="12px">
                    {text.split(" ")[0]} <br /> {text.split(" ")[1]}
                  </Td>
                ) : i === 1 ? parseVal(text) : i === 4 ? <Td position="relative" fontSize="12px" borderRadius="10px" > <chakra.span border={`1px solid ${getStatusColor(text)}`} color={ getStatusColor(text) } borderRadius="20px" p={"3px 8px"}>{text}</chakra.span> {text === "Failed" ? <RiRefreshLine style={{ position: "absolute", right: 0, top: "30px"}} /> : null }</Td> : (
                  <Td fontSize="12px">{text}</Td>
                )
              )}
              <Td textAlign="center">
                {" "}
                <RiMore2Line
                  style={{ display: "block", transform: "translateX(0.7em)" }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  function getBankLogo(accountString: string) {
    const accountNo = accountString.split("*")[0];
    const bankName = accountString.split("*")[1];

    let logoSrc = "";

    switch (bankName) {
      case "UBA":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897277/uba_e3tdi1.jpg";
        break;

      case "KUDA":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897278/kuda_ogkvf8.jpg";
        break;

      case "GTB":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897278/gtbank_aftdvy.jpg";
        break;

      case "FB":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897277/First-Bank-Logo-300x300_nut3es.png";
        break;
    }

    return (
      <Td>
        <HStack>
          {" "}
          <chakra.span fontSize="12px"> {accountNo}</chakra.span>{" "}
          <Image w="16px" h="16px" src={logoSrc} />{" "}
        </HStack>
      </Td>
    );
  }

  function parseVal( _string:string ){

    if( transactionType === "Money Transfer" ) return getBankLogo(_string);
    if( transactionType === "Airtime Purchase" ) return getServiceProviderLogo(_string)

    return <Td fontSize="12px"> {_string} </Td>

    
  }

  function getServiceProviderLogo(_desc: string){
    const phoneNumber = _desc.split("*")[0];
    const serviceProvider =  _desc.split("*")[1];

    let logoSrc = "";

    switch (serviceProvider) {
      case "MTN":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897277/mtn_nsxpsr.jpg";
        break;

      case "Airtel":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897277/airtel_eibeb6.jpg";
        break;

      case "GLO":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897278/glo_jjubtm.png";
        break;

      case "9M":
        logoSrc =
          "https://res.cloudinary.com/dles2mycv/image/upload/v1657897277/9mobile_zq1cpk.png";
      break;
    }

    return (
      <Td>
        <HStack>
          {" "}
          <chakra.span fontSize="12px"> { phoneNumber }</chakra.span>{" "}
          <Image w="16px" h="16px" src={ logoSrc } />{" "}
        </HStack>
      </Td>
    );
  }

  function getStatusColor( status: "Success" | "Pending" | "Failed"  ){
    
    switch(status){

      case "Success": 
      return "#36D277";

      case "Pending":
      return "#F5D77C";

      case "Failed":
      return "#F08585";

    }

  }
  
};

export default TableMain;
