import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Uplift Market",
  description: "Project Tim 4",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
