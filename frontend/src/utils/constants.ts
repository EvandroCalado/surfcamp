export const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api";

export const ENDPOINTS = {
  INFO: `${BASE_URL}/info-page?populate=deep`,
  EXPERIENCE: `${BASE_URL}/experience-page?populate=deep`,
  BLOG: `${BASE_URL}/blog-articles?populate=deep`,
  SUBSCRIBE: `${BASE_URL}/newsletter-signups`,
  PARTICIPANT: `${BASE_URL}/participants?populate=deep`,
  EVENT: `${BASE_URL}/events?populate=deep`,
};
