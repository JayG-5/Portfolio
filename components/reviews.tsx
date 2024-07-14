import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Review from './review';
import StarRating from './star_rating';
import Link from "next/link";


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

interface ReviewData {
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
}

const ReviewsPage: React.FC = () => {
  const [reviewsData, setReviewsData] = useState<{
    total: number;
    last_page: number;
    avg_rating: number;
    ratings: ReviewData[];
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/reviews?page=${page}`);
      setReviewsData(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  const handlePageClick = async ({ selected }: { selected: number }) => {
    const newPage = selected + 1;
    setCurrentPage(newPage);
  };

  function formatRating(rating: number): string {
    if (Number.isInteger(rating)) {
      return `${rating}.0`;
    } else {
      return rating.toFixed(1);
    }
  }



  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="max-w-3xl mx-12">
        <section>
          <div className='flex justify-between items-end'>
            <div>
            <h2 className="text-2xl font-bold">받은 리뷰</h2>
            {reviewsData && (
              <div className="mb-4">
                <div className='flex'>
                <div className="text-xl mr-2 text-yellow-500">
                  <StarRating rating={reviewsData.avg_rating} /> 
                </div>
                <div className="text-lg flex">
                  <div className='font-bold' >{formatRating(reviewsData.avg_rating)}</div>
                  ({reviewsData.total})
                </div></div>
                <div className="text-md text-gray-500 text-xs">
                  실제 크몽을 통해 구매한 이용자들이 남긴 리뷰예요.
                </div>
              </div>
            )}
            </div>

            <Link href={`https://kmong.com/@%EA%B9%80%EC%B2%A8%EC%A7%80%EB%84%A4`} className="flex items-center gap-1 font-bold text-xl mb-4">
              <img className='w-6 h-6 rounded-md' src="icons/kmong.png" alt="크몽:김첨지네" />
              <p>@김첨지네</p>
            </Link>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            reviewsData?.ratings.map((review: ReviewData) => (
              <Review key={review.RID} review={review} />
            ))
          )}
          {reviewsData && (
            <ReactPaginate 
              className='flex gap-2'
              previousLabel={'이전'}
              nextLabel={'다음'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={reviewsData.last_page}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'font-bold text-blue-500'}
              disabledClassName={'text-black-500'}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default ReviewsPage;
