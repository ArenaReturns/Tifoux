import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer>
            <div className="mx-auto overflow-hidden py-8 px-6 sm:py-10 lg:px-8">
                <p className="mt-8 text-center text-xs leading-5 text-gray-100 text-opacity-50">Copyright &copy; 2021 - 2023 Arena Returns.<br />Arena Returns est un serveur non-officiel sous l'autorisation d'Ankama.<br />Certaines images sont la propriété d'Ankama - Tous droits réservés.</p>
            </div>
        </footer>
    );
};
