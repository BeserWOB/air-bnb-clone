import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Card from "./Card";
import Data from "./Data"

 
export default function App(){
  return(
    <main>
      <Header />
      <MainContent />
      <Card data={Data}/>
    </main>
  )
}