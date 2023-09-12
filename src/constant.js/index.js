export const menu = [
  {
    id: 1,
    title: 'Mute Notification',
  },
  {
    id: 2,
    title: 'Custom Notification',
  },
  {
    id: 3,
    title: 'Show Media',
  },
];

export const menu1 = [
  {
    id: 1,
    title: 'Disappearing Messages',
  },
  {
    id: 2,
    title: 'Chat Lock',
  },
  {
    id: 3,
    title: 'Encryption',
  },
];

export const dataChat = [
  {
    id: 1,
    isBusiness: false,
    group: {
      group_id: 1,
      name: 'Group',
      photo_group:
        'https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg',
      user_info: [
        {
          id: 1,
          user_id: 1,
          name: 'Ayu',
          photo:
            'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
          phone: '8158285006',
          fullname: 'Ayu Armadani Putri Mahirun',
          status: 'Available',
          isBusiness: true,
        },
        {
          id: 2,
          user_id: 2,
          name: 'Sausan',
          photo:
            'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
          phone: '8158285006',
          fullname: 'Sausan Nabila',
          status: 'Available',
          isBusiness: false,
        },
      ],
    },
    message: [
      {
        text: 'Hallo everyone',
        user_id: 1,
        time: '17:00',
      },
    ],
    user_info: {},
    unread: 1,
  },
  {
    id: 2,
    group: {},
    isBusiness: false,
    user_info: {
      user_id: 1,
      name: 'Ayu',
      photo:
        'https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg',
      phone: '8158285006',
      fullname: 'Ayu Armadani Putri Mahirun',
      status: 'Available',
    },
    message: [
      {
        text: 'Hallo',
        user_id: 1,
        time: '16:00',
      },
    ],
    unread: 100,
  },
  {
    id: 3,
    group: {},
    isBusiness: false,
    user_info: {
      user_id: 13,
      name: '',
      photo:
        'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
      phone: '8158285006',
      fullname: 'Ayu Armadani Putri Mahirun',
      status: 'Available',
      isBusiness: false,
    },
    message: [
      {
        text: 'Hallo',
        user_id: 13,
        time: '16:00',
      },
    ],
    unread: 100,
  },
];

export const dataUser = [
  {
    id: 1,
    user_id: 1,
    name: 'Ayu',
    photo:
      'https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg',
    phone: '8158285006',
    fullname: 'Ayu Armadani Putri Mahirun',
    status: 'Bussy',
    isBusiness: true,
    group: {
      group_id: 1,
      name: 'Group',
      photo_group:
        'https://img.freepik.com/premium-photo/futuristic-abstract-love-cloud-landscape-generative-ai_372999-12223.jpg',
      user_info: [
        {
          id: 1,
          user_id: 1,
          name: 'Ayu',
          photo:
            'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
          phone: '8158285006',
          fullname: 'Ayu Armadani Putri Mahirun',
          status: 'Available',
          isBusiness: true,
        },
        {
          id: 2,
          user_id: 2,
          name: 'Sausan',
          photo:
            'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
          phone: '8158285006',
          fullname: 'Sausan Nabila Maharani',
          status: 'Available',
          isBusiness: false,
        },
      ],
    },
  },
  {
    id: 2,
    group: [],
    user_id: 16,
    name: 'Rani',
    photo:
      'https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg',
    phone: '8158285006',
    fullname: 'Rania Arma',
    status: 'Available',
    isBusiness: true,
  },
];
