import { ReactElement, useEffect, useState } from 'react';

import { Button } from '@/components';
import { MAX_LIMIT, PAGE_SIZE, ROUNDED_FULL } from '@/constants';

import { Props } from './types';

const Pagination = ({ currentPage, changePage }: Props): ReactElement => {
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true); // by default we start on page 1
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        updateButtonStatus();
    }, [currentPage]);

    const updateButtonStatus = () => {
        // Set the status of the previous page
        if (currentPage === 1) {
            setIsPreviousDisabled(true);
        } else {
            setIsPreviousDisabled(false);
        }

        const totalPages = Math.ceil(MAX_LIMIT / PAGE_SIZE);

        // Set the status of the next page
        if (currentPage === totalPages) {
            setIsNextDisabled(true);
        } else {
            setIsNextDisabled(false);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <Button
                    clickHandler={() => changePage(currentPage - 1)}
                    isDisabled={isPreviousDisabled}
                    text="Previous"
                    type={ROUNDED_FULL}
                />

                <div className="mx-4">
                    {currentPage}
                </div>

                <Button
                    clickHandler={() => changePage(currentPage + 1)}
                    isDisabled={isNextDisabled}
                    text="Next"
                    type={ROUNDED_FULL}
                />
            </div>
        </div>
    )
};

export default Pagination;
