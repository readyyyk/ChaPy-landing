import {FC} from 'react';

interface Props {
    text: string,
    author: string,
}

const Testimonial:FC<Props> = ({text, author}) => {
    return (
        <div className="h-fit rounded-md bg-zinc-100 p-6 dark:bg-zinc-800">
            <p className="italic text-zinc-500 dark:text-zinc-400">
                {text}
            </p>
            <p className="mt-4 text-sm font-bold">- {author}</p>
        </div>
    );
};

export default Testimonial;
