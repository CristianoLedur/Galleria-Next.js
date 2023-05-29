'use client';
import { Footer } from "flowbite-react";

export default function FooterComponent() {
    return (
        <Footer 
            className="container"
            container={true}
        >
            <Footer.Copyright
                href="/"
                by="Galleria"
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="/fotos">
                    Fotos
                </Footer.Link>
                <Footer.Link href="/sobre">
                    Sobre
                </Footer.Link>
                <Footer.Link href="/contato">
                    Contato
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}