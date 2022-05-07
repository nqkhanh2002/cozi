import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLetters } from './actions/letters'
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme/theme';
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldMailbox from './pages/worldMailTank';
import Compose from './pages/compose';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetters);
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WorldMailbox />} />
            <Route path="compose" element={<Compose />} />
            <Route path="*" element={<WorldMailbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
