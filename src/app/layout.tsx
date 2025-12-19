import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Web3 Portfolio",
  description: "Web3 developer portfolio with live demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
