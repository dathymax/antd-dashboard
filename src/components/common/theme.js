export const themeColors = ['#7c0340', '#f44336', '#e91e63', '#9c27b0', '#ff8a80', '#673ab7', '#3f51b5'
    , '#2196f3', '#009688', '#00bcd4', '#B70000', '#4caf50', '#8bc34a', '#cddc39'
    , '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#424242'
    , '#0091ea', '#4527a0', '#440000']

export const changeTheme = (color) => {
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primary-color', JSON.stringify(color));
}

export const initTheme = () => {
    const colorRaw = localStorage.getItem('primary-color');
    if (colorRaw) {
        const color = JSON.parse(colorRaw);
        document.documentElement.style.setProperty('--primary-color', color);
    }
}