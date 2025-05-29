import { SVGProps, ImgHTMLAttributes } from 'react';

interface SvgIconProps {
  src?: string;
  size?: number;
  className?: string;
  svgProps?: SVGProps<SVGSVGElement>;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}

export function SvgIcon({ src, size = 24, className = '', svgProps, imgProps }: SvgIconProps) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        className={className}
        {...imgProps}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      className={className}
      {...svgProps}
    />
  );
} 