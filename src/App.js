import { useState, useEffect } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import DarkThemeButton from "./components/DarkThemeButton";
import AddProvince from "./components/AddProvince";
import Provinces from "./components/Provinces";
import provinces from "./api/provinces";

function App() {
const [listProvinces, setListProvinces] = useState([]);

  const getProvinces = async () => {
      
      try {
          const res = await provinces.getListProvinces();
          setListProvinces(res.data);
      } catch (error) {
          console.log(error);
      }       
  }
    
  useEffect(() => {
      getProvinces();
  }, []);

  return (
    <VStack p={4} minH='100vh' pb={28}>
      <DarkThemeButton/>

      <Heading
        p='5'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text'
      >
        List Provinces
      </Heading>
      <AddProvince getProvince={getProvinces}/>
      <Provinces listProvinces={listProvinces} getProvince={getProvinces}/>
    </VStack>
  );
}

export default App;
