"use client"
import React from "react";
import {fetcher} from "./mockFetcher";
import {useQuery} from "@tanstack/react-query";

const DemoOfReactQuerySwr = () => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['/api/test-react-swr-demo'],
    queryFn: fetcher
  })
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data?.name}!</div>
}
export default DemoOfReactQuerySwr