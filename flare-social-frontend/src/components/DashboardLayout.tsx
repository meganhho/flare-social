import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  activePage: string;
  onRefresh?: () => void;
  isLoading?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  activePage,
  onRefresh,
  isLoading
}) => {
  return (
    <div className="flex h-screen bg-[#F5F5F7] animate-fade-in">
      <Sidebar 
        activePage={activePage} 
        onRefresh={onRefresh}
        isLoading={isLoading}
      />
      
      <div className="flex-1 ml-80 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 