import { Card } from 'flowbite-react';

export default function Image({ url, title }) {
    return (
        <div className="max-w-sm mx-auto">
            <Card imgSrc={url} alt={title} className="h-[520px]">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </Card>
        </div>
    );
}