import Layout from '../components/common/Layout'
import HeroSection from '../components/home/HeroSection'
import usePageAnimation from '../hooks/usePageAnimation'

export default function HomePage() {
    const visible = usePageAnimation()

    return (
        <Layout>
            <HeroSection visible={visible} />
        </Layout>
    )
}