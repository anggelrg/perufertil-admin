import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";

const ProductForm = ({ created }) => {
  const [types, setTypes] = useState([]);

  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3333/types").then((response) => {
      setTypes(response.data);
    });
  }, []);

  const options = types.map((option, index) => (
    <option key={index} value={option._id}>
      {option.name}
    </option>
  ));

  const createProduct = (event) => {
    event.preventDefault();

    console.log("selectedType", selectedType);
    console.log("name", name);
    console.log("description", description);

    const payload = {
      name,
      description,
      types: selectedType,
    };

    axios.post("http://localhost:3333/product", payload).then((response) => {
      created();
    });
  };

  return (
    <>
      <form className="bg-white shadow-md p-3 rounded">
        <FormControl className="mb-4">
          <FormLabel>Tipo</FormLabel>
          <Select
            onChange={(event) => setSelectedType(event.target.value)}
            placeholder="Selecciona una opción"
          >
            {options}
          </Select>
        </FormControl>

        <FormControl className="mb-4">
          <FormLabel>Nombre</FormLabel>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
        </FormControl>

        <FormControl className="mb-4">
          <FormLabel>Descripción</FormLabel>
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder=""
          />
        </FormControl>

        <div className="flex justify-end">
          <Button
            onClick={(event) => createProduct(event)}
            colorScheme="teal"
            size="md"
          >
            Crear
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
