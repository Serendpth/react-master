import { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import App from './App'; 

function Input() {
  return(
    <Routes>
        <Route path="/">
            <App/>
        </Route>
    </Routes>
  )
}
export default Input;