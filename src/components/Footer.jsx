import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <p className="text-gray-600 flex gap-2 justify-center items-center">
        <span>Made by Sahil with{' '}</span>
        <span className="text-red-500">
          <FaHeart />
        </span>{' '} 
        using React and Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
