/** @type {import('tailwindcss').Config} */
module.exports={
  content: ["./*.html", "./public/js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "primary": '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          // DEFAULT: '#780000',
          secondary: '#18abbc',
          // secondary: '#415a77',
          tertiary: '#90c6cd',
          // tertiary: '#778da9'

        },
        grey: '#e8f0f1'
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2: '0px 0px 30px 0px rgba(8,73,81,0.06)',
      },
      backgroundImage: {
        services: 'url(./assets/img/services/bg.svg)',
        testimonials: 'url(./assets/img/testimonials/bg.svg)',
        departments: 'url(./assets/img/departments/bg.svg)',
        quoteLeft: 'url(./assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(./assets/icons/testimonials/quote-right.svg)',
        // departments: 'url(./assets/assets/img/departments/bg.svg)',
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: '640px',
        md: '768px',
        lg: "960px",
        xl: "1330px",
        "2xl": "1330px"
      }
    }
  },
  plugins: [],
}