import React from 'react';
import ProductList from './ProductList';
import { calculateSumAndAverage, removeDuplicates } from './Tasks';

function App() {
  const numbers = [10, 20, 30, 40, 50];
  const { totalSum, average } = calculateSumAndAverage(numbers);

  const strings = ["apple", "banana", "apple", "orange", "banana"];
  const uniqueStrings = removeDuplicates(strings);

  return (
    <div className="App">
      <ProductList />
      <div>
        <h2>Task 2: Sum and Average</h2>
        <p>Total Sum: {totalSum}</p>
        <p>Average: {average}</p>
      </div>
      <div>
        <h2>Task 3: Unique Strings</h2>
        <p>{uniqueStrings.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;
