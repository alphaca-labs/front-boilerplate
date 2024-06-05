export type ApiResponse<T> = {
  code: number;
  message: string;
  result: T;
};

export type InfiniteApiResponse<T> = {
  code: number;
  message: string;
  result: T[];
  pageRequestDto: {
    totalElements: number;
    currentPageElements: number;
    totalPage: number;
    isFirst: boolean;
    isLast: boolean;
  };
};
