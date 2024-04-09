import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Router } from './Router';
import { CyclesContextProvider } from './contexts/CycleContext';





export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <CyclesContextProvider>
       <Router/>
       </CyclesContextProvider>
 
     
      </BrowserRouter>
    <GlobalStyled/>
    </ThemeProvider>
  )
}

