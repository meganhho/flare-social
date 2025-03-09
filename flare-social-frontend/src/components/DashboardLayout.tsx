import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  activePage: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePage }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} />
      
      <div className="flex-1 ml-80 p-8 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout; 