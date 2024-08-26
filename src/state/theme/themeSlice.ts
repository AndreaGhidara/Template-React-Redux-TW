import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    theme: string;
}

const initialState: ThemeState = {
    theme: 'light'
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setLightTheme: (state) => {
            state.theme = 'light';
            const body = document.querySelector('body');
            body?.classList.remove('dark');
        },
        setDarkTheme: (state) => {
            state.theme = 'dark';
            const body = document.querySelector('body');
            body?.classList.add('dark')
        }

    },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;