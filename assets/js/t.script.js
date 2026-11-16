    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
          },
          colors: {
            pastel: {
              rose: '#f8c4d4',
              blush: '#f5d0e0',
              lavender: '#d4c1ec',
              mint: '#b8e0d2',
              sky: '#a8d8ea',
              cream: '#f9f1e7',
              soft: '#e8f0f5',
            },
            night: {
              900: '#0f1419',
              800: '#1a222d',
              700: '#243040',
              600: '#2e3d52',
            }
          },
          boxShadow: {
            'soft': '0 4px 20px -2px rgba(0,0,0,0.08)',
            'soft-lg': '0 10px 40px -8px rgba(0,0,0,0.12)',
            'glow': '0 0 40px -10px rgba(248,196,212,0.35)',
          },
          animation: {
            'fade-up': 'fadeUp 0.7s ease-out forwards',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            fadeUp: {
              '0%': { opacity: '0', transform: 'translateY(24px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }
        }
      }
    }