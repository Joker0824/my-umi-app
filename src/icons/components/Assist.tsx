import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAssist({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="assist_svg__icon"
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
        d="M370.688 406.187L101.035 135.85c-10.923-10.923-10.923-27.99 0-38.912 10.922-10.923 27.989-10.923 38.912 0L409.6 367.275c10.923 10.922 10.923 27.989 0 38.912-10.923 10.24-27.99 10.24-38.912 0z"
        fill="currentColor"
      />
      <path
        d="M266.24 133.12H102.4c-15.019 0-27.307-12.288-27.307-27.307S87.381 78.507 102.4 78.507h163.84c15.019 0 27.307 12.288 27.307 27.306s-12.288 27.307-27.307 27.307z"
        fill="currentColor"
      />
      <path
        d="M75.093 271.019V103.765c0-14.336 11.606-25.258 25.259-25.258h3.413c14.336 0 25.259 11.605 25.259 25.258V271.02c0 14.336-11.605 25.258-25.259 25.258h-3.413c-13.653.683-25.259-10.922-25.259-25.258zM273.067 890.88h-163.84c-15.019 0-27.307 12.288-27.307 27.307s12.288 27.306 27.307 27.306h163.84c15.018 0 27.306-12.288 27.306-27.306s-12.288-27.307-27.306-27.307z"
        fill="currentColor"
      />
      <path
        d="M81.92 754.347v163.84c0 15.018 12.288 27.306 27.307 27.306s27.306-12.288 27.306-27.306v-163.84c0-15.019-12.288-27.307-27.306-27.307S81.92 739.328 81.92 754.347zM757.76 884.053H921.6c15.019 0 27.307 12.288 27.307 27.307s-12.288 27.307-27.307 27.307H757.76c-15.019 0-27.307-12.288-27.307-27.307s12.288-27.307 27.307-27.307z"
        fill="currentColor"
      />
      <path
        d="M948.907 747.52v163.84c0 15.019-12.288 27.307-27.307 27.307s-27.307-12.288-27.307-27.307V747.52c0-15.019 12.288-27.307 27.307-27.307s27.307 12.288 27.307 27.307zM757.76 133.12H921.6c15.019 0 27.307-12.288 27.307-27.307S936.619 78.507 921.6 78.507H757.76c-15.019 0-27.307 12.288-27.307 27.306s12.288 27.307 27.307 27.307z"
        fill="currentColor"
      />
      <path
        d="M948.907 269.653v-163.84c0-15.018-12.288-27.306-27.307-27.306s-27.307 12.288-27.307 27.306v163.84c0 15.019 12.288 27.307 27.307 27.307s27.307-12.288 27.307-27.307z"
        fill="currentColor"
      />
      <path
        d="M654.677 406.187l269.654-269.654c10.922-10.922 10.922-27.989 0-38.912-10.923-10.922-27.99-10.922-38.912 0L616.448 367.275c-10.923 10.922-10.923 27.989 0 38.912 10.24 10.24 27.99 10.24 38.23 0zM370.688 613.035L101.035 882.688c-10.923 10.923-10.923 27.99 0 38.912 10.922 10.923 27.989 10.923 38.912 0L409.6 651.264c10.923-10.923 10.923-27.99 0-38.912-10.923-10.24-27.99-10.24-38.912.683zM654.677 613.035l269.654 269.653c10.922 10.923 10.922 27.99 0 38.912-10.923 10.923-27.99 10.923-38.912 0L616.448 651.264c-10.923-10.923-10.923-27.99 0-38.912 10.24-10.24 27.99-10.24 38.23.683z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgAssist = React.memo(SvgAssist);
export default MemoSvgAssist;