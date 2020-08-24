import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgControl({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="control_svg__icon"
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
        d="M660.992 556.436a20.846 20.846 0 00-.512 4.583v187.49c0 11.34 9.492 21.227 21.212 21.227 11.377 0 21.217-9.498 21.217-21.228V603.116l211.523 211.522c8.596 8.591 21.965 8.53 30.244.246 8.038-8.039 8.176-21.832-.24-30.239L732.912 573.117h136.463c11.351 0 21.238-9.492 21.238-21.207 0-11.376-9.508-21.217-21.238-21.217H681.723c-11.351 0-21.238 9.498-21.238 21.217a19.85 19.85 0 00.507 4.526zM957.44 191.048c0-46.644-37.883-84.588-84.608-84.588H151.173c-46.33 0-84.613 37.873-84.613 84.588V700.62c0 46.648 37.878 84.598 84.613 84.598h466.883v-51.753H151.183c-23.306 0-32.86-9.749-32.86-33.378V191.596c0-23.588 9.79-33.383 32.86-33.383h721.629c23.306 0 32.865 9.754 32.865 33.383v296.663h51.763M486.21 785.224h51.764v84.838H486.21v-84.838zm261.77 106.644a25.672 25.672 0 01-25.67 25.672H306.892a25.672 25.672 0 110-51.349h415.416a25.682 25.682 0 0125.672 25.677z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSvgControl = React.memo(SvgControl);
export default MemoSvgControl;
