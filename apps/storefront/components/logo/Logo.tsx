// next
import NextLink from "next/link";
import Image from "next/image";
// ui
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const Link = styled(NextLink)(() => ({
  display: "contents",
}));

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        width={40}
        height={40}
        alt="로고"
        priority
      />
    </Link>
  );
}
