import TrustedContact from "../components/Trusted/TrustedContact.js";
import { Stack } from "react-bootstrap";
import HeaderMenu from "../components/Home/HeaderMenu.js";
import { useState } from "react";

export default function Trusted() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Stack direction="vertical" gap={1}>
        <div>
          <HeaderMenu open={open} toggle={toggle}></HeaderMenu>
        </div>
        <div style={{ padding: "5px" }}>
          <TrustedContact></TrustedContact>
        </div>
      </Stack>
    </>
  );
}
