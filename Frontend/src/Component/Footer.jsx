import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-cyan-100/70 py-10 mt-12">
            <div className="container mx-auto text-center">
                <p className="text-lg">&copy; 2025 ArrayLogic Software Pvt. Ltd. All rights reserved.</p>
                <div className="footer-links mt-4">
                    <a href="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</a>
                    <a href="/terms-of-service" className="mx-2 hover:underline">Terms of Service</a>
                    <NavLink to={"/contact"} className="mx-2 hover:underline">Contact-us</NavLink>
                </div>
                <div className="social-media mt-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
