'use client';
import { Navbar } from "flowbite-react";


export default function Header() {
    return (
        <header className="container py-3">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand
                    to="/"
                >
                    <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Galleria
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/">Home</Navbar.Link>
                    <Navbar.Link href="/fotos">Fotos</Navbar.Link>
                    <Navbar.Link href="/sobre">Sobre</Navbar.Link>
                    <Navbar.Link href="/contato">Contato</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}