import { ReactElement } from 'react';

import { Props } from './types';

const Button = ({
    additionalClasses,
    clickHandler,
    isDisabled = false,
    text,
}: Props): ReactElement => {
    const disabledClasses = 'disabled:bg-red-300';
    const hoverClasses = 'hover:bg-red-300';
    const transitionClasses = 'ease-in duration-300';
    const buttonClasses = `p-2 border-2 border-black bg-red-500 text-white rounded min-w-[150px] ${transitionClasses} ${hoverClasses} ${disabledClasses} ${additionalClasses}`;

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
