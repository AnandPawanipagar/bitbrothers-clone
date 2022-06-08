import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Redirect = ({ to = "/" }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, []);

  return <></>;
};

export default Redirect;
