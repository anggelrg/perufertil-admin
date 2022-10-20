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

const ProductTable = () => {
  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID.</Th>
              <Th>Nombre</Th>
              <Th>Descripciom</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Balan</Td>
              <Td>Ejemplo de descripcion</Td>
              <Td>
                <Button colorScheme="teal" size="sm">
                  Editar
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
