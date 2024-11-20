import { useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';

export const useGetDeviceTheme = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
    }
  }, [colorScheme]);

  return theme;
};
