
export const COLORS = {
    primary_color: '#00628f',
    primary_disabled_color: '#3f89ab',
    primary_dark: '#002d42',
    secondary_color: '#b5dcee',
    background_color: '#b5dcee',
    font_color: '#57acd3',
    font_color_dark: '#4f6772',
    light_gray: '#dee3e0',
    gray: '#f2f2f2',
    gray_dark: '#e6e6e6',
    success: '#08c298',
    successDarken: '#069172',
    error: '#cb0000',
    warning: '#ffd500',
    temp: '#5aa354',
    humidity: '#7ca5e5',
    co2: '#dae57a',
    light: '#a3549e',
    pm2: '#e5ca7a',
    voc: '#937ae5'
}

export const SIZES = {
    // Global sizes
    base: 9,
    font: 14,
    radius: 12,
    padding: 24,

    // Font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14
}

export const FONTS = {
    h1: { fontFamily: "Rubik-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Rubik-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Rubik-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Rubik-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Rubik-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Rubik-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Rubik-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Rubik-Regular", fontSize: SIZES.body4, lineHeight: 22 },
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
