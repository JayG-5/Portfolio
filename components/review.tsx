import Image from 'next/image';

interface Buyer {
  username: string;
  image: string;
}

interface Order {
  type: string;
  id: number;
  status: string;
  title: string;
  thumbnail: string;
  price_range: string;
  days: string;
}

interface ReviewProps {
  review: {
    RID: number;
    rate: number;
    message: string;
    buyer_username: string;
    ad_type: string | null;
    buyer: Buyer;
    is_prime: boolean;
    status: string;
    replied_at: string;
    evaluated_at: string;
    image: string | null;
    reply: string | null;
    is_blocked: boolean;
    order: Order;
  };
}

function formatRating(rating: number): string {
  if (Number.isInteger(rating)) {
    return `${rating}.0`;
  } else {
    return rating.toFixed(1);
  }
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <div className="r">
        <div className='flex items-center'>
          <Image 
            src={review.buyer.image} 
            alt={review.buyer.username} 
            width={24} 
            height={24} 
            className="rounded-full mr-2"
          />
          <h3 className="text-xl font-bold mr-1">
          {review.buyer.username}</h3>
          <p className="text-gray-600 text-xs  mr-1"> | {review.evaluated_at}</p>
          <p className="text-gray-600 text-xs flex gap-1"> | <p className='text-yellow-500'>★</p> {formatRating(review.rate)}</p>
        </div>
        <p className="text-gray-600">{review.message}</p>
      </div>
      {review.order && (
        <div className="mt-2 flex">
          <Image 
            src={review.order.thumbnail} 
            alt={review.order.title} 
            width={64} 
            height={32}
            className="rounded-lg mr-2"
          />
          <div className="text-gray-600 text-xs">
            <p className="text-s font-semibold">{review.order.title}</p>
            <p>주문 금액 범위: {review.order.price_range}</p>
            <p>작업일: {review.order.days}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
