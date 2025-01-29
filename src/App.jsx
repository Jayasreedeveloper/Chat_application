import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import auth from "./pages/auth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<auth/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;