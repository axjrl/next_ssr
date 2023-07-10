"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../../components/Header/Header";
import {usePathname} from "next/navigation";
import Provider from "../../store/provider";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <Provider>
          <html lang="en">
              <head>
                  <link rel="manifest" href="/manifest.json"/>
                  <title>PokeTest</title>
              </head>
              <body className={inter.className}>
                <Header/>
                {children}
              </body>
          </html>
      </Provider>
  )
}
