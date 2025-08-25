import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
