import { Link } from '@nextui-org/react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            <div className="footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </footer>
    );
};

export default Footer;
