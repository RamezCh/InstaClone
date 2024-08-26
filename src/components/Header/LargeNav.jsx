import React from 'react';
import { Link } from 'react-router-dom';
// Impoprt Logo & Icons
import InstagramLogo from '../../assets/logo/instagram.png';
import InstagramIcon from '../../assets/logo/icon.png';
import SearchLogo from '../../assets/navlogo/search.png';
import ExploreLogo from '../../assets/navlogo/explore.png';
import ReelsLogo from '../../assets/navlogo/reel.png';
import MessagesLogo from '../../assets/navlogo/message.png';
import NotificationsLogo from '../../assets/navlogo/like.png';
import CreateLogo from '../../assets/navlogo/create.png';

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
        <Link className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img
            src={InstagramLogo}
            alt="Instagram Logo"
            className="w-28 h-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default LargeNav;
