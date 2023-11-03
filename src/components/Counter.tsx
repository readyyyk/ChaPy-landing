import React from 'react';
import {useAppSelector} from '../hooks';
import {selectCount} from '../store/counterSlice';

const Counter: React.FC = () => {
    console.log('counter');
    const count = useAppSelector(selectCount);
    return <span> Count: {count} </span>;
};

export default Counter;
