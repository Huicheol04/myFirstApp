import "./globals.css";

export const metadata = {
  title: "Modern Web App",
  description: "로그인하여 서비스를 이용하세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
