import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchInstructureDetail,
  instructureDetails,
} from "../store/actionCreator/actionCreator";

function InstructureDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { instructureDetail, loading, error } = useSelector((state) => state);

  const handleChangeInput = (e) => {
    const result = e.target.value;
    const field = e.target.name;
    const data = {
      ...instructureDetail,
      [field]: result,
    };
    dispatch(instructureDetails(data));
  };

  useEffect(() => {
    console.log("masuk sini");
    dispatch(fetchInstructureDetail(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
  if (error) {
    return (
      <>
        <p>Something went wrong</p>
      </>
    );
  }

  return (
    <>
      <form>
        <div className="flex flex-col space-y-6 p-36">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <img
                alt="avatar"
                src={instructureDetail.avatar}
                className="h-16 w-16 object-cover rounded-full"
              />
              <p className="text-slate-600 font-semibold">Add photo</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col w-full">
              <label className="font-semibold text-slate-600">Nama</label>
              <input
                type="text"
                name="kode"
                value={instructureDetail.name}
                onChange={handleChangeInput}
                className="border-2 border-zinc-300 rounded-md px-2 text-slate-400"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold text-slate-600">Deskripsi</label>
            <textarea
              type="text"
              name="deskripsi"
              value={instructureDetail.description}
              onChange={handleChangeInput}
              className="border-2 border-zinc-300 rounded-md px-2 text-slate-400 h-40"
            />
          </div>
          <div className="flex flex-row items-center space-x-2">
            <p className="font-semibold text-slate-600">Social Media</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" bg-yellow-500 rounded-md h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </form>
    </>
  );
}

export default InstructureDetail;
