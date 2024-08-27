import Adventure from '../../assets/adventure.jpg';
import Food from '../../assets/food.jpg';
import Nature from '../../assets/nature.jpg';
import Sports from '../../assets/sports.jpg';
import Videography from '../../assets/videography.jpg';
import ProfileImg from '../../assets/profile-pic.jpg';
import Male from '../../assets/male.jpg';
import Female from '../../assets/female.jpg';

const instagramFeed = [
  {
    id: 1,
    username: 'food.explorer',
    time: '1h',
    profileImg: { ProfileImg },
    postImg: { Food },
    mutualFrndImg1: { Male },
    mutualFrndImg2: { Female },
    likeCount: '2, 00, 000',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    commentCount: '100',
  },
  {
    id: 2,
    username: 'nature.lover',
    time: '1h',
    profileImg: { ProfileImg },
    postImg: { Nature },
    mutualFrndImg1: { Male },
    mutualFrndImg2: { Female },
    likeCount: '2, 00, 000',
    caption:
      'Many touriest came nepal from all over the world to explore the beauty of the land & see the amazing natural places.',
    commentCount: '100',
  },
  {
    id: 3,
    username: 'reelsofworld',
    time: '1h',
    profileImg: { ProfileImg },
    postImg: { Videography },
    mutualFrndImg1: { Male },
    mutualFrndImg2: { Female },
    likeCount: '2, 00, 000',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    commentCount: '100',
  },
  {
    id: 4,
    username: 'carlover',
    time: '1h',
    profileImg: { ProfileImg },
    postImg: { Adventure },
    mutualFrndImg1: { Male },
    mutualFrndImg2: { Female },
    likeCount: '2, 00, 000',
    caption:
      'Many touriest came nepal from all over the world to explore the beauty of the land & see the amazing natural places.',
    commentCount: '100',
  },
  {
    id: 5,
    username: 'godness',
    time: '1h',
    profileImg: { ProfileImg },
    postImg: { Sports },
    mutualFrndImg1: { Male },
    mutualFrndImg2: { Female },
    likeCount: '2, 00, 000',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    commentCount: '100',
  },
];

export default instagramFeed;
