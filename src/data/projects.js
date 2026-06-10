import heyMoneyBg from "../assets/hey-money-bg.json";
import trelloBg from "../assets/trello-bg.json";
import educationBg from "../assets/graduation-cap.json";
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
    image: '',
    tech: ['ReactJS', 'NodeJS (ExpressJS)', 'Redux', 'Material UI', 'MongoDB', 'Socket.IO', 'JWT'],
    demo: 'https://hey-money.vercel.app',
    source: 'https://github.com/thanhthuongle/Personal-Finance-Management-Website-Development',
    featured: true,
  },
  {
    title: {
      vi: 'Trello Clone',
      en: 'Trello Clone',
    },
    description: {
      vi: 'Xây dựng một dự án giống Trello cho phép quản lý công việc với giao diện kéo thả và cộng tác thời gian thực sử dụng Socket.IO, củng cố kỹ năng React và NodeJS.',
      en: 'Built a Trello-like project enabling task management with drag-and-drop UI and real-time collaboration using Socket.IO, reinforcing my skills in React and NodeJS.',
    },
    animation: trelloBg,
    image: '',
    tech: ['React', 'Redux', 'Material UI', 'Dndkit', 'NodeJS (ExpressJS)', 'MongoDB', 'Socket.IO'],
    demo: 'https://trello-web-beta-three.vercel.app',
    source: 'https://github.com/thanhthuongle/Trello-like-Website-Development',
    featured: false,
  },
  {
    title: {
      vi: 'Ứng dụng quản lý trường đại học',
      en: 'University Management App',
    },
    description: {
      vi: 'Hợp tác với nhóm để phát triển giao diện ứng dụng di động cho sinh viên và giảng viên quản lý các hoạt động học tập, bao gồm lịch học, bài tập, điểm danh và thông báo...',
      en: 'Collaborated with a team to develop a mobile app interface for students and lecturers to manage learning activities, including class schedules, assignments, attendance, and notifications...',
    },
    animation: educationBg,
    image: '',
    tech: ['React Native', 'TypeScript', 'Expo', 'Expo Router'],
    demo: '',
    source: 'https://github.com/NguyenHiep2003/QLDT',
    featured: false,
  },
];
