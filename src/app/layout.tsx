

import "./globals.css";
import Footer from "./component/footer";
import Header from "./component/header";
import { CartProvider } from "./context/CartContext";
import "react-toastify/dist/ReactToastify.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        <CartProvider>{children}
          </CartProvider> 
        <Footer />
      </body>
    </html>
  );
}

