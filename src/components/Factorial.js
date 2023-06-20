import { useState, useMemo } from "react";
export function CalculateFactorial() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => factorialNu(number), [number]);
  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  return (
    <div>
      factorial of {""}
      <input value={number} onChange={handleChange} />
      is {factorial}
    </div>
  );
}
export default CalculateFactorial;

const factorialNu = (n) => {
  return n <= 1 ? 1 : n * factorialNu(n - 1);
};
