import "./style/globals.css";
import { DM_Sans } from "next/font/google";
import NavbarOnRoute from "./components/navbar/NavbarOnRoute";
import FooterOnRoute from "./components/footer/FooterOnRoute";
import { Providers } from "./providers";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Uplift Market",
  description: "Coba deh guys",
};

const RootLayout = ({ children }) => {
  return (
    <html
      className="scroll-smooth"
      lang="en"
      data-theme="light"
    >
      <head>
        <link
          rel="icon"
          href="/assets/icons/icon-logo-upliftmarket.png"
        />
      </head>
      <body
        className={`${dmSans.className} scrollbar custom-scrollbar`}
      >
        <Providers>
          <NavbarOnRoute />
          <main>{children}</main>
          <FooterOnRoute />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
