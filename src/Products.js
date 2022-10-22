import { useState } from "react";
import { Button } from "@chakra-ui/react";

import Layout from "./components/Layout";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

const Products = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [listEdit, setListEdit] = useState(false);

  let content = isEdit ? (
    <ProductForm created={() => setIsEdit(false)} />
  ) : (
    <ProductTable created={() => setListEdit(false)} />
  );

  return (
    <>
      <Layout>
        {!isEdit ? (
          <div className="p-4">
            <Button
              colorScheme="green"
              size="md"
              onClick={() => setIsEdit(true)}
            >
              Crear
            </Button>
          </div>
        ) : (
          ""
        )}

        <div className="p-4">{content}</div>
      </Layout>
    </>
  );
};

export default Products;
