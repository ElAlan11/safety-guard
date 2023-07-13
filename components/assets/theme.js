import { createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {
    Card: {
      containerStyle: {
        margin: 8,
        marginBottom: 8,
        height: 200,
        maxHeight: 200,
        borderRadius: 15,
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
    },
  },
  darkColors:{
    background: "#141414",
  },
  lightColors:{
    background: "#E0E0E0"
  },
  mode: "dark",
});

export default theme;
