// components/Pagination.tsx
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mb-4 flex justify-center items-center space-x-4" aria-label="Pagination">
      <span
        className={`rounded-lg border border-yellow px-2 py-2 text-gray-700 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="mt-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      {pageNumbers.map((page) => (
        <Link key={page} href={`/page/${page}`}>
          <span
            className={`rounded-lg border border-yellow px-4 py-2 ${
              currentPage === page ? "bg-yellow text-white" : "text-gray-700"
            }`}
          >
            {page}
          </span>
        </Link>
      ))}

      <Link
        href={`/page/${currentPage + 1}`}
        className={`rounded-lg border border-yellow px-2 py-2 text-gray-700 ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <span className="sr-only">Next</span>
        <svg
          className="mt-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default Pagination;
