/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: false,
  env: {
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE: process.env.EMAILJS_SERVICE,
    FOOTER_EMAILJS_TEMPLATE: process.env.FOOTER_EMAILJS_TEMPLATE,
    CONTACT_EMAILJS_TEMPLATE: process.env.CONTACT_EMAILJS_TEMPLATE,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    FACEBOOK_TOKEN: process.env.FACEBOOK_TOKEN,
    FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    GLOBAL_API_BASE_URL_DEVELOPMENT: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT,
    GLOBAL_API_BASE_URL_PRODUCTION: process.env.GLOBAL_API_BASE_URL_PRODUCTION,
    CLIENT_ID: process.env.CLIENT_ID,
    MODE: process.env.MODE
  }
}

module.exports = nextConfig
