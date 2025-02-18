import { MantineProvider } from '@mantine/core';
import { createTheme } from '@mantine/core';
import "@mantine/core/styles.css";
import "./styles/fonts.css";
import "./styles/formStyles.css"
import Home from './pages/Home';

const theme = createTheme({
  fontFamily: 'Sniglet, sans-serif',
  components: {
    Button: {
      styles: {
        root: {
          fontFamily: 'Promo, sans-serif',
        },
      },
    },
    Text: {
      styles: {
        root: {
          fontFamily: 'Sniglet, sans-serif',
        },
      },
    },
    Tabs: {
      styles: {
        root: {
          fontFamily: 'Promo, sans-serif',
        },
      },
    },
    TextInput: {
      styles: {
        root: {
          fontFamily: 'Sniglet, sans-serif',
        },
      },
    },
    Radio: {
      styles: {
        root: {
          fontFamily: 'Sniglet, sans-serif',
        },
      },
    },
    List: {
      styles: {
        root: {
          fontFamily: 'Sniglet, sans-serif',
        },
      },
    },
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
