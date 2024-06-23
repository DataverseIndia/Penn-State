import useMediaQuery from '@/hooks/use-media-query';
import React from 'react';
import { MobileNavbar } from '../../../components/global/mobile-navbar';
import DesktopNavbar from '../../../components/global/desktop-navbar';

const Navbar: React.FC = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    return <>{isAboveSmallScreens ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
