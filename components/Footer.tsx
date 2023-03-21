import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer>
            <div className="mx-auto overflow-hidden py-8 px-6 sm:py-10 lg:px-8">
                <p className="mt-8 text-center text-xs leading-5 text-gray-100 text-opacity-50">&copy; 2023 Arena Returns. All rights reserved.</p>
            </div>
        </footer>
    );
};
