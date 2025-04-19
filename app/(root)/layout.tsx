import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
    title: 'Next Burger',
    description: 'my burger app',
};

export default function Layout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            {modal}
            {children}
            <Footer />
        </main>
    );
}