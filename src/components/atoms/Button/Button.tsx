import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};
