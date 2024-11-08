"use client";

import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import AddPagination from "../components/AddPagination";
import { Auction, PagedResult } from "@/types";
import { getData } from "../actions/auctionsActions";
import Filters from "./Filters";
import { useParamsStore } from "@/hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import queryString from "query-string";
import EmptyFilter from "../components/EmptyFilter";

const Listings = () => {
  const [data, setData] = useState<PagedResult<Auction>>();

  const params = useParamsStore(
    useShallow((state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
    }))
  );

  const setParams = useParamsStore((state) => state.setParams);
  const url = queryString.stringifyUrl({ url: "", query: params });

  const setPageNumber = (pageNumber: number) => {
    setParams({ pageNumber });
  };

  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, [url]);

  if (!data) return <h3>Loading ....</h3>;

  return (
    <>
      <Filters />
      {data.totalCount === 0 ? (
        <EmptyFilter showReset />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-6">
            {data &&
              data.results.map((auction) => (
                <AuctionCard auction={auction} key={auction.id} />
              ))}
          </div>
          <div className="flex mt-4 justify-center">
            <AddPagination
              currentPage={params.pageNumber}
              pageCount={data.pageCount}
              pageChanged={setPageNumber}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Listings;
