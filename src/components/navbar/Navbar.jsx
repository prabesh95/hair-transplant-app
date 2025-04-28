import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; 
import Logo from "../../assets/regrowe_logo.png";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const [consultationForm, setconsultationForm] = useState(false)

  // booking form
  const bookingForm = () => {
    setconsultationForm(true)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      name: "Hair Loss",
      path: "hair-loss",
      dropdown: [
        { name: "Causes", path: "causes" },
        { name: "Anti Hair Loss Treatment", path: "anti-hair-loss" }
      ],
    },
    {
      name: "Hair Transplant",
      path: "hair-transplant",
      dropdown: [
        { name: "Procedure Summary", path: "procedure-summary" },
        { name: "Hair Transplant Techniques", path: "techniques" }
      ],
    },
    {
      name: "Services",
      path: "services",
      dropdown: [
        { name: "Male Hair Transplant", path: "male-transplant" },
        { name: "Female Hair Transplant", path: "female-transplant" },
        { name: "Eyebrow Transplant", path: "eyebrow-transplant" },
        { name: "Hair Transplant Over Scar", path: "scar-transplant" },
        { name: "Beard and Moustache Transplant", path: "beard-transplant" },
        { name: "Repair of Failed Hair Transplant", path: "repair-transplant" },
        { name: "Body Hair Transplant", path: "body-hair-transplant" },
        { name: "Hairline Reconstruction", path: "hairline-reconstruction" },
        { name: "Scalp Micropigmentation", path: "scalp-micropigmentation" }
      ],
    },
    {
      name: "Patient Guide",
      path: "patient-guide",
      dropdown: [
        { name: "Before Treatment", path: "before-treatment" },
        { name: "During Treatment", path: "during-treatment" },
        { name: "Aftercare", path: "aftercare" }
      ],
    },
    {
      name: "Results",
      path: "results",
      dropdown: [
        { name: "Before & After Images", path: "gallery" },
        { name: "Client Testimonials", path: "testimonials" }
      ],
    },
    { 
      name: "About", 
      path: "about",
      dropdown: null 
    },
  ];

  return (
    <>
    
    <nav className="bg-ivory-white shadow-md fixed top-0 left-0 right-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <HashLink smooth to="/#hero-1"><img src={Logo} alt="logo" className='h-10 w-auto'/></HashLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <NavLink
                  smooth
                  to={`/${item.path}`}
                  className={({ isActive }) => 
                    `flex items-center gap-1 text-lg ${isActive ? 'text-forest-green' : 'text-stone-gray hover:text-forest-green'}`
                  }
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} />}
                </NavLink>

                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((subItem) => (
                      <HashLink
                        smooth
                        key={subItem.path}
                        to={`/${item.path}/#${subItem.path}`}
                        className="block px-4 py-2 text-stone-gray hover:bg-soft-sage hover:text-forest-green"
                      >
                        {subItem.name}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <HashLink 
              smooth
              to="/contacts#consultation-form" 
              className="bg-olive-gold hover:bg-forest-green text-ivory-white px-6 py-2 rounded-lg transition-colors"
              
            >
              Book a Consultation
            </HashLink>
          </div>
          
          

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-gray hover:text-forest-green"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-ivory-white shadow-lg pb-4">
          {navItems.map((item) => (            
            <div key={item.path} className="px-4 pt-3">
              <div className="flex flex-col">
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) => 
                    `flex justify-between items-center py-2 ${isActive ? 'text-forest-green' : 'text-stone-gray hover:text-forest-green'}`
                  }
                  onClick={() => item.dropdown ? toggleDropdown(item.path) : setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </NavLink>

                {item.dropdown && activeDropdown === item.path && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <HashLink
                        key={subItem.path}
                        to={`/${item.path}/#${subItem.path}`}
                        className="block py-2 text-stone-gray hover:bg-soft-sage rounded px-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="px-4 mt-4">
            <HashLink 
              to="/contacts#consultation-form"
              className="block w-full text-center bg-olive-gold hover:bg-forest-green text-ivory-white py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Book a Consultation
            </HashLink>
          </div>
        </div>
      )}
    </nav>
    
    
    </>
    
  );
}

export default Navbar;