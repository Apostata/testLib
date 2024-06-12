import React from "react"
import "../dist/bundle";
const { Button, Header, Page, TailwindButton } = window.testLib

const App = () => {
	  return (
	<div>
	  <Header user={{name: "Rene"}} onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
	  <TailwindButton primary label="botão teste"/>
	</div>
  )
}

export default App;