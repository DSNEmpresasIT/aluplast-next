import Link from 'next/link';
import React from 'react';

interface PaginationComponentProps {
  actualPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  actualPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxButtons = 5; 
    const half = Math.floor(maxButtons / 2);
    
    let startPage = Math.max(1, actualPage - half);
    let endPage = Math.min(totalPages, actualPage + half);
    
    if (actualPage <= half) {
      endPage = Math.min(totalPages, maxButtons);
    } else if (actualPage + half >= totalPages) {
      startPage = Math.max(1, totalPages - maxButtons + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <li  key={`pagination-key-1`}>
          <Link href={{}} className="page-number" type="button" onClick={() => handleClick(1)}>1</Link>
        </li>
      );
      if (startPage > 2) {
        buttons.push(<li key="dots-start">...</li>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li
          
          key={`pagination-key-${i}`}
        >
          <Link href={{}} className={`page-number ${actualPage === i ? 'current' : ''}`} type="button" onClick={() => handleClick(i)}>
            {i}
          </Link>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<li key="dots-end">...</li>);
      }
      buttons.push(
        <li  key={`pagination-key-${totalPages}`}>
          <Link href={{}} className="page-number" type="button" onClick={() => handleClick(totalPages)}>
            {totalPages}
          </Link>
        </li>
      );
    }

    return buttons;
  };

  return (
    <div className="au-pagination clearfix">
      {totalPages > 1 && (
        <ul className="page-number-wrap ul--inline ul--no-style pull-right">
          {actualPage > 1 && (
            <li>
              <Link href={{}}
                type="button"
                className="page-number"
                onClick={() => handleClick(actualPage - 1)}
              >
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </Link>
            </li>
          )}

          {renderPageButtons()}

          {actualPage < totalPages && (
            <li>
              <Link 
                href={{}}
                type="button"
                className="page-number"
                onClick={() => handleClick(actualPage + 1)}
              >
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};




