// Color design tokens
export const tokens = {
grey: {
  100: "#e0e0e0",
  200: "#c2c2c2",
  300: "#a3a3a3",
  400: "#858585",
  500: "#666666",
  600: "#525252",
  700: "#3d3d3d",
  800: "#292929",
  900: "#141414"
},
primary: {
  100: "#d0d1d5",
  200: "#a1a4ab",
  300: "#727681",
  400: "#434957",
  500: "#141b2d",
  600: "#101624",
  700: "#0c101b",
  800: "#080b12",
  900: "#040509"
},
greenAccent: {
  100: "#dbf5ee",
  200: "#b7ebde",
  300: "#94e2cd",
  400: "#70d8bd",
  500: "#4cceac",
  600: "#3da58a",
  700: "#2e7c67",
  800: "#1e5245",
  900: "#0f2922"
},
redAccent: {
  100: "#f8dcdb",
  200: "#f1b9b7",
  300: "#e99592",
  400: "#e2726e",
  500: "#db4f4a",
  600: "#af3f3b",
  700: "#832f2c",
  800: "#58201e",
  900: "#2c100f"
},
blueAccent: {
  100: "#e1e2fe",
  200: "#c3c6fd",
  300: "#a4a9fc",
  400: "#868dfb",
  500: "#6870fa",
  600: "#535ac8",
  700: "#3e4396",
  800: "#2a2d64",
  900: "#151632"
},
grey: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
},
primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#101624",
    500: "#141b2d",
    600: "#434957",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
},
greenAccent: {
    100: "#0f2922",
    200: "#1e5245",
    300: "#2e7c67",
    400: "#3da58a",
    500: "#4cceac",
    600: "#70d8bd",
    700: "#94e2cd",
    800: "#b7ebde",
    900: "#dbf5ee",
},
redAccent: {
    100: "#2c100f",
    200: "#58201e",
    300: "#832f2c",
    400: "#af3f3b",
    500: "#db4f4a",
    600: "#e2726e",
    700: "#e99592",
    800: "#f1b9b7",
    900: "#f8dcdb",
},
blueAccent: {
    100: "#151632",
    200: "#2a2d64",
    300: "#3e4396",
    400: "#535ac8",
    500: "#6870fa",
    600: "#868dfb",
    700: "#a4a9fc",
    800: "#c3c6fd",
    900: "#e1e2fe",
}, 
};

// mui theme settings
export const themeSettings = () => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark') ? {
        // values for dark mode
        primary: {
          main: tokens.primary[500],
          dark: tokens.primary[700],
          light: tokens.primary[300],
        },
        secondary: {
          main: tokens.greenAccent[500],
          dark: tokens.greenAccent[700],
          light: tokens.greenAccent[300],
        },
        neutral: {
          main: tokens.grey[500],
          dark: tokens.redAccent[600],
          light: tokens.redAccent[400],
        },
        error: {
          main: tokens.redAccent[500],
          dark: tokens.redAccent[700],
          light: tokens.redAccent[300],
        },
        warning: {
          main: tokens.blueAccent[500],
          dark: tokens.blueAccent[700],
          light: tokens.blueAccent[300],
        },
        info: {
          main: tokens.grey[500],
          dark: tokens.grey[700],
          light: tokens.grey[300],
        },
        success: {
          main: tokens.greenAccent[500],
          dark: tokens.greenAccent[700],
          light: tokens.greenAccent[300],
        },
        background: {
          default: tokens.grey[900],
          paper: tokens.grey[800],
          light: tokens.grey[700],
          main: tokens.grey[600],
        },
        text: {
          primary: tokens.grey[100],
          secondary: tokens.grey[300],
          disabled: tokens.grey[500],
          hint: tokens.grey[500],
        },
        divider: tokens.grey[500],
        action: {
          active: tokens.grey[100],
          hover: tokens.grey[200],
          selected: tokens.grey[300],
          disabled: tokens.grey[500],
          disabledBackground: tokens.grey[800],
        },
      } : {
        // values for light mode
        primary: {
          main: tokens.primary[500],
          dark: tokens.primary[700],
          light: tokens.primary[300],
        },
        secondary: {
          main: tokens.greenAccent[500],
          dark: tokens.greenAccent[700],
          light: tokens.greenAccent[300],
        },
        neutral: {
          main: tokens.grey[500],
          dark: tokens.redAccent[600],
          light: tokens.redAccent[400],
        },
        error: {
          main: tokens.redAccent[500],
          dark: tokens.redAccent[700],
          light: tokens.redAccent[300],
        },
        warning: {
          main: tokens.blueAccent[500],
          dark: tokens.blueAccent[700],
          light: tokens.blueAccent[300],
        },
        info: {
          main: tokens.grey[500],
          dark: tokens.grey[700],
          light: tokens.grey[300],
        },
        success: {
          main: tokens.greenAccent[500],
          dark: tokens.greenAccent[700],
          light: tokens.greenAccent[300],
        },
        background: {
          default: tokens.grey[100],
          paper: tokens.grey[200],
          light: tokens.grey[300],
          main: tokens.grey[400],
        },
        text: {
          primary: tokens.grey[900],
          secondary: tokens.grey[700],
          disabled: tokens.grey[500],
          hint: tokens.grey[500],
        },
        divider: tokens.grey[500],
        action: {
          active: tokens.grey[100],
          hover: tokens.grey[200],
          selected: tokens.grey[300],
          disabled: tokens.grey[500],
          disabledBackground: tokens.grey[200],
        },
      },
    },
    typography: {
      fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
      h1: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: '4.5rem',
        letterSpacing: '-0.01562em',
        [breakpoints.down('sm')]: {
          fontSize: '2.5rem',
          lineHeight: '3.5rem',
        },
      },
      h2: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: '3.5rem',
        letterSpacing: '-0.00833em',
        [breakpoints.down('sm')]: {
          fontSize: '2rem',
          lineHeight: '3rem',
        },
      },
      h3: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: '3rem',
        letterSpacing: '0em',
        [breakpoints.down('sm')]: {
          fontSize: '1.5rem',
          lineHeight: '2.5rem',
        },
      },
      h4: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
        letterSpacing: '0.00735em',
        [breakpoints.down('sm')]: {
          fontSize: '1.25rem',
          lineHeight: '2rem',
        },
      },
      h5: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: '2rem',
        letterSpacing: '0em',
        [breakpoints.down('sm')]: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
      },
    },
      h6: {
        fontFamily: ['Rubik', 'Inter', 'sans-serif' ].join(','),
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.0075em',
        [breakpoints.down('sm')]: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
      },
    },
  };
};