import { SearchIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Button colorScheme="blue">Button</Button>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </Layout>
    </>
  );
}

export default App;
