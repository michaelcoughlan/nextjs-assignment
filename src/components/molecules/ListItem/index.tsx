import { ReactElement } from 'react';

import { Button } from '@/components';

import { Props } from './types';
import Link from 'next/link';

const ListItem = ({ id, name }: Props): ReactElement => {
    return (
        <div className="flex items-center justify-between p-2 border-2 border-black mb-4">
            <h3 className="capitalize">#{id} {name}</h3>
            <Link href={`/pokemon/${id}`}><Button text="View" /></Link>
        </div>
    ); 
};

export default ListItem;
