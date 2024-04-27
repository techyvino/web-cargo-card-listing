import { Pagination } from "@nextui-org/react";

interface PaginationProps {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalCount: number;
}

const CustomPagination = ({
  limit,
  setPage,
  page,
  totalCount,
}: PaginationProps) => {
  const totalPages = Number(totalCount || 0) / Number(limit || totalCount || 1);

  return (
    <div className="flex justify-center items-center">
      {totalPages > 1 && (
        <Pagination
          showControls
          variant="light"
          total={Math.ceil(totalPages || 0)}
          page={page}
          boundaries={2}
          onChange={setPage}
        />
      )}
    </div>
  );
};

export default CustomPagination;
