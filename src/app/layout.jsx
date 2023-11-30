import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "ORIGIN.Doc",
  description: "ORIGIN.Docのウェブサイトです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
