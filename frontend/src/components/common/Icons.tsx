import React from 'react';
import ThreeDots from './Icons/ThreeDots';

const iconMap = {
  "3dot": ThreeDots,
};

type IconName = keyof typeof iconMap;

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icons: React.FC<IconsProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icons;
