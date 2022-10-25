import { useEffect, useState } from "react";

export const TestComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const parseDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return <div>{parseDate}</div>;
};
