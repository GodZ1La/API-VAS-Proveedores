import React from 'react';
import { Box, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import { Dashboard,Manual } from './pages';
import { store } from './redux/store.js';
import './App.css';

const queryClient = new QueryClient();
const persistor = persistStore(store);

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#e10098',
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex' }}>
                    <Routes>

                      <Route path="/xtend/dashboard" Component={Dashboard} />
                      <Route path="/xtend/manual"Component={Manual} />
                      
                    </Routes>
                  </Box>
                </Grid>
                <ToastContainer limit={1} />
              </Grid>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
      </PersistGate>
    </QueryClientProvider>
  );
};

export default App;
