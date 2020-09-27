import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgResult({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      className="result_svg__icon"
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
        d="M959.505 255.784H512V127.99h.099V64.012H64.012v895.547h64.012V319.828h768.149v192.381h64.181V255.784h-.849zm-511.418 0H128.025V127.99h320.062v127.794z"
        fill="#0F589E"
      />
      <path d="M128.025 895.639H512.1v63.919H128.025z" fill="#0F589E" />
      <path
        d="M512.568 767.383h255.729v127.838l191.889-159.588-191.889-159.587v127.419H512.568z"
        fill="#C92A52"
      />
      <path
        d="M192.037 383.486h64.012v256.425h-64.012zm128.025 64.168h64.012V639.91h-64.012zm128.025 64.044h64.012V639.91h-64.012z"
        fill="#0F589E"
      />
    </svg>
  );
}

const MemoSvgResult = React.memo(SvgResult);
export default MemoSvgResult;
