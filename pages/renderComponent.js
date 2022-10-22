import React from 'react'
import HeaderComponent from "./Components/Header/Header.js"
import FooterComponent from "./Components/Footer/Footer.js"
import BannerComponent from "./Components/Footer/Footer.js"

export const renderComponent = (renderName) => {
let Components = {HeaderComponent,FooterComponent,BannerComponent}
let render = Components[renderName]
return React.createElement(render)
	
}