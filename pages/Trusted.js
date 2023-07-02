import TrustedContact from "../components/Trusted/TrustedContact.js";
import { useState } from "react";
import { View, SafeAreaView,ScrollView } from "react-native";
import TrustedNew from '../components/Trusted/TrustedNew';

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
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView style={{}}>
          {exampleArray.map((user) => {
            return <TrustedContact name={user.name} tel={user.tel} id={user.id} image={user.image} key={user.id}></TrustedContact>;
          })}
          <TrustedNew></TrustedNew>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
