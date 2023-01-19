import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PokemonListItem from "./PokemonListItem";
import { useUrl } from "../contexts/UrlContext";
import SearchListItem from "./SearchListItem";
import { Link } from "react-router-dom";

function Pagination({ item, pokemons }) {
  const [pageNum, setPageNum] = useState(0);
  const [value, setValue] = useState([]);
  const [paginateCount, setPaginateCount] = useState();
  const { pokemonUrl } = useUrl();

  const limit = 20;
  const pageCount = Math.ceil(paginateCount / limit);

  const PaginationCount = () => {
    axios
      .get(pokemonUrl)
      .then((res) => setPaginateCount(res.data.count))
      .catch((err) => console.log(err));
  };

  const handlePageClick = (data) => {
    setPageNum(data.selected);
  };

  const fetchComment = (pageNum) => {
    axios
      .get(`${pokemonUrl}?offset=${pageNum * limit}&limit=${limit}`)
      .then((res) => setValue(res.data.results));
  };

  useEffect(() => {
    PaginationCount();
    fetchComment(pageNum);
  }, [pageNum, value]);

  return (
    <div>
      {item === undefined || item === "" ? (
        <div>
          <div className="grid grid-cols-4 gap-6 mx-5 mt-10">
            {value?.map((pokemonPictureTodo, index) => (
              <Link to="/stats" state={{ pokemonPictureTodo }}>
                <PokemonListItem
                  key={index}
                  pokemonPictureTodo={pokemonPictureTodo}
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              pageClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6 mx-5 mt-10">
          {pokemons
            ?.filter((poke) => poke.name.includes(item))
            ?.map((pokemon) => (
              <Link to="/stats" state={{ pokemon }}>
                <SearchListItem pokemon={pokemon} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default Pagination;
