const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js",
      content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#1D4ED8',
            secondary: '#F97316',
            accent: '#10B981',
            background: '#F9FAFB',
            foreground: '#111827',
            muted: '#6B7280',
            border: '#E5E7EB',
            hover: '#2563EB',
          },
        },
      },
  
    },
  },
};

export default config;
