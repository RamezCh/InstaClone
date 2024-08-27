import React, { useState } from 'react';
import instagramFeed from './FeedData';
import { Link } from 'react-router-dom';
import Ellipse from '../../icons/Ellipse/Ellipse';
import Like from '../../icons/Like/Like';
import Comment from '../../icons/Comment/Comment';
import Share from '../../icons/Share/Share';
import Save from '../../icons/Save/Save';
import Emoji from '../../icons/Emoji/Emoji';

const FeedCard = () => {
  const [feedData, setFeedData] = useState(instagramFeed);

  const toggleLike = id => {
    const updatedFeedData = feedData.map(feed =>
      feed.id === id
        ? {
            ...feed,
            isLiked: !feed.isLiked,
            likeCount: feed.isLiked ? feed.likeCount - 1 : feed.likeCount + 1,
          }
        : feed
    );
    setFeedData(updatedFeedData);
  };

  return (
    <>
      {feedData.map(feed => (
        <div key={feed.id} className="w-full h-auto mb-6">
          {/* profile pic, username and time */}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                key={55}
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <Ellipse />
          </div>
          {/* Feed Img */}
          <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            <img
              src={feed.postImg}
              alt={feed.caption}
              className="w-full h-full rounded object-center"
            />
          </div>
          {/* User Action (like, comment, share & save) */}
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Like
                isLiked={feed.isLiked}
                toggleLike={() => toggleLike(feed.id)}
              />
              <Comment />
              <Share />
            </div>
            <Save />
          </div>
          {/* Like Count */}
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
          >
            <div className="flex items-center">
              <img
                src={feed.mutualFrndImg1}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black"
              />
              <img
                src={feed.mutualFrndImg2}
                alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-full p-[1.5px] bg-black -ml-3"
              />
            </div>
            {new Intl.NumberFormat(navigator.language).format(feed.likeCount)}{' '}
            likes
          </Link>
          {/* Captions section */}
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-white font-medium text-sm me-1">
                {feed.username}
              </Link>
              {feed.caption}
              <Link to="/" className="text-gray-400 text-sm ms-1">
                more
              </Link>
            </div>
          </div>
          {/* Comment Count */}
          <Link to="/" className="text-gray-400 font-normal my-2">
            View All {feed.commentCount} comments
          </Link>
          {/* Comment */}
          <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
            <input
              type="text"
              className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3"
              placeholder="Add a comment..."
            />
            <Emoji />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;
