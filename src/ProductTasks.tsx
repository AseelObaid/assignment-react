// Task 4: واجهة Product وحساب السعر الإجمالي
interface Product {
    name: string;
    price: number;
  }
  
  export const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
  };
  
  // Task 5: التحقق من البريد الإلكتروني باستخدام Regex
  export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  