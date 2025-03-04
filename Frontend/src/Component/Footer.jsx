import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 py-10 ">
            <div className="container mx-auto text-center">
                <p className="text-lg text-gray-400">&copy; 2025 ArrayLogic Software Pvt. Ltd. All rights reserved.</p>

                <nav className="mt-4 flex justify-center space-x-6">
                    <NavLink to="/privacypolicy" className="text-gray-400 hover:text-white transition">
                        Privacy Policy
                    </NavLink>
                    <NavLink to="/teamservice" className="text-gray-400 hover:text-white transition">
                        Terms of Service
                    </NavLink>
                    <NavLink to="/contact" className="text-gray-400 hover:text-white transition">
                        Contact Us
                    </NavLink>
                </nav>

                <div className="social-media mt-6 flex justify-center space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
