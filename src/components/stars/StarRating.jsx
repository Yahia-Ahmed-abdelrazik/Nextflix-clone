import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center mt-2 text-xl ">
      {[...Array(fullStars)].map((_, index) => (
        <IoMdStar key={`full-${index}`} className="text-yellow-500" />
      ))}
      {halfStar && <IoMdStarHalf className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <IoMdStarOutline key={`empty-${index}`} className="text-gray-400" />
      ))}
    </div>
  );
};

export default StarRating;
