import React, {useEffect} from "react";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";
import { useSelector , useDispatch} from "react-redux";

function Cats() {

const catPics = useSelector((state) => state.entities)

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCats)
},[dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
