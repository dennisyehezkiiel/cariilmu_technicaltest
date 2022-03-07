import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClassDetail } from "../store/actionCreator/actionCreator";

function ClassDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { classDetail } = useSelector((state) => state);
  console.log(classDetail);

  useEffect(() => {
    dispatch(fetchClassDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>Ini detail class</div>
    </>
  );
}

export default ClassDetail;
