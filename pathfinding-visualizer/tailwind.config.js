import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        path:{
          "0%" :{
            transform:"scale(0.3)",
            backgroundColor: "rgba(225, 29, 72, 0.7)",
            borderRadius:"100%",
          },
          "50%":{
            backgroundColor:"rgba(234, 88, 12, 0.75)",
          },
          "75%":{
            transform: "scale(1.2)",
            backgroundColor: "rgba(251, 146, 60, 0.75)",
          },
          "90%":{
            transform:"scale(0.8)",
            backgroundColor:"rgba(253, 230, 138, 1)",
          },
          "100%":{
            transform:"scale(1)",
          }
        },
        traversed:{
          "0%" :{
            transform:"scale(0.3)",
            backgroundColor: "rgba(59, 130, 246, 0.3)",
            borderRadius:"100%",
          },
          "50%":{
            backgroundColor:"rgba(59, 130, 246, 0.5)",
          },
          "75%":{
            transform: "scale(1.2)",
            backgroundColor: "rgba(59, 130, 246, 0.75)",
          },
          "100%":{
            transform:"scale(1)",
            backgroundColor:"rgba(59, 130, 246, 1)",
          },
        },
        wall:{
          "0%":{
            transform:"scale(0.7)",
          },
          "100%":{
            transform:"scale(1)",
          },
        },
      },
      animation:{
        traversed:"traversed 0.5s cubic-bezier(0,0,0.2,1) forwards",
        path:"path 1s ease-in-out forwards",
        wall: "path 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

