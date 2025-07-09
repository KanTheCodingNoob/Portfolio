import {type ReactNode, useEffect, useState} from "react";
import {type Theme, ThemeContext} from "./themeContext.ts";

export default function ThemeProvider({children}: {children: ReactNode}) {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}