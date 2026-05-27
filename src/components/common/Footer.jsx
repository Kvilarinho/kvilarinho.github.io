export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <p>© <span id="year">{year}</span> Kátia Vilarinho · Software Developer. All rights reserved.</p>
        </footer>
    );
}