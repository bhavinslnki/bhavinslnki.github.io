// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'
// import { ThemeProvider as NextThemesProvider } from 'next-themes'

// const ThemeProviderContext = createContext({
//   theme: 'system',
//   setTheme: () => null,
// })

// export function ThemeProvider({ children, ...props }) {
//   const [theme, setTheme] = useState('system')

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'system'
//     setTheme(savedTheme)
//   }, [])

//   return (
//     <ThemeProviderContext.Provider value={{ theme, setTheme }}>
//       <NextThemesProvider {...props}>
//         {children}
//       </NextThemesProvider>
//     </ThemeProviderContext.Provider>
//   )
// }

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

