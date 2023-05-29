'use client';

import Image from 'next/image';

export default function Sobre() {
    return (
        <>
            <p className="my-4 text-gray-500 dark:text-gray-400">
                Seja bem-vindo à nossa galeria de fotos! Este projeto foi desenvolvido utilizando a tecnologia Svelte, como parte da disciplina de Programação III do curso de Análise e Desenvolvimento de Sistemas do Instituto Federal do Rio Grande do Sul.
            </p>
            <div className="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2">
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Nossa galeria contém vários álbuns, cada um com uma coleção única de fotos. Utilizamos a API para manipular e exibir esses dados em um formato elegante e fácil de usar, aproveitando a eficiência e agilidade do Svelte.
                </p>
                <img className="h-4/6 mx-auto" src="https://moodle.feliz.ifrs.edu.br/pluginfile.php/1/theme_adaptable/logo/1676556042/logo-campus-feliz-ifrs.png" alt="Logo IFRS Campus Feliz" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-4">
                <span className="text-3xl bold text m-auto row-start-2 sm:row-start-1">{`{JSON} Placeholder`}</span>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                    Nosso objetivo é fornecer uma experiência de visualização de fotos agradável e intuitiva para nossos usuários. Com a ajuda do Svelte, conseguimos criar uma aplicação web altamente responsiva e interativa, que permite aos usuários explorar nossos álbuns de fotos de forma fluida e rápida.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                    Este projeto foi desenvolvido com muito empenho e dedicação pela nossa equipe de desenvolvedores, que está sempre buscando utilizar as melhores tecnologias para criar soluções inovadoras e de alta qualidade. Esperamos que você goste de explorar nossa galeria de fotos tanto quanto nós gostamos de criá-la com a ajuda do Svelte!
                </p>
                <Image
                    priority
                    src="/images/next.svg"
                    height={250}
                    width={250}
                    className="m-auto"
                    alt="Logo do next.js"
                />
            </div>
        </>
    );
}