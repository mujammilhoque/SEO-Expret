import Link from "next/link"; 

const CopyrightText = () => {
  return (
    <p>
      Copyright © {new Date().getFullYear()} by <Link href="/">Harry</Link> {' '}
      All rights reserved.
    </p>
  );
};

export default CopyrightText;
