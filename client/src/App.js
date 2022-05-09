import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLetters } from './actions/letters'
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import WorldMailTank from './components/worldMailTank';
import Editor from './components/editor';
import Auth from './components/auth';
import Reader from './components/reader';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLetters());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<WorldMailTank />} />
            <Route path='edit' element={<Editor />} />
            <Route path='auth' element={<Auth />} />
            <Route path='read' element={<Reader />} />
            <Route path='*' element={<WorldMailTank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
