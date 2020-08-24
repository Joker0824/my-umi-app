import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBroke({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="broke_svg__icon"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style />
      </defs>
      <path
        d="M736 288c-.16-123.42-100.38-223.42-224-223.42S288.16 164.58 288 288zM64 544h160v64H64zm.004 306.745l183.763-183.763 45.254 45.255L109.258 896zm45.259-594.744L301.83 448.568l-45.255 45.254L64.008 301.256zM960 608H800v-64h160zm-45.25 288L730.985 712.237l45.255-45.254 183.763 183.762zm45.252-594.74L767.436 493.826l-45.255-45.255 192.566-192.566z"
        fill="currentColor"
      />
      <path
        d="M224 384v320c0 140.8 115.2 256 256 256V320H288a64.19 64.19 0 00-64 64zm512-64H544v640c140.8 0 256-115.2 256-256V384a64.19 64.19 0 00-64-64z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgBroke = React.memo(SvgBroke);
export default MemoSvgBroke;
