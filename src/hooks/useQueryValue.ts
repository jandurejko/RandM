import { useLocation } from 'react-router-dom';

export default function useQueryValue<T extends string>(
  name: string,
  defaultValue: string | null = null,
): T | null {
  const location = useLocation();
  const sp = new URLSearchParams(location.search);

  if (!sp.has(name)) {
    return defaultValue as T;
  }

  return sp.get(name) as T;
}
