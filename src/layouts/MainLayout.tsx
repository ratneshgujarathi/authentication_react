import React, { ReactNode } from 'react';
import "../assets/css/global.css"
import Navbar from '../components/core/navigation/Navbar';
import Footer from '../components/core/footer/Footer';
import Container from '../components/core/container/Container';

type Props = {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className='main-container'>
            <Navbar />
            <Container>{children}</Container>
            <Footer />
        </main>
    );
};

export default MainLayout;