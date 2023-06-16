import React from "react";
import Detail from "./Detail";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return <Detail id={id} />;
}

export default DetailPage;
