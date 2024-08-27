import React from 'react';
import { Link } from 'react-router-dom';
import StoryImg from '../../assets/Temple_mount.jpg';
import storiesData from './StoriesData';
import TextEllipse from '../TextEllipse/TextEllipse';

const Stories = () => {
  return (
    <>
      <div className="lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        <Link
          to="/"
          key={55}
          className="flex items-center justify-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
            <img
              src={StoryImg}
              alt="story img"
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            />
          </div>
          <TextEllipse username="Free Palestine" />
        </Link>
        {storiesData.map(story => {
          return (
            <Link
              to="/"
              key={story.id}
              className="flex items-center justify-center flex-col flex-shrink-0"
            >
              <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                <img
                  src={story.imageUrl}
                  alt="story img"
                  className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                />
              </div>
              <TextEllipse username={story.username} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
