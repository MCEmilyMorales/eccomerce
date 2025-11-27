import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { AuthProvider } from "./hooks/authContext";
import { CartProvider } from "./hooks/cartContext";
import { ToastProvider } from "./hooks/toastContext";
import ToastContainer from "./toast/toastContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    /**Layout raíz */
  }
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <ToastProvider>
              {/** navbar */}
              <Navbar />
              {children}
              {/** footer */}
              <Footer />
              <ToastContainer />
            </ToastProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
