import React from 'react';
import { Header } from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';
import { BackgroundParticles } from './components/particles/particles';
import { Footer } from './components/footer/footer';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        {/* <Head /> */}
        <head />
        <body>
            <Header />
            {children}
            <hr/>
            <Footer />
            <BackgroundParticles />
        </body>
      </html>
    )
  }