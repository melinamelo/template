import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#82c4ce',
      light: '#26c6da',
      dark: '#00bcd4',
    },
    secondary: {
      main: '#167c8a',
      dark: '#abe0e8',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: 'rgba(20,20,20,0.87)',
      secondary: '#bdbdbd',
      disabled: '#80deea',
      hint: '#ffffff',
    },
    warning: {
      main: '#ffd97c',
      light: '#ffd200',
      dark: '#836d2d',
    },
    info: {
      main: '#d492f5',
      light: '#962ace',
    },
    success: {
      main: '#a3e3e8',
      light: '#37a9b3',
    },
    error: {
      main: '#f16c6c',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
