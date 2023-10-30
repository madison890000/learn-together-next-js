"use client"
import useSWR from 'swr';
import React from "react";
import {fetcher} from "./mockFetcher";

const DemoOfSwr = () => {
  const {data, error, isLoading} = useSWR(
    '/api/test-swr-demo',
    fetcher
  );
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data?.name}!</div>
}
export default DemoOfSwr