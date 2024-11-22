// Task 2: حساب المجموع والمتوسط باستخدام reduce
export const calculateSumAndAverage = (numbers) => {
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    const average = totalSum / numbers.length;
    return { totalSum, average };
  };
  
  // Task 3: إزالة التكرارات من مصفوفة
  export const removeDuplicates = (array) => {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
  };
  