const companyId = process.env.API_COMPANY_ID
const catalogId = process.env.API_CATALOG_ID;

export const API_ENDPOINTS = {
  // PRODUCTS
  GET_ALL_PRODUCTS: `/products/catalog/${catalogId}`,
  GET_ALL_PRODUCTS_BY_CATEGORY: `/products/${catalogId}`,
  GET_PRODUCT_BY_ID: `/products/catalog/${catalogId}`,

  // CATEGORIES
  GET_CATEGORIES: `/catalog/categories/${catalogId}`,

  // PROYECTS
  GET_PROYECTS: `/projects/company/${companyId}`
}