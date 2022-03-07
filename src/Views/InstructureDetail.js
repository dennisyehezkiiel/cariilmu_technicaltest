import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInstructureDetail } from "../store/actionCreator/actionCreator";

function InstructureDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { instructureDetail } = useSelector((state) => state);
  console.log(instructureDetail);

  useEffect(() => {
    dispatch(fetchInstructureDetail(id));
  }, [dispatch, id]);
  return (
    <>
      <div>Ini instruktur detail</div>
    </>
  );
}

export default InstructureDetail;
