import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${montserrat.variable} antialiased`}>{children}</body>
        </html>
    );
}