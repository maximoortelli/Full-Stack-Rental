export { default } from "next-auth/middleware"

export const config = { 
  match: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};
