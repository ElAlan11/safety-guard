import { ThemeProvider } from "@rneui/themed";
import theme from "./components/assets/theme";
import Engine from "./Engine";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Engine/>
    </ThemeProvider>
  );
}
