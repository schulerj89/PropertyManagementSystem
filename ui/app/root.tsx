import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import globalStyles from '../globalStyles';
import Layout from './components/Layout';

export const meta = () => {
  return {
    title: "Property Management System",
    description: "Welcome to your Property Management System!"
  };
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Layout />
    </ThemeProvider>
  );
}
