import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClassDetail } from "../store/actionCreator/actionCreator";

function ClassDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { classDetail, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchClassDetail(id));
  }, [dispatch, id]);

  if (loading || classDetail.length === 0) {
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
        <div className="flex justify-center p-28">
          <div className="flex flex-col m-2 space-y-4">
            <h1 className="font-bold text-xl text-slate-500">Master Class</h1>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Kode</label>
                <input
                  type="text"
                  name="kode"
                  value={classDetail.code}
                  className="border-2 border-zinc-300 w-fit px-2 rounded-md text-slate-400 text-slate-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Judul</label>
                <input
                  type="text"
                  name="judul"
                  value={classDetail.name}
                  className="border-2 border-zinc-300 w-fit px-2 rounded-md text-slate-400"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="font-semibold text-slate-500">Deskripsi</label>
              <textarea
                type="text"
                name="deskripsi"
                value={classDetail.target_group}
                className="border-2 border-zinc-300 h-40 px-2 rounded-md text-slate-400"
              />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Kategori</label>
                <select
                  name="kategori"
                  className="border-2 border-zinc-300 px-2 rounded-md text-slate-400"
                >
                  <option>{classDetail.course_category.name}</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Tipe</label>
                <select
                  name="tipe"
                  className="border-2 border-zinc-300 px-2 rounded-md text-slate-400"
                >
                  <option>{classDetail.course_type.name}</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Level</label>
                <select
                  name="level"
                  className="border-2 border-zinc-300 px-2 rounded-md text-slate-400"
                >
                  <option>{classDetail.course_level.name}</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">
                  Metode Ajar
                </label>
                <select
                  name="metodeAjar"
                  className="border-2 border-zinc-300 px-2 rounded-md text-slate-400"
                >
                  <option>{classDetail.course_teach_method.name}</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">
                  Instruktur
                </label>
                <select
                  name="instruktur"
                  className="border-2 border-zinc-300 w-fit px-2 rounded-md text-slate-400"
                >
                  {classDetail.instructors.map((el, index) => (
                    <option key={index}>{el.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-slate-500">Durasi</label>
                <input
                  name="durasi"
                  type="text"
                  value={classDetail.duration}
                  className="border-2 border-zinc-300 w-fit px-2 rounded-md text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ClassDetail;
