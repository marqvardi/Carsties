export type PagedResult<T> = {
  results: T[];
  pageCount: number;
  totalCount: number;
};

export type Auction = {
  reservePrice: number;
  seller: string;
  winner?: string;
  soldAmount: number;
  currentHighBid: number;
  createdAT: string;
  updatedAt: string;
  auctionEnd: string;
  status: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  imageUrl: string;
  id: string;
};
