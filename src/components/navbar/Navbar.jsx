import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; 
import Logo from "../../assets/regrowe_logo.png";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleMobileNavClick = (item, e) => {
    if (item.dropdown) {
      e.preventDefault();
      toggleDropdown(item.path);
    } else {
      setIsOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
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
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm' 
            : 'bg-ivory-white shadow-md'
        }`}
      >
         <div className="max-w-7xl mx-auto px-3 lg:px-0">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">      
              <HashLink smooth to="/hair-loss#hero-1">
                <img src={Logo} alt="logo" className='h-9 w-auto'/> {/* Reduced from h-10 */}
              </HashLink>
            </div>

            {/* Desktop Menu - Modified spacing and font size */}
            <div className="hidden xl:flex items-center space-x-5"> {/* Reduced from space-x-8 */}
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.dropdown ? (
                    <>
                      <HashLink
                        smooth
                        to={`/${item.path}#${item.path}`}
                        className="flex items-center gap-1 text-stone-gray hover:text-forest-green font-semibold text-[16px]" // Reduced from text-lg
                      >
                        {item.name}
                        <ChevronDown size={16} /> {/* Reduced from size 18 */}
                      </HashLink>

                      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                        {item.dropdown.map((subItem) => (
                          <HashLink
                            smooth
                            key={subItem.path}
                            to={`/${item.path}#${subItem.path}`}
                            className="block px-4 py-2 text-stone-gray hover:bg-soft-sage hover:text-forest-green font-medium text-base"
                          >
                            {subItem.name}
                          </HashLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <HashLink
                      smooth
                      to={`/${item.path}#${item.path}`}
                      className="flex items-center gap-1 text-stone-gray hover:text-forest-green font-semibold text-[16px]" // Reduced from text-lg
                    >
                      {item.name}
                    </HashLink>
                  )}
                </div>
              ))}

              <HashLink 
                smooth
                to="/contacts#consultation-form" 
                className="bg-olive-gold hover:bg-forest-green text-ivory-white px-4 py-1.5 rounded-lg transition-colors font-semibold text-[16px]" // Reduced padding and font size
              >
                Book a Consultation
              </HashLink>
            </div>

            {/* Mobile Menu Button remains the same */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
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
           <div className="xl:hidden bg-ivory-white shadow-lg pb-4 fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto">
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {navItems.map((item) => (            
          <div key={item.path} className="px-4 pt-3">
            <div className="flex flex-col">
              {item.dropdown ? (
                <>
                  <div
                    className="flex justify-between items-center py-2 text-stone-gray hover:text-forest-green cursor-pointer"
                    onClick={(e) => handleMobileNavClick(item, e)}
                  >
                    <span className="font-semibold text-lg">{item.name}</span>
                    <ChevronDown 
                      size={20}
                      className={`transition-transform ${
                        activeDropdown === item.path ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {activeDropdown === item.path && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <HashLink
                          smooth
                          key={subItem.path}
                          to={`/${item.path}#${subItem.path}`}
                          className="block py-2 text-stone-gray hover:bg-soft-sage rounded px-2 font-medium text-base"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </HashLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <HashLink
                  smooth
                  to={`/${item.path}#${item.path}`}
                  className="block py-2 text-stone-gray hover:text-forest-green font-semibold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </HashLink>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-4 sticky bottom-0 bg-ivory-white border-t border-gray-200">
        <HashLink 
          smooth
          to="/contacts#consultation-form"
          className="block w-full text-center bg-olive-gold hover:bg-forest-green text-ivory-white py-2 rounded-lg font-semibold text-lg"
          onClick={() => setIsOpen(false)}
        >
          Book a Consultation
        </HashLink>
      </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;