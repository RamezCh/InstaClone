import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../../../assets/navlogo/home.png';
import ExploreLogo from '../../../assets/navlogo/explore.png';
import ReelsLogo from '../../../assets/navlogo/reel.png';
import MessagesLogo from '../../../assets/navlogo/message.png';
import CreateLogo from '../../../assets/navlogo/create.png';
import ProfilePic from '../../../assets/profile-pic.jpg';

const MobileNav = () => {
  const sidebarItems = [
    {
      link: '/explore',
      icon: ExploreLogo,
    },
    {
      link: '/reels',
      icon: ReelsLogo,
    },
    {
      link: '/create',
      icon: CreateLogo,
    },
    {
      link: '/messages',
      icon: MessagesLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center gap-x-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src={HomeLogo}
              alt="Home icon"
              className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            />
          </Link>
          {/* Loop other Nav Links */}
          {sidebarItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-6 h-6 object-contnain group-hover:scale-105 ease-out duration-300"
              />
            </Link>
          ))}
          {/* Profile Section */}
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src={ProfilePic}
              alt="profile icon"
              className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
