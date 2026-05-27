import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function HomePage() {
    useScrollAnimation();

    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}