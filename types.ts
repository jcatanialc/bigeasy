import React from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  drug: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}