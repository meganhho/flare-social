import React from 'react';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#1E2A3B] mb-1">{title}</h1>
      {subtitle && <p className="text-[#71767B]">{subtitle}</p>}
    </div>
  );
};

export default DashboardHeader; 