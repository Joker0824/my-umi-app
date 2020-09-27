import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgStart({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="start_svg__icon"
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
        d="M0 512a512 512 0 101024 0A512 512 0 100 512z"
        fill="#00BE82"
        opacity={0.2}
      />
      <path
        d="M235.00799999999998 512a276.992 276.992 0 10553.984 0 276.992 276.992 0 10-553.984 0z"
        fill="#00BE82"
      />
    </svg>
  );
}

const MemoSvgStart = React.memo(SvgStart);
export default MemoSvgStart;
