import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/product").then((response) => {
      console.log("response", response);
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {products.map((product) => (
              <Tr>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.description}</Td>

                <Td>
                  <Button colorScheme="teal" size="sm">
                    Editar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
