import TrustedContact from "../components/Trusted/TrustedContact.js";
import { useState } from "react";
import colors from "../components/assets/colors.js";
import { View, SafeAreaView } from "react-native";

export default function Trusted() {
  const [open, setOpen] = useState(false);
  const exampleArray = [
    { id: 1, name: "luis", tel: "3333885404", image: "https://randomuser.me/api/portraits/men/36.jpg" },
    { id: 2, name: "caro", tel: "3333880454", image: "https://randomuser.me/api/portraits/women/37.jpg" },
    { id: 3, name: "alan", tel: "3388335404", image: "https://randomuser.me/api/portraits/men/37.jpg" },
  ];
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.primary, flex:1 }}>
        <View>{/* <HeaderMenu open={open} toggle={toggle}></HeaderMenu> */}</View>
        <View style={{ padding: 10 }}>
          {exampleArray.map((user) => {
            return <TrustedContact name={user.name} tel={user.tel} id={user.id} image={user.image} key={user.id}></TrustedContact>;
          })}
        </View>
      </SafeAreaView>
    </>
  );
}
