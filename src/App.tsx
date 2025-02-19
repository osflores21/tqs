import { MantineProvider} from '@mantine/core';
import { createTheme } from '@mantine/core';
import "@mantine/core/styles.css";
import "./styles/fonts.css";
import "./styles/formStyles.css"
import Home from './pages/Home';

const theme = createTheme({
  fontFamily: "Sniglet, sans-serif",
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
        w: "50%",
        h: 42,
        variant: "filled",
        color: "#E61D55",
        type: "submit",
      },
      styles: {
        root: { fontFamily: "Promo, sans-serif" },
      },
    },
    Tabs: {
      styles: {
        root: { fontFamily: "Promo, sans-serif" },
      },
    },
    TextInput: {
      defaultProps: {
        radius: "xl",
      },
      styles: {
        label: { fontSize: 14 },
        input: { fontSize: 14 },
      },
    },
    Radio: {
      defaultProps: {
        iconColor: "#4CC5C4",
        c: "#7F7F7F",
        color: "#4CC5C4",
      },
      styles: {
        label: { fontSize: 14 },
      },
    },
    Title: {
      defaultProps: {
        fw: 600
      },
      styles: {
        root: { fontFamily: 'Promo, sans-serif', }
      }
    },
    Paper:{
      defaultProps:{
        radius:50,
        p:{ base: "md", xs: "lg" },
        withBorder: true
      }
    }
  },
});


function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
