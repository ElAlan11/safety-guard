import TrustedContact from "../components/Trusted/TrustedContact.js";
import { Stack } from "react-bootstrap";
import HeaderMenu from "../components/Home/HeaderMenu.js";
import {useState,useContext} from "react";
import { NavigationContext } from '@react-navigation/native';


export default function Trusted() {
  const [open, setOpen] = useState(false);
  const navigation = useContext(NavigationContext);
  
  const toggle = () => {
    setOpen(!open);
  };
  
  const login = () =>{
    toggle()
    navigation.navigate("Login");
  }

  return (
    <>
      <Stack direction="vertical" gap={1}>
        <div >
          <HeaderMenu open={open} toggle={toggle} login= {login} trusted={toggle}></HeaderMenu>
        </div>
        <div style={{ padding: "5px" }}>
        <TrustedContact></TrustedContact>
        <TrustedContact></TrustedContact>
        </div>
      </Stack>
    </>
  );
}
