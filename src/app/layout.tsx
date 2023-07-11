"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Header from "../../components/Header/Header";
import Provider from "../../store/provider";
import React, {useEffect} from "react";
import init from "@socialgouv/matomo-next";

const MATOMO_URL = "https://iscope.matomo.cloud/";
const MATOMO_SITE_ID = "3";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    useEffect(() => {
        init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }, []);
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
