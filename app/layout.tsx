import type {Metadata, ResolvingMetadata} from "next";
import "@/styles/app.css";
import AppProvider from "@/components/providers/app.provider";
import NextTopLoader from "nextjs-toploader";
import config from "@/lib/config";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    {params, searchParams }: Props, parent: ResolvingMetadata
): Promise<Metadata> {

  console.log(params)
  console.log(searchParams)
  console.log(parent)

  return {
    title: {
      template: `%s | ${config.appName}`,
      default: config.appName,
    },
    keywords: ["saas", "software", "startup", "digital product",  "marketing", "it solutions"],
    description: config.appDescription,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: config.appUrl,
      title: config.appName,
      description: config.appDescription,
      images: [
        {
          url: "https://flowwats.com/flowwats.png",
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.appName,
      description: config.appDescription,
      images: ["https://flowwats.com/flowwats.png"],
    },
  };

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
        <AppProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                  token: {
                    colorPrimary: '#13715B',
                  }
              }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </AppProvider>
        <NextTopLoader/>
      </body>
      </html>
  );
}
