import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

/*
  Reusable button / link component with Victorian styling.

  variant="primary"  — golden border, fills with gilded gradient on hover + shimmer sweep
  variant="ghost"    — subdued parchment border, no fill
  variant="link"     — inline text-only with animated gold underline

  Pass `href` to render a Next.js <Link> instead of a <button>.
*/

type BaseProps = {
  variant?: "primary" | "ghost" | "link";
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: Props) {
  const cls =
    variant === "primary"
      ? `btn-primary ${className}`
      : variant === "ghost"
      ? `btn-ghost ${className}`
      : `link-gold ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
