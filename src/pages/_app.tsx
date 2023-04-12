import "./index.css"
import "nprogress/nprogress.css"

import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { appWithTranslation } from "next-i18next"
import NProgress from "nprogress"
import { useEffect } from "react"

import useNProgressColor from "@/hooks/useNProgressColor"
function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // nprogress 路由控制
  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start())
    router.events.on("routeChangeComplete", () => NProgress.done())
    router.events.on("routeChangeError", () => NProgress.done())
  }, [router.events])
  // 修改nprogress color
  useNProgressColor("#960202")

  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(App)
