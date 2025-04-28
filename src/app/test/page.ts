"use client";

import useGetTest from "@/api/test";

export default function Test() {
  const data = useGetTest();
  console.log(data);
}
