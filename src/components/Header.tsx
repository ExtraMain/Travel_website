import React, { useState, useEffect } from "react";
import { Search, Menu, X, Phone, Mail, ChevronDown, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" size={16} />
              <span>Hotline: 0123456789</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={16} />
              <span>Email: info@nhom12.com</span>
            </div>
          </div>
          <div className="user-actions">
            <Link to="/account" className="user-action-link">
              Đăng nhập
            </Link>
            <span className="separator">|</span>
            <Link to="/register" className="user-action-link">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="main-header-container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <h1 className="logo">Nhom12 Travel</h1>
            </Link>
          </div>

          <nav className={`main-navigation ${mobileMenuOpen ? "menu-open" : ""}`}>
            <button className="close-menu" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/tours" className="nav-link">
                  Tour du lịch <ChevronDown size={16} className="dropdown-icon" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/tours/MienBac">Tour Miền Bắc</Link></li>
                  <li><Link to="/tours/MienTrung">Tour Miền Trung</Link></li>
                  <li><Link to="/tours/MienNam">Tour Miền Nam</Link></li>
                  <li><Link to="/tours/VIP">Tour Vip Miền</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/destinations" className="nav-link">
                  Điểm đến
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotels" className="nav-link">
                  Khách sạn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="action-button search-button">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="action-button wishlist-button">
              <Heart size={20} />
              <span className="badge">2</span>
            </Link>
            <Link to="/cart" className="action-button cart-button">
              <ShoppingBag size={20} />
              <span className="badge">0</span>
            </Link>
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

