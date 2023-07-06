import { Inter } from 'next/font/google'
import { ReactElement } from 'react';

import { Footer, Navbar } from '@/components';

import { Props } from './types';

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: Props): ReactElement => {
    return (
        <div className={inter.className}>
            <Navbar />
            <main className="min-h-[88vh] container mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
