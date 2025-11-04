import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
  imgStyles?: string;
  titleStyles?: string;
}
const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
  titleStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image src={imgUrl} alt={alt} width={18} height={18} />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
