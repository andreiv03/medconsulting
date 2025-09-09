"use client";

import NextImage, { type ImageProps } from "next/image";
import { useMemo } from "react";

const basePath = process.env["NEXT_PUBLIC_BASE_PATH"] || "";

export default function Image(props: ImageProps) {
  const { alt, src, ...rest } = props;

  const prefixedSrc = useMemo(() => {
    if (typeof src !== "string") {
      return src;
    }

    if (src.startsWith("http://") || src.startsWith("https://")) {
      return src;
    }

    return `${basePath}${src}`;
  }, [src]);

  return <NextImage alt={alt} src={prefixedSrc} {...rest} />;
}
