import heyMoneyBg from "../assets/hey-money-bg.json";
import Lottie from "lottie-react";


export const projects = [
  {
    title: {
      vi: 'Hệ thống Quản lý Tài chính',
      en: 'Finance Management',
    },
    description: {
      vi: 'Website giúp người dùng quản lý tài chính cá nhân với các tính năng như ghi chép và tra cứu giao dịch thu/chi, quản lý nhiều tài khoản, hỗ trợ theo dõi tiết kiệm và tích lũy, quản lý khoản nợ kèm lãi suất, và thiết lập hạn mức chi tiêu theo từng danh mục...',
      en: 'A website that helps users manage personal finances with features such as recording and retrieving income/expense transactions, managing multiple accounts, supporting savings and accumulation tracking, debt management with interest rates, and setting spending limits by category...',
    },
    animation: heyMoneyBg,
    image: '/projects/project-1.jpg',
    tech: ['ReactJS', 'NodeJS (ExpressJS)', 'Redux', 'Material UI', 'MongoDB', 'Socket.IO', 'JWT'],
    demo: 'https://hey-money.vercel.app',
    source: 'https://github.com/thanhthuongle/Personal-Finance-Management-Website-Development',
    featured: true,
  },

  // TODO: Hoàn thiện thêm thông tin
  // {
  //   title: {
  //     vi: 'Hệ thống Quản lý Tài chính',
  //     en: 'Finance Management',
  //   },
  //   description: {
  //     vi: 'Giao diện cửa hàng trực tuyến với giỏ hàng, thanh toán và quản lý đơn hàng.',
  //     en: 'An online store front with cart, checkout, and order management.',
  //   },
  //   image: '/projects/project-2.jpg',
  //   tech: ['React', 'Tailwind', 'Node.js'],
  //   demo: 'https://example.com',
  //   source: 'https://github.com/yourname/project-2',
  //   featured: false,
  // },
  // {
  //   title: {
  //     vi: 'Hệ thống Quản lý Tài chính',
  //     en: 'Finance Management',
  //   },
  //   description: {
  //     vi: 'Dự báo thời tiết theo vị trí, giao diện tối giản và hoạt ảnh mượt.',
  //     en: 'Location-based weather forecast with a minimal UI and smooth animations.',
  //   },
  //   image: '/projects/project-3.jpg',
  //   tech: ['React Native', 'TypeScript', 'OpenWeather API'],
  //   demo: '',
  //   source: 'https://github.com/yourname/project-3',
  //   featured: false,
  // },
];
