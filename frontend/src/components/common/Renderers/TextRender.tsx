import React from 'react';
 
interface CellProps {
    value: string
}

export const TextRender: React.FC<CellProps> = ({ value }) => {
  return <span>{value}</span>;
};
