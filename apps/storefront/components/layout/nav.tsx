import Link from "next/link";
import { Typography } from "ui";

export default function Nav() {
  return (
    <Link
      style={{
        color: "currentcolor",
      }}
      href="/"
    >
      <Typography variant="h3" fontWeight="bold">
        공감해
      </Typography>
    </Link>
  );
}
