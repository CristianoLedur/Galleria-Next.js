'use client';
import Head from 'next/head';
import { metadata } from '../layout';

export default function Contato() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Entre em contato</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tem um problema técnico? Deseja enviar feedback sobre um recurso beta? Precisa de detalhes sobre nosso plano de negócios? Nos informe.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="exemplo@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Deixe-nos saber como podemos ajudá-lo" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua menssagem</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deixe um comentário..."></textarea>
                        </div>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar mensagem</button>
                    </form>
                </div>
            </section>
        </>
    );
}