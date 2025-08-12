import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import headerLogo from '../assets/headerLogo.svg';
import searchIcon from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchToggle = () => {
    setShowSearch(prev => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    const params = new URLSearchParams(location.search);
    if (value.trim()) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    navigate(`${location.pathname}?${params.toString()}`);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop-page", label: "Shop" },
    { to: "/categories", label: "Categories" },
    { to: "/about-us", label: "About" },
    { to: "/contact-us", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white px-4 md:px-8 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <img src={headerLogo} alt="Logo" className="h-8 w-auto" />
      </div>

      <nav className="hidden md:flex gap-8 flex-grow justify-center">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm uppercase tracking-wide font-medium transition-colors duration-200 ${
              location.pathname === link.to
                ? "text-[#222] border-b-2 border-[#222] font-bold"
                : "text-[#a3a3a3] hover:text-[#222]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 md:gap-6">
        <button onClick={handleSearchToggle} className="border-none bg-transparent">
          <img src={searchIcon} alt="Search" className="w-6 h-6 hover:opacity-70" />
        </button>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
            autoFocus
            className="w-[150px] px-3 py-1.5 text-sm border border-gray-300 rounded-md transition-all duration-300 focus:outline-none"
          />
        )}

        <Link to="/my-account">
          <img src={account} alt="Account" className="w-6 h-6 hover:opacity-70" />
        </Link>

        <Link to="/cart">
          <img src={bag} alt="Cart" className="w-6 h-6 hover:opacity-70" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
