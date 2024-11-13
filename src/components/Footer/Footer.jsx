import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-left">
                    {/* First links section */}
                    <div className="mb-6">
                        <a
                            href="https://animeschedule.net/contact"
                            className="text-2xl font-semibold hover:text-yellow-400 transition duration-300 font-[\'Press Start 2P\', sans-serif]"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Privacy Section */}
                    <div className="mb-6">
                        <h5 className="text-xl font-semibold mb-2 font-[\'Press Start 2P\', sans-serif]">
                            Privacy
                        </h5>
                        <p className="text-sm text-neutral-200 font-[\'Press Start 2P\', sans-serif]">
                            Your privacy is important to us. Read our privacy
                            policy for more details.
                        </p>
                    </div>

                    {/* Terms Section */}
                    <div className="mb-6">
                        <h5 className="text-xl font-semibold mb-2 font-[\'Press Start 2P\', sans-serif]">
                            Terms
                        </h5>
                        <p className="text-sm text-neutral-200 font-[\'Press Start 2P\', sans-serif]">
                            Please review our terms and conditions for using
                            this site.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-neutral-800 p-4 text-center text-neutral-400">
                <p className="text-sm font-[\'Press Start 2P\', sans-serif]">
                    © 2024 Copyright:
                    <a
                        className="text-white hover:text-yellow-400 transition duration-300 font-[\'Press Start 2P\', sans-serif]"
                        href="https://tw-elements.com/"
                    >
                        TW Elements
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
