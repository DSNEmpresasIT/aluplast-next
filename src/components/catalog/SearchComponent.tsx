import { PAGES_PATH } from '@/utils/pages';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react'

export const SearchComponent = () => {
  const router = useRouter();
  const path = usePathname();
  const category = useSearchParams().get('category');
  const searchQuery = useSearchParams().get('search');

  const handleSearch = (e: any) => {
    const search: string = e.target.value;
    if(category) {
      return router.push(`${path}?category=${category}&search=${search}`)
    }

    return router.push(`${path}?search=${search}`)
  }

  return (
    <div className="blog__search" style={{ width: '70%' }}>
      <h4 className="title-sidebar">
        Buscar
      </h4>
      <form role="search" className="search-form">
        <input type="text" name="search" value={searchQuery ?? ''} onChange={handleSearch} placeholder="Buscar aquí" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  )
}
