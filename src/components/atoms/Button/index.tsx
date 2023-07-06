import { ReactElement } from 'react';

import { ROUNDED_FULL } from '@/constants';

import { Props } from './types';

const Button = ({
    additionalClasses,
    clickHandler,
    isDisabled = false,
    text,
    type = '',
}: Props): ReactElement => {
    const disabledClasses = 'disabled:bg-red-300';
    const hoverClasses = 'hover:bg-red-300';
    const transitionClasses = 'ease-in duration-300';
    const rounded = type === ROUNDED_FULL ? 'rounded-full' : 'rounded';
    const width = type === ROUNDED_FULL ? 'min-w-[80px]' : 'min-w-[150px]';
    const buttonClasses = `p-2 border-2 border-black bg-red-500 text-white ${width} ${rounded} ${transitionClasses} ${hoverClasses} ${disabledClasses} ${additionalClasses}`;

    return (
        <button
            className={buttonClasses}
            disabled={isDisabled}
            onClick={clickHandler}
        >
            {text}
        </button>
    );
};

export default Button;
