import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-6 dark:bg-slate-900 mt-auto">
            <div className="mx-auto max-w-7xl px-6">
                <div className="pt-4">
                    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                        <p className="text-xs text-slate-500">© 2026 YellowPages Directory Services. All rights reserved.</p>
                        <div className="flex gap-6 text-xs text-slate-500">
                            <Link className="hover:text-primary" to="#">Privacy Policy</Link>
                            <Link className="hover:text-primary" to="#">Terms of Service</Link>
                            <Link className="hover:text-primary" to="#">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
