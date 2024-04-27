import { Spinner } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import Character from "./Character";
import CustomPagination from "./Pagination";
import SearchAndFilters from "./SearchAndFilters";

const BASEURL = "https://rickandmortyapi.com/api";

const Page = () => {
  const [response, setResponse] = useState<CharacterResponse | null>(null);

  const [fetching, setFetching] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const characters = useMemo(() => response?.results, [response]);

  const getCharacters: GetCharacter = async (page, search, status) => {
    setFetching(true);
    const res = await fetch(
      `${BASEURL}/character?page=${page}&name=${search}&status=${status}`
    );
    const data = await res.json();
    setResponse(data);
    setFetching(false);
  };

  useEffect(() => {
    getCharacters(page, search, status);
  }, [search, status, page]);

  return (
    <div className="p-2">
      <SearchAndFilters
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        status={status}
        setStatus={setStatus}
      />
      {fetching ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Spinner />
        </div>
      ) : (
        <>
          {characters?.length ? (
            <div className="grid grid-cols-3 gap-5 px-10 my-10">
              {characters.map((character) => (
                <div key={character?.id} className="w-full">
                  <Character {...character} />
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-2xl font-bold h-[60vh] w-full flex justify-center items-center">
              Character Not Found 🙁
            </h1>
          )}

          {(response?.results?.length ?? 0) > 0 && (
            <CustomPagination
              limit={limit}
              page={page}
              setLimit={setLimit}
              setPage={setPage}
              totalCount={Number(response?.info?.count ?? 0)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
