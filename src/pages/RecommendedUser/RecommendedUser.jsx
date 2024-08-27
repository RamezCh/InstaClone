import React from 'react';
import ProfileNav from './ProfileNav/ProfileNav';
import { Link } from 'react-router-dom';
import recommendedUserData from './RecommendedUserData';

const linkData = [
  { id: 1, link: '/', title: 'About' },
  { id: 2, link: '/', title: 'Help' },
  { id: 3, link: '/', title: 'Press' },
  { id: 4, link: '/', title: 'API' },
  { id: 5, link: '/', title: 'Jobs' },
  { id: 6, link: '/', title: 'Privacy' },
  { id: 7, link: '/', title: 'Terms' },
  { id: 8, link: '/', title: 'Locations' },
  { id: 9, link: '/', title: 'Language' },
  { id: 10, link: '/', title: 'Meta Verified' },
];

const RecommendedUser = () => {
  return (
    <>
      <div className="w-full h-auto py-3">
        {/* Profile Navigation */}
        <ProfileNav />
        {/* Suggested User */}
        <div className="w-full h-auto my-8">
          <div className="w-full h-auto flex items-center justify-between mb-4">
            <h6 className="text-sm text-gray-400 font-medium">
              Suggested for you
            </h6>
            <Link
              to="/"
              className="text-xs font-semibold text-gray-300 hover:text-gray-600"
            >
              See All
            </Link>
          </div>
          {/* Rest of Recommended Users */}
          {recommendedUserData.map(user => (
            <ProfileNav
              key={user.id}
              imgSrc={user.profileImg}
              userName={user.username}
              linkWord={user.follow}
            />
          ))}
        </div>
        {/* Footer Links */}
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3">
            {linkData.map(link => (
              <div
                key={link.id}
                className="w-fit h-auto flex items-center gap-x-[4px]"
              >
                <Link
                  to={link.link}
                  className="text-[0.8rem] font-normal text-[#5b5b5b] hover:underline"
                >
                  {link.title}
                </Link>
                <div className="w-[1.5px] h-[1.5px] bg-[#5b5b5b] rounded-full"></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5b5b5b] font-normal">
            &copy; {new Date().getFullYear()} INSTAGRAM FROM META
          </p>
        </div>
      </div>
    </>
  );
};

export default RecommendedUser;
