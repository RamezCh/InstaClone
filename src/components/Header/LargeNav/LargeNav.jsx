import React from 'react';
import { Link } from 'react-router-dom';
// Impoprt Logo & Icons
import InstagramLogo from '../../../assets/logo/instagram.png';
import HomeLogo from '../../../assets/navlogo/home.png';
import SearchLogo from '../../../assets/navlogo/search.png';
import ExploreLogo from '../../../assets/navlogo/explore.png';
import ReelsLogo from '../../../assets/navlogo/reel.png';
import MessagesLogo from '../../../assets/navlogo/message.png';
import NotificationsLogo from '../../../assets/navlogo/like.png';
import CreateLogo from '../../../assets/navlogo/create.png';
import ThreadsLogo from '../../../assets/navlogo/threads.png';
import MoreLogo from '../../../assets/navlogo/more.png';
import ProfilePic from '../../../assets/profile-pic.jpg';

const LargeNav = () => {
  const sidebarItems = [
    {
      name: 'Search',
      link: '/search',
      icon: SearchLogo,
    },
    {
      name: 'Explore',
      link: '/explore',
      icon: ExploreLogo,
    },
    {
      name: 'Reels',
      link: '/reels',
      icon: ReelsLogo,
    },
    {
      name: 'Messages',
      link: '/messages',
      icon: MessagesLogo,
    },
    {
      name: 'Notifications',
      link: '/notifications',
      icon: NotificationsLogo,
    },
    {
      name: 'Create',
      link: '/create',
      icon: CreateLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-full relative">
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="w-28 h-auto"
          />
        </Link>
        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 roudned-md ease-out duration-500 group"
          >
            <img
              src={HomeLogo}
              alt="home icon"
              className="w-6 h-6 object-contnain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-semibold text-white lg:block md_hidden sm:hidden hidden">
              Home
            </p>
          </Link>
          {/* Loop other Nav Links */}
          {sidebarItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 roudned-md ease-out duration-500 group"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-6 h-6 object-contnain group-hover:scale-105 ease-out duration-300"
              />
              <p className="text-base font-medium text-white lg:block md_hidden sm:hidden hidden">
                {item.name}
              </p>
            </Link>
          ))}
          {/* Profile Section */}
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 roudned-md ease-out duration-500 group"
          >
            <img
              src={ProfilePic}
              alt="profile icon"
              className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md_hidden sm:hidden hidden">
              Profile
            </p>
          </Link>
        </div>
        {/* Threads and some nav links */}
        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 roudned-md ease-out duration-500 group mb-2"
          >
            <img
              src={ThreadsLogo}
              alt="Threads Icon"
              className="w-6 h-6 object-contnain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md_hidden sm:hidden hidden">
              Threads
            </p>
          </Link>
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 roudned-md ease-out duration-500 group mb-2"
          >
            <img
              src={MoreLogo}
              alt="Threads Icon"
              className="w-6 h-6 object-contnain group-hover:scale-105 ease-out duration-300"
            />
            <p className="text-base font-medium text-white lg:block md_hidden sm:hidden hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
