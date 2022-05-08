import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLetters } from './actions/letters'
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme/theme';
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldMailbox from './pages/worldMailTank';
import EditingForm from './components/editingForm';

function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetters());
  }, [currentId, dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WorldMailbox setCurrentId={setCurrentId} />} />
            <Route path="edit" element={<EditingForm currentId={currentId} setCurrentId={setCurrentId} />} />
            <Route path="*" element={<WorldMailbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
