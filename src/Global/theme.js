const shadow ={
    md: "0px 1px 2px rgba(56, 56, 56, 0.25)",
    sm:' 0px 1px 2px rgba(56, 56, 56, 0.08)',
}
const fonts={
        h1: {
            size: "font-weight: 600; font-size: 4.5rem;", // 72px
            height: "line-height: 4.875rem;",
            spacing: "letter-spacing: -1.6px;"
        },
        h2: {
            size: "font-weight: 700; font-size: 3rem;", // 48px
            height: "line-height: 3.625rem;",
            spacing: "letter-spacing: -1px;"
        },
        h3: {
            size: "font-weight: 600; font-size: 2rem;", // 32px
            height: "line-height: 2.43rem;",
            spacing: "letter-spacing: -0.2px;"
        },
        h4: {
            size: "font-weight: 600; font-size: 1.5rem;", // 24px
            height: "line-height: 2rem;",
            spacing: "letter-spacing: -0.2px;"
        },
        h5: {
            size: "font-weight: 600;font-size: 1.25rem;", // 20px
            height: "line-height: 1.625rem;",
            spacing: "letter-spacing: -0.2px;"
        },
        h6: {
            size: "font-weight: 600;font-size: 1rem;", // 16px
            height: "line-height: 1.375rem;",
            spacing: "letter-spacing: -0.1px;"
        },
        body1: {
            size: "font-weight: 400;font-size: 1rem;", // 16px
            height: "line-height: 1.5rem;",
            spacing: "letter-spacing: -0.2px;"
        },
        body2: {
            size: "font-weight: 400;font-size: 0.875rem;", // 14px
            height: "line-height: 1rem;",
            spacing: "letter-spacing: 0px;"
        },
        body3: {
            size: "font-weight: 400;font-size: 0.75rem;", // 12px
            height: "line-height: 1rem;",
            spacing: "letter-spacing: 0px;"
        },
    }
export const lightTheme = {
    theme: 'light',
    fonts,
    palette:{
        background : '#F7FAFC',
        sectionBackground : '#fff',
        contentColor : '#1C1C1C',
        gray100 : '#F7FAFC',
        gray200 : '#EFF2F4',
        gray300 : '#E3E8EE',
        gray400 : '#BBBCBE',
        gray500 : '#8B96A5',
        gray600 : '#505050',
        gray800 : '#606060',
        primary:'#0D6EFD',
        primaryGradient:'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)',
    },
    shadow,
};

export const darkTheme = {
    theme: 'dark',
    fonts,
    palette:{
        background : '#121212',
        sectionBackground : '#333',
        contentColor : '#5B8FB9',
        gray100 : '#fff',
        gray200 : '#121212',
        gray300 : '#fff',
        gray400 : '#fff',
        gray500 : '#fff',
        gray600 : '#fff',
        gray800 : '#fff',
        primary:'#fff',
        primaryGradient:'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)',
    },
    shadow,

};