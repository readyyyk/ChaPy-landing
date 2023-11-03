import {FC, ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';


interface Props {
    className: string,
    elementClassName: string,
    cols: number,
    rows: number,
}

const Feature:FC<Props> = ({cols, rows, elementClassName, className}) => {
    const rowsElements: ReactNode[] = [];
    for (let i=0; i<rows; i++) {
        rowsElements.push(
            <td className={
                twMerge('w-10 md h-10 md:w-24 md:h-24 border border-slate-600 aspect-square', elementClassName)
            }></td>,
        );
    }

    const colsElements: ReactNode[] = [];
    for (let i=0; i<cols; i++) {
        colsElements.push(<tr>{...rowsElements}</tr>);
    }

    return (
        <div className={twMerge('absolute -left-1 -top-1 z-10', className)}>
            <table className='feature-mask'>
                <tbody>
                    {...colsElements}
                </tbody>
            </table>
        </div>
    );
};

export default Feature;
