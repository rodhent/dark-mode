import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialDarkMode) => {
	const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialDarkMode)

	console.log('darkmode', darkMode)

	return [darkMode, setDarkMode]
}
