import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Components/Main/Main";
import PokeInfo from "../Components/PokeInfo/PokeInfo";

export default function Router(){
  

return(
<BrowserRouter>
 <Routes>
    <Route index element={<Main />}/>
    <Route path="/detalhes" element={<PokeInfo />}/>
 </Routes>


</BrowserRouter>

)


}