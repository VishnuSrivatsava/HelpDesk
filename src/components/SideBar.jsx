import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '../data/constdata';
import { useStateContext } from '../contexts/ContextProvider'; 
import Tippy from '@tippyjs/react';
import { AiFillCar } from 'react-icons/ai';

const SideBar = (props) => {

    const {   activeMenu, setActiveMenu, screenSize, 
         } = useStateContext();
    

    
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-green  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-black-700 dark:text-black-200 dark:hover:text-white hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="flex items-center justify-center text-2xl
            h-14 bg-black-600 text-black font-bold">
              <AiFillCar className="h-5 w-5"/> <span>HelpDesk</span>
            </Link>
            <Tippy content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tippy>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-black-400 dark:text-black-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                     {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;