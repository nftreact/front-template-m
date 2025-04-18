import type { Metadata } from 'next'
import '../src/theme/globals.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import BottomNavigation from '@/layout/BottomNavigation'

import { sans } from '../src/theme/font.config'

import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'

import muiTheme from '../src/theme/custom-theme'
import { Suspense } from 'react'
import { ReactQueryProvider } from '@/libs'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={sans.variable} lang='fa' dir='rtl'>
      <body>
        <ReactQueryProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Suspense>
                <Header />
                <main>{children}</main>
                <Footer />
                <BottomNavigation />
              </Suspense>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
