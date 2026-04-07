"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Section, SectionTitle } from "./section";
import { FadeIn } from "./motion";

interface ReviewData {
  RID: number;
  rate: number;
  message: string;
  buyer: { username: string; image: string };
  evaluated_at: string;
  order: {
    title: string;
    thumbnail: string;
    price_range: string;
    days: string;
  };
}

interface ReviewsResponse {
  total: number;
  last_page: number;
  avg_rating: number;
  ratings: ReviewData[];
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-500">
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
    </span>
  );
}

function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700">
      <div className="mb-2 flex items-center gap-2">
        <Image
          src={review.buyer.image}
          alt={review.buyer.username}
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="text-sm font-medium">{review.buyer.username}</span>
        <span className="text-xs text-zinc-500">|</span>
        <span className="text-xs text-yellow-500">★ {review.rate.toFixed(1)}</span>
        <span className="text-xs text-zinc-500">|</span>
        <span className="text-xs text-zinc-500">{review.evaluated_at}</span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-zinc-300">{review.message}</p>
      {review.order && (
        <div className="flex items-start gap-3 rounded-lg bg-zinc-800/50 p-3">
          <Image
            src={review.order.thumbnail}
            alt={review.order.title}
            width={48}
            height={48}
            className="rounded-md"
          />
          <div className="text-xs text-zinc-400">
            <p className="mb-0.5 font-medium text-zinc-300">{review.order.title}</p>
            <p>금액 범위: {review.order.price_range}</p>
            <p>작업일: {review.order.days}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function KmongReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/reviews?page=${page}`)
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <Section id="kmong" className="border-t border-zinc-800/50">
      <FadeIn>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <SectionTitle>Kmong Reviews</SectionTitle>
            {data && (
              <div className="flex items-center gap-2 text-sm">
                <Stars rating={data.avg_rating} />
                <span className="font-semibold">{data.avg_rating.toFixed(1)}</span>
                <span className="text-zinc-500">({data.total}개의 리뷰)</span>
              </div>
            )}
            <p className="mt-1 text-xs text-zinc-500">
              실제 크몽을 통해 구매한 이용자들이 남긴 리뷰입니다.
            </p>
          </div>
          <a
            href="https://kmong.com/@%EC%98%AC%EB%9D%BC%EC%86%8C%ED%94%84%ED%8A%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            @올라소프트 ↗
          </a>
        </div>
      </FadeIn>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-sky-500" />
        </div>
      ) : (
        <div className="space-y-4">
          {data?.ratings.map((review) => (
            <ReviewCard key={review.RID} review={review} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {data && data.last_page > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white disabled:opacity-30"
          >
            이전
          </button>
          <span className="px-3 text-sm text-zinc-500">
            {page} / {data.last_page}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(data.last_page, p + 1))}
            disabled={page === data.last_page}
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white disabled:opacity-30"
          >
            다음
          </button>
        </div>
      )}
    </Section>
  );
}
