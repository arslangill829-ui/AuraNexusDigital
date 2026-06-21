import React from "react";
import * as Lucide from "lucide-react";

interface IconProps extends React.ComponentProps<"svg"> {
  name: string;
  className?: string;
  size?: number;
}

export function ServiceIcon({ name, className, size = 24, ...props }: IconProps) {
  // Map dynamic icon name to Lucide React component
  const IconComponent = (Lucide as any)[name];

  if (!IconComponent) {
    // Fallback icon
    return <Lucide.Command className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
}
