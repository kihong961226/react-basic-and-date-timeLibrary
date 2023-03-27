import { useEffect, useState } from "react";

export default function withLoading<T extends {}>(
  Component: (props: T) => JSX.Element
) {
  const WithLoadingComponent = (props: T) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    return loading ? <p>Loading....</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
