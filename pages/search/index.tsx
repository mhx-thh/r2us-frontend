import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/search/resource");
  }, []);
  return <React.Fragment></React.Fragment>;
}

export default Index;
