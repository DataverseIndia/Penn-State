import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import { MobileNavbar } from './(navbar)/MobileNavbar';
import DesktopNavbar from './(navbar)/DesktopNavbar';

const Navbar: React.FC = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    return <>{isAboveSmallScreens ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
