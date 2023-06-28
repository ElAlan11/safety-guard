import TrustedContact from "../components/Trusted/TrustedContact.js";
import { Stack } from "react-bootstrap";
import HeaderMenu from "../components/Home/HeaderMenu.js";
import { useState } from "react";
import colors from '../components/assets/colors.js'

export default function Trusted() {
  const [open, setOpen] = useState(false);
  const exampleArray = [{id: 1,name: "luis",tel: "3333885404",image: "https://randomuser.me/api/portraits/men/36.jpg"},{id: 2,name: "caro",tel: "3333880454",image: "https://randomuser.me/api/portraits/women/37.jpg"},{id: 3,name: "alan",tel: "3388335404",image: "https://randomuser.me/api/portraits/men/37.jpg"}]
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Stack direction="vertical" gap={1} style={{backgroundColor: colors.primary}}>
        <div>
          <HeaderMenu open={open} toggle={toggle}></HeaderMenu>
        </div>
        <div style={{ padding: "5px"}}>
          {
            exampleArray.map((user)=>{
              return <TrustedContact name={user.name} tel={user.tel} id={user.id} image={user.image} key={user.id}></TrustedContact>
            })
          }
        </div>
      </Stack>
    </>
  );
}
