import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export const PaginationComponent = ({ 
  actualPage, catalogLength, category 
}: { actualPage: string | null, catalogLength: number, category: string }
) => {
  const [ pages, setPages ] = useState<number[]>([]);

  useEffect(() => {
    const totalPages: number[] = [];
    
    for (let i = 0; i < Math.ceil(catalogLength / 9); i++) {
      totalPages.push(i+1);
    }

    let startPage;
    let endPage;

    if (actualPage && +actualPage > 2) {

      startPage = +actualPage - 3;
      endPage = +actualPage + 2

    } else {

      startPage = 0;
      endPage = 5;

    }

    setPages(totalPages.slice(startPage, endPage))
  }, [catalogLength, actualPage])

  return (
    <div className="au-pagination clearfix">
      <ul className="page-number-wrap ul--inline ul--no-style pull-right">
        {
          (actualPage && +actualPage > 3) && (
            <li>
              <Link href={{ query: { categoria: category, page: +actualPage - 1  } }} className="page-number">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </Link>
            </li>
          )
        }
        {
          pages.map(item => {
            return (
              <li className={`page-number ${actualPage && +actualPage === item && 'current'}`} key={`pagination-shop-key-${item}`}>
                <Link href={{ query: { categoria: category, page: item } }} className="page-number">
                  {item}
                </Link>
              </li>
            )
          })
        }
        <li>
          <a type='button' className="page-number dots">...</a>
        </li>
        <li>
          <Link href={{ query: { categoria: category, page: Math.ceil(catalogLength / 9) } }} className="page-number">
            {Math.ceil(catalogLength / 9)}
          </Link>
        </li>
        {
          actualPage && +actualPage < Math.ceil(catalogLength / 9) && (
            <li>
              <Link href={{ query: { categoria: category, page: +actualPage + 1 } }} className="page-number">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
