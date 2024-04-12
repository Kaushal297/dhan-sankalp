import { useContext } from "react";
import { ThemeProviderContext, ThemeProviderState, initialState } from "../ThemeProvider";

export const useTheme = (): ThemeProviderState => {
	const context = useContext(ThemeProviderContext);

	if (context.theme === "system" && context.setTheme === initialState.setTheme)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
