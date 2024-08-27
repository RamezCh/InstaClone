import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../../../assets/profile-pic.jpg';

const ProfileNav = ({
  divClass = 'w-full h-auto flex items-center justify-between mb-4',
  imgSrc = ProfileImg,
  userName = 'Profile',
  linkWord = 'Switch',
}) => {
  return (
    <>
      <div className={divClass}>
        <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
          <img
            src={imgSrc}
            alt="Profile Img"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex items-start gap-y-0 flex-col">
            <p className="text-[0.9rem] text-white font-medium mb-0">
              {userName}
            </p>
            <h6 className="text-[0.935rem] text-gray-500 font-normal">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </h6>
          </div>
        </Link>
        <Link
          to="/"
          className="text-[0.855rem] text-blue-500 hover:text-gray-200"
        >
          {linkWord}
        </Link>
      </div>
    </>
  );
};

export default ProfileNav;
