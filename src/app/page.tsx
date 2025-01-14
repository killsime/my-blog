export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js and Ant Design.',
  icons: {
    icon: '/blog.svg',
  },
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
        Welcome Killsime's Blog
      </h1>
      <p className="mt-4 text-xl text-gray-600">欢迎来到首页！</p>
    </div>

  );
};

export default HomePage;
