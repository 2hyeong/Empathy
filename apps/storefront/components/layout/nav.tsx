import Link from "next/link";
import { Typography } from "ui";

export default function Nav() {
  return (
    <Link
      style={{
        color: "currentcolor",
        textDecoration: "none",
      }}
      href="/"
    >
      <Typography variant="body1" fontWeight="bold">
        공감해
      </Typography>
    </Link>
  );
}
