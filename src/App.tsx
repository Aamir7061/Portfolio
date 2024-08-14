import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(()=>{
    AOS.init();
  },[]);
  const theme = createTheme({
    breakpoints: {
      'xsm': '320px',
      'xs': '470px',
      'sm': '640px',
      'md': '829px',
      'bs': '936px',
      'lg': '1177px',
      'xl': '1280px',
      '2xl': '1536px',
      // 'xs': '320px',
      // 'sm': '476px',
      // 'md': '640px',
      // 'bs': '768px',
      // 'lg': '900px',
      // 'xl': '1024px',
      // '2xl': '1280px',
    },
  })
  return (
    <MantineProvider theme={theme}>
    <HomePage/>
    </MantineProvider>
  );
}

export default App;
