import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLetters } from './actions/letters';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import WorldMailbox from './components/worldMailbox';
import SecretMailbox from './components/secretMailbox';
import Inbox from './components/inbox';
import Outbox from './components/outbox';
import Editor from './components/editor';
import Auth from './components/auth';
import Reader from './components/reader';
import About from './components/about';
import Forgot from './components/forgot.password';


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
            <Route index element={<WorldMailbox />} />
            <Route path='secret' element={<SecretMailbox />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path='outbox' element={<Outbox />} />
            <Route path='edit' element={<Editor />} />
            <Route path='auth' element={<Auth />} />
            <Route path='read' element={<Reader />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<WorldMailbox />} />
            <Route path='forgot' element={<Forgot/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
