import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [navigation, setNavigation] = useState([
        { name: 'Home', to: '/#home', current: true },
        { name: 'About', to: '/#about', current: false },
        { name: 'Services', to: '/#services', current: false },
        { name: 'Portfolio', to: '/#portfolio', current: false },
        {
          name: 'Dropdown', 
          to: '/#home', 
          current: false, 
          isOpen: false,
          dropdown: [
            { name: 'Dropdown 1', to: '/#home' },
            { 
              name: 'Deep Dropdown', 
              to: '/#home', 
              isOpen: false,
              dropdown: [
                { name: 'Deep Dropdown 1', to: '/#home' },
                { name: 'Deep Dropdown 2', to: '/#home' },
                { name: 'Deep Dropdown 3', to: '/#home' },
                { name: 'Deep Dropdown 4', to: '/#home' },
                { name: 'Deep Dropdown 5', to: '/#home' },
              ]
            }, 
            { name: 'Dropdown 2', to: '/#home' },
            { name: 'Dropdown 3', to: '/#home' },
            { name: 'Dropdown 4', to: '/#home' }
          ]
        },
        { name: 'Contact', to: '/#contact', current: false }
      ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setNavigation(prevNavigation =>
      prevNavigation.map(item => {
        if (item.name === name) {
          return { ...item, isOpen: !item.isOpen };
        }
        if (item.dropdown) {
          return {
            ...item,
            dropdown: item.dropdown.map(subItem => 
              subItem.name === name
                ? { ...subItem, isOpen: !subItem.isOpen }
                : subItem
            )
          };
        }
        return item;
      })
    );
  };

  const handleLinkClick = (item) => {
    const targetElement = document.getElementById(item.to.substring(2));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNavigation(prevNavigation =>
      prevNavigation.map(navItem => ({
        ...navItem,
        current: navItem === item,
      }))
    );
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.to.substring(2));
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      let activeItem = entries[0];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeItem = navigation.find(navItem => navItem.to.substring(2) === entry.target.id);
        }
      });

      setNavigation((prevNavigation) =>
        prevNavigation.map((navItem) => ({
          ...navItem,
          current: navItem === activeItem,
        }))
      );
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [navigation]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // sm breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 left-0 items-center justify-between py-5 flex w-full bg-black z-10">
      <div className="items-center relative mx-auto w-full">
        <div className="flex items-center justify-between mx-auto px-6 py-2 lg:px-28">
          <div className="flex justify-center sm:justify-between flex-shrink-0 items-center">
            <Link to="#" onClick={() => handleLinkClick(navigation[0])}>
              <h1 className="text-white text-3xl font-bold">DevFolio</h1>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="inset-y-0 left-0 flex justify-between items-center lg:hidden">
              {/* Mobile menu Link */}
              <Link
                className="inline-flex items-center justify-between rounded-md text-white z-20"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} />
                <XMarkIcon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} />
              </Link>
            </div>
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex gap-4 space-x-1 sm:space-x-4">
                {navigation.map((item,id) => (
                  <div 
                  key={id}
                  className='group'>
                  <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => handleLinkClick(item)}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    'text-white',
                    'rounded-md flex flex-col relative font-normal' // Added group to parent
                  )}
                >
                  <div className='flex items-center group/child justify-between gap-1'>
                    {item.name}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`rounded-full block w-4 text-white ${item.dropdown ? 'block' : 'hidden'} group-hover:rotate-180 transition-all duration-300 ease-in-out`} // Icon rotation on hover
                    />
                  </div>
                  <div
                    className={classNames(
                      item.current ? 'bg-white h-[2px] overflow-hidden transition-all duration-500 ease-in-out w-full' : 'bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out'
                    )}
                  />
                  </Link> 
                  {/* Dropdown content on hover */}
                  {item.dropdown && (
                    <div className="absolute z-50 mt-2 py-2 w-48 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdown.map((subItem, id) => (
                        <div 
                        key={id}
                        className='relative group/drop'>
                        <Link
                          key={subItem.name}
                          onClick={() => handleLinkClick(subItem)}
                          to={subItem.to}
                          className="block  px-4 py-2 text-base text-black hover:text-blue-500 transition-all duration-500 ease-in-out"
                        >
                          <div className='flex items-center justify-between gap-1'>
                            {subItem.name}
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`rounded-full block w-4 text-black ${subItem.dropdown ? 'block' : 'hidden'} group-hover/drop:rotate-180 group-hover/drop:text-blue-500 transition-all duration-500 ease-in-out`} // Icon rotation on hover
                            />
                          </div>
                          </Link>
                          {/* Deep dropdown (opens to the left of the current dropdown) */}
                          {subItem.dropdown && (
                            <div className="absolute right-full top-0 z-50 py-2 w-48 bg-white rounded-md shadow-md opacity-0 invisible group-hover/drop:opacity-100 group-hover/drop:visible transition-all duration-300 ease-in-out">
                              {subItem.dropdown.map((deepItem) => (
                                <Link
                                  key={deepItem.name}
                                  onClick={() => handleLinkClick(deepItem)}
                                  to={deepItem.to}
                                  className="block px-4 py-2 text-base text-black hover:text-blue-500 transition-all duration-500 ease-in-out"
                                >
                                  {deepItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        
                        </div>
                      ))}
                    </div>
                  )}
                     
                </div>    
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={classNames(
          mobileMenuOpen ? 'h-full w-full' : 'hidden',
          'bg-black bg-opacity-30 lg:hidden fixed top-0 flex items-center justify-center pb-20'
        )}
      >
        <div className="bg-white overflow-y-auto mt-32 h-full w-full rounded-md mx-6 flex flex-col gap-2 justify-start items-start py-3">
          {navigation.map((item,id) => (
            <div key={id} className='flex flex-col w-full'>
            <div className='w-full flex items-center justify-between px-5 py-2'>  
            <Link
              key={item.name}
              to={item.to}
              onClick={() => handleLinkClick(item)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                  item.current? 'text-blue-500' :'text-black',
                  'rounded-md  text-lg font-medium hover:text-blue-500 transition-all duration-300 ease-in-out'
                )}
                >
              {item.name}
            </Link>
              <ChevronDownIcon aria-hidden="true" onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(item.name);
                }}
                className={`p-2 h-7 w-7 text-sm rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out ${item.dropdown ? 'block' : 'hidden'} ${item.isOpen? 'rotate-180':''}`}/>
            </div>
            {item.isOpen && item.dropdown && (
                <div className="my-2 mx-5 w-auto rounded-md bg-opacity-55 bg-gray-100">
                  {item.dropdown.map(subItem => (
                    <>
                    <div className='w-full flex items-center justify-between px-5 py-3'>  
                    <Link
                      to={subItem.to}
                      onClick={()=>setMobileMenuOpen(false)}
                      key={subItem.name}
                      className='rounded-md  text-lg font-medium hover:text-blue-500 transition-all duration-300 ease-in-out'
                    >
                      {subItem.name}
                    </Link>
                      {subItem.dropdown && (
                    <ChevronDownIcon
                      aria-hidden="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(subItem.name);
                      }}
                      className={`p-2 h-7 w-7 ml-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out ${
                        subItem.isOpen ? 'rotate-180' : ''
                      }`}
                    />
                    )}
                    </div>
                  {/* Deep Dropdown rendering */}
                  {subItem.isOpen && subItem.dropdown && (
                    <div className="my-2 mx-5 w-auto  rounded-md bg-opacity-55 bg-gray-200">
                      {subItem.dropdown.map(deepItem => (
                        <Link
                          to={deepItem.to}
                          onClick={()=>setMobileMenuOpen(false)}
                          key={deepItem.name}
                          className='rounded-md px-5 py-2 text-lg w-full flex items-center justify-between font-medium hover:text-blue-500 transition-all duration-300 ease-in-out'
                        >
                          {deepItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                    </>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}