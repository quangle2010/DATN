import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
        currentPage,
        totalPages,
        setCurrentPage,
}) => {
        const handlePageChange = (page) => {
                if (page >= 1 && page <= totalPages) {
                        setCurrentPage(page);
                }
        };


        const generatePageNumbers = () => {
                const pages = [];
                pages.push(1);
                if (currentPage > 3) pages.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                        if (i > 1 && i < totalPages) pages.push(i);
                }
                if (currentPage < totalPages - 2) pages.push("...");
                if (totalPages > 1) pages.push(totalPages);
                return pages;
        };

        return (
                <nav aria-label="Page navigation">
                        <ul className="pagination">
                                <li
                                        className={`page-item me-1 ${currentPage === 1 ? "disabled" : ""}`}
                                        onClick={() => handlePageChange(1)}
                                >
                                        <Link className="page-link">
                                                <i className="p-0 bi bi-chevron-bar-left"></i>
                                        </Link>
                                </li>

                                <li
                                        className={`page-item me-1 ${currentPage === 1 ? "disabled" : ""}`}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                >
                                        <Link className="page-link">
                                                <i className="p-0 bi bi-chevron-double-left"></i>
                                        </Link>
                                </li>
                                {generatePageNumbers().map((page, index) => (
                                        <li
                                                key={index}
                                                className={`page-item me-1 ${page === currentPage ? "active" : ""} ${page === "..." ? "disabled" : ""
                                                        }`}
                                                onClick={() => page !== "..." && handlePageChange(page)}
                                        >
                                                <Link className="page-link">{page}</Link>
                                        </li>
                                ))}
                                <li
                                        className={`page-item me-1 ${currentPage === totalPages ? "disabled" : ""}`}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                >
                                        <Link className="page-link">
                                                <i className="p-0 bi bi-chevron-bar-right"></i>
                                        </Link>
                                </li>

                                <li
                                        className={`page-item me-1 ${currentPage === totalPages ? "disabled" : ""}`}
                                        onClick={() => handlePageChange(totalPages)}
                                >
                                        <Link className="page-link">
                                                <i className="p-0 bi bi-chevron-double-right"></i>
                                        </Link>
                                </li>
                        </ul>
                </nav>
        );
};

export default Pagination;
