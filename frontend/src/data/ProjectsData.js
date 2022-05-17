import imageOne from '../assets/images/image1.jpg';
import imageTwo from '../assets/images/image2.jpg';
import imageThree from '../assets/images/image3.png';
import imageFour from '../assets/images/image4.jpg';

import videoOne from '../assets/videos/video1.mp4';
import videoTwo from '../assets/videos/video2.mp4';
import videoThree from '../assets/videos/video3.mp4';
import videoFour from '../assets/videos/video4.mp4';

export const ProjectsData = [
    {
        id: 0,
        name: 'Corporate',
        category: 'Film',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit,etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: imageOne,
        video: videoOne,
        videoId: '7vKhWuejtYs',
        alt: 'video',
        client: 'Klay BBJ',
        clientLink: 'https://www.youtube.com/channel/UCI6ER2eyvJ098z_qrHZiZdA',
        partners: [
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
        ],
        videos: [
            {
                videoId: 'WjnsXb3K9O8',
            },
            {
                videoId: '7vKhWuejtYs',
            },
        ],
    },
    {
        id: 1,
        name: "Corporate",
        category: 'Documentaire',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: imageTwo,
        video: videoTwo,
        videoId: 'WjnsXb3K9O8',
        alt: 'video',
        client: 'Klay BBJ',
        clientLink: 'https://www.youtube.com/channel/UCI6ER2eyvJ098z_qrHZiZdA',
        partners: [
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
        ],
        videos: [
            {
                videoId: '7vKhWuejtYs',
            },
            {
                videoId: 'WjnsXb3K9O8',
            },
            {
                videoId: 'WjnsXb3K9O8',
            },
        ],
    },
    {
        id: 2,
        name: 'Publicitaire',
        category: 'Annonce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: imageThree,
        video: videoThree,
        videoId: 'WjnsXb3K9O8',
        alt: 'video',
        clientLink: 'https://www.youtube.com/channel/UCI6ER2eyvJ098z_qrHZiZdA',
        partners: [
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
        ],
        videos: [
            {
                videoId: 'WjnsXb3K9O8',
            },
        ],
    },
    {
        id: 3,
        name: 'Musical',
        category: 'Clip',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: imageFour,
        video: videoFour,
        videoId: 'Zd1U2QhGUcM',
        alt: 'video',
        clientLink: 'https://www.youtube.com/channel/UCI6ER2eyvJ098z_qrHZiZdA',
        partners: [
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
            {
                name: 'Burger King',
                partnerLink: 'https://www.bk.com',
            },
        ],
        videos: [
            {
                videoId: 'WjnsXb3K9O8',
            },
        ],
    },
]