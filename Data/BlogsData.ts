// types.ts
export interface BlogPost {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Transform Your Living Room with Modern Furniture',
      imageSrc: '/img/blog/blog1.jpg',
      description: 'Explore the latest trends in modern living room furniture that combine style and functionality. From sleek sofas to contemporary coffee tables, find out how to refresh your space.',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Dining Table for Your Home',
      imageSrc: '/img/blog/blog2.jpg',
      description: 'Choosing the right dining table can enhance your dining experience. Learn about different styles, materials, and sizes to find the perfect match for your home.',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Bedroom Furniture Arrangements',
      imageSrc: '/img/blog/blog3.jpg',
      description: 'Discover tips and tricks for arranging bedroom furniture to create a relaxing and functional space. From bed placement to storage solutions, get inspired to redesign your bedroom.',
    },
    {
      id: 4,
      title: 'Sustainable Furniture: Eco-Friendly Choices for Your Home',
      imageSrc: '/img/blog/blog4.jpg',
      description: 'Sustainability is key when selecting furniture for your home. Learn about eco-friendly materials and practices that help you make environmentally conscious choices without sacrificing style.',
    },
  ];
  