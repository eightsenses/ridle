import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Semantic colors from _tokens.css
        semantic: {
          background: {
            black: 'var(--colors-semantic-background-black)',
            default: 'var(--colors-semantic-background-default)',
            white: 'var(--colors-semantic-background-white)',
            thin: 'var(--colors-semantic-background-thin)',
            subtle: 'var(--colors-semantic-background-subtle)',
            gray: 'var(--colors-semantic-background-gray)',
            primary: 'var(--colors-semantic-background-primary)',
            secondary: 'var(--colors-semantic-background-scondary)',
            dashboard: 'var(--colors-semantic-background-dashboard)',
            star: 'var(--colors-semantic-background-star)',
            opacity: {
              default: 'var(--colors-semantic-background-opacity-default)',
              heavy: 'var(--colors-semantic-background-opacity-heavy)',
              middle: 'var(--colors-semantic-background-opacity-middle)',
              thin: 'var(--colors-semantic-background-opacity-thin)'
            },
            btn: {
              primary: {
                enabled: 'var(--colors-semantic-background-btn-primary-enabled)',
                hover: 'var(--colors-semantic-background-btn-primary-hover)',
                disabled: 'var(--colors-semantic-background-btn-primary-disabled)'
              },
              secondary: {
                enabled: 'var(--colors-semantic-background-btn-secondary-enabled)',
                hover: 'var(--colors-semantic-background-btn-secondary-hover)',
                disabled: 'var(--colors-semantic-background-btn-secondary-disabled)'
              }
            }
          },
          text: {
            black: 'var(--colors-semantic-text-black)',
            white: 'var(--colors-semantic-text-white)',
            default: 'var(--colors-semantic-text-default)',
            thin: 'var(--colors-semantic-text-thin)',
            subtle: 'var(--colors-semantic-text-subtle)',
            gray: 'var(--colors-semantic-text-gray)',
            primary: 'var(--colors-semantic-text-primary)',
            secondary: 'var(--colors-semantic-text-scondary)',
            placeholder: 'var(--colors-semantic-text-placeholder)',
            danger: 'var(--colors-semantic-text-danger)',
            success: 'var(--colors-semantic-text-success)',
            btn: {
              primary: 'var(--colors-semantic-text-btn-primary-text)',
              secondary: 'var(--colors-semantic-text-btn-scondary-text)',
              brand: 'var(--colors-semantic-text-btn-brand-text)'
            }
          },
          border: {
            default: 'var(--colors-semantic-boder-default)',
            heavy: 'var(--colors-semantic-boder-heavy)',
            middle: 'var(--colors-semantic-boder-middle)',
            thin: 'var(--colors-semantic-boder-thin)',
            white: 'var(--colors-semantic-boder-white)',
            btn: {
              primary: 'var(--colors-semantic-boder-btn-primary-enabled)',
              secondary: 'var(--colors-semantic-boder-btn-seconday-enabled)'
            }
          },
          logo: {
            main: 'var(--colors-semantic-logo-main)',
            accent: 'var(--colors-semantic-logo-accent)',
            white: 'var(--colors-semantic-logo-white)'
          }
        }
      },
      spacing: {
        '4xs': 'var(--space-semantic-4xs)',
        '3xs': 'var(--space-semantic-3xs)',
        '2xs': 'var(--space-semantic-2xs)',
        xs: 'var(--space-semantic-xs)',
        sm: 'var(--space-semantic-sm)',
        md: 'var(--space-semantic-md)',
        lg: 'var(--space-semantic-lg)',
        xl: 'var(--space-semantic-xl)',
        '2xl': 'var(--space-semantic-2xl)',
        '3xl': 'var(--space-semantic-3xl)',
        '4xl': 'var(--space-semantic-4xl)',
        '5xl': 'var(--space-semantic-5xl)',
        '6xl': 'var(--space-semantic-6xl)',
        '7xl': 'var(--space-semantic-7xl)',
        '8xl': 'var(--space-semantic-8xl)',
        '9xl': 'var(--space-semantic-9xl)',
        '10xl': 'var(--space-semantic-10xl)'
      },
      borderRadius: {
        xs: 'var(--border-radius-xs)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        infinity: 'var(--border-radius-infinity)'
      },
      borderWidth: {
        xs: 'var(--border-radius-width-xs)',
        sm: 'var(--border-radius-width-sm)',
        md: 'var(--border-radius-width-md)',
        lg: 'var(--border-radius-width-lg)',
        xl: 'var(--border-radius-width-xl)'
      },
      opacity: {
        '30': 'var(--opacity-semantic-30)',
        '50': 'var(--opacity-semantic-50)',
        '70': 'var(--opacity-semantic-70)',
        '100': 'var(--opacity-semantic-100)'
      },
      fontFamily: {
        noto: ['var(--font-noto-sans-jp)', 'Noto Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive']
      },
      fontSize: {
        // Japanese text sizes
        'jp-text-xs': [
          'var(--typography-semantic-jp-text-nomal-xs-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-text-nomal-xs-line-height)'
          }
        ],
        'jp-text-sm': [
          'var(--typography-semantic-jp-text-nomal-sm-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-text-nomal-sm-line-height)'
          }
        ],
        'jp-text-md': [
          'var(--typography-semantic-jp-text-nomal-md-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-text-nomal-md-line-height)'
          }
        ],
        'jp-text-lg': [
          'var(--typography-semantic-jp-text-nomal-lg-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-text-nomal-lg-line-height)'
          }
        ],
        'jp-text-xl': [
          'var(--typography-semantic-jp-text-nomal-xl-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-text-nomal-xl-line-height)'
          }
        ],
        // Japanese heading sizes
        'jp-heading-xs': [
          'var(--typography-semantic-jp-heading-nomal-xs-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-heading-nomal-xs-line-height)'
          }
        ],
        'jp-heading-sm': [
          'var(--typography-semantic-jp-heading-nomal-sm-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-heading-nomal-sm-line-height)'
          }
        ],
        'jp-heading-md': [
          'var(--typography-semantic-jp-heading-nomal-md-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-heading-nomal-md-line-height)'
          }
        ],
        'jp-heading-lg': [
          'var(--typography-semantic-jp-heading-nomal-lg-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-heading-nomal-lg-line-height)'
          }
        ],
        'jp-heading-xl': [
          'var(--typography-semantic-jp-heading-nomal-xl-font-size)',
          {
            lineHeight: 'var(--typography-semantic-jp-heading-nomal-xl-line-height)'
          }
        ],
        // English heading sizes
        'en-heading-xs': [
          'var(--typography-semantic-en-heading-xs-font-size)',
          {
            lineHeight: 'var(--typography-semantic-en-heading-xs-line-height)'
          }
        ],
        'en-heading-sm': [
          'var(--typography-semantic-en-heading-sm-font-size)',
          {
            lineHeight: 'var(--typography-semantic-en-heading-sm-line-height)'
          }
        ],
        'en-heading-md': [
          'var(--typography-semantic-en-heading-md-font-size)',
          {
            lineHeight: 'var(--typography-semantic-en-heading-md-line-height)'
          }
        ],
        'en-heading-lg': [
          'var(--typography-semantic-en-heading-lg-font-size)',
          {
            lineHeight: 'var(--typography-semantic-en-heading-lg-line-height)'
          }
        ],
        'en-heading-xl': [
          'var(--typography-semantic-en-heading-xl-font-size)',
          {
            lineHeight: 'var(--typography-semantic-en-heading-xl-line-height)'
          }
        ]
      }
    }
  },
  plugins: []
};
export default config;
