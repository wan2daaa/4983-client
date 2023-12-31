import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  /**
   * FIXME : 추후 아이콘 수정 필요
   * icon ~ apple-touch-icon
   */
  render() {
    return (
      <Html lang="ko">
        {/* FIXME : 추후 수정 필요 */}
        <Head>
          <meta name="application-name" content="사고파삼" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="사고파삼" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="단국대 중고서적 거래 플랫폼 4983입니다!"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/icon/4983-icon.png"
          />
          <link rel="shortcut icon" href="/assets/icon/4983-icon.png" />

          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphoneplus_splash.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphonexr_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/iphonexsmax_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/ipad_splash.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/ipadpro1_splash.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/ipadpro3_splash.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/assets/splashscreens/ipadpro2_splash.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          />

          <link rel="apple-touch-icon" href="/assets/icon/4983-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/icon/4983-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/assets/icon/4983-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/icon/4983-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
