// src/types/index.ts

export interface Transaction {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    subcategory?: string;
    account: string;
    description: string;
    date: string;
  }
  
  export interface Account {
    id: string;
    name: string;
    type: 'bank' | 'mobile_money' | 'cash';
    balance: number;
  }
  
  export interface Budget {
    id: string;
    category: string;
    amount: number;
    spent: number;
    period: 'monthly' | 'yearly';
    startDate: string;
    endDate: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    type: 'income' | 'expense';
    subcategories: string[];
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }