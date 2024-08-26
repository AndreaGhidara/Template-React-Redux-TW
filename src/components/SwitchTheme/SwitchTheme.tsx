import { useDispatch, useSelector } from 'react-redux'
import './switchTheme.css'
import { RootState } from '@/state/store'
import { setDarkTheme, setLightTheme } from '@/state/theme/themeSlice'

export default function SwitchTheme() {
    const theme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch();

    const changeTheme = () => {

        if (theme === 'light') {
            dispatch(setDarkTheme());
        }

        if (theme === 'dark') {
            dispatch(setLightTheme());

        }

        console.log(theme);

    }

    return (
        <>
            <label className="switch">
                <input onClick={changeTheme} type="checkbox" />
                <span className="slider"></span>
            </label>
        </>
    )
}
