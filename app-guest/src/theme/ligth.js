import { extendTheme } from "@chakra-ui/react";

import Button from "./button";
import Badge from "./badge";
import Link from "./link";
import Input from "./input";

const colors = {
  brand: {
    600: "#EDBE00",
    500: "#FFCD00",
  },
  accent: {
    600: "#05253A",
    500: "#002B49",
  },
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif",
};

const styles = {
  global: {
    a: {
      color: "#000",
      //_hover: "#303030",
    },
  },
};

const shadows = {
  outline: "0 0 0 3px rgba(255,205,0, 0.6)",
  // 255,205,0
};

const components = {
  Button,
  Badge,
  Link,
  Input,
};

const lightTheme = extendTheme({ colors, styles, fonts, shadows, components });

export default lightTheme;
