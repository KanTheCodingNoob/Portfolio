import {type ReactNode, useState} from "react";
import {type Theme, ThemeContext} from "./themeContext.ts";

export default function ThemeProvider({children}: {children: ReactNode}) {
	const [theme, setTheme] = useState<Theme>('light');

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}