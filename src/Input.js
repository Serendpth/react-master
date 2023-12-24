import { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import App from './App'; 
import Potato from "./Potato";

function Input() {
  return(
   <div>
      <h1>Hello!</h1>
      <Potato/>
   </div>
  );
}
export default Input;