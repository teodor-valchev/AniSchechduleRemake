import React from "react";

const Footer = () => {
    return (
        <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
            <div className="container p-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center">
                    {/* <!--First links section--> */}
                    <div className="mb-6">
                        <a
                            href="https://animeschedule.net/contact"
                            className="mb-2.5 font-bold text-neutral-800 dark:text-neutral-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* <!--Third links section--> */}
                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold text-neutral-800 dark:text-neutral-200">
                            Privacy
                        </h5>
                    </div>

                    {/* <!--Fourth links section--> */}
                    <div className="mb-6">
                        <h5 className="mb-2.5 font-bold text-neutral-800 dark:text-neutral-200">
                            Terms
                        </h5>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                © 2024 Copyright:
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://tw-elements.com/"
                >
                    TW Elements
                </a>
            </div>
        </footer>
    );
};

export default Footer;
