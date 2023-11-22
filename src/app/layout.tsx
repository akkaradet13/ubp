import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import { Providers } from "@/app/providers";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["latin", "latin-ext", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UBP ERP",
  description: "ระบบบันทึกข้อมูลกาก",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="light">
      <body className={sarabun.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
