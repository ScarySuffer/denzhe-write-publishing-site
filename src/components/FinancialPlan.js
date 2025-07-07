// src/components/FinancialPlan.js
import React from 'react';
import './styles/FinancialPlan.css';

export default function FinancialPlan() {
  return (
    <div className="financial-plan">
      <h2>Financial Plan</h2>
      <ul>
        <li>Publishing packages: R2000–R8000</li>
        <li>Ghostwriting: R1500–R10,000</li>
        <li>Editing: R300–R1500</li>
        <li>Journals: R100–R300</li>
        <li>Book launches: R300–R5000</li>
        <li>Goal: ± R15,000 – R40,000/month</li>
      </ul>
    </div>
  );
}
