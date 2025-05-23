import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/core/css/globals.css";
import { ClientProviders } from "@/core/providers/client-providers";
import "@/core/css/globals.css";
// import { dir } from "i18next"
// import { languages } from "@/app/i18n/settings";

export async function generateStaticParams() {
  // return languages.map((lng) => ({ lng }));
  
}

const kanit = Kanit({
  weight: ["300", "400", "500", "600"],
  subsets: ["thai"],
  display: "swap",
});

interface MetaDataResponse {
  status: string;
  data: {
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    meta_image: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/v1/meta-data`
    );
    const { data }: MetaDataResponse = await res.json();

    console.log(res);

    return {
      title: data.meta_title,
      description: data.meta_description,
      keywords: data.meta_keywords,
      openGraph: {
        images: [data.meta_image],
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Fallback Title",
      description: "Fallback Description",
    };
  }
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    // <html lang={lng} dir={dir(lng)}>
    <html>
      <head>
        <link
          rel="preload"
          href="/path/to/your/svg/assets"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className={`${kanit.className} antialiased`}>
        <ClientProviders lng={lng}>{children}</ClientProviders>
      </body>
    </html>
  );
}
