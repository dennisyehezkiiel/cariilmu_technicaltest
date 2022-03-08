import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassList } from "../store/actionCreator/actionCreator";
import { useNavigate } from "react-router-dom";
import {
  BsFillPencilFill,
  BsFillSquareFill,
  BsEraserFill,
} from "react-icons/bs";

function ClassList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { classList, loading, error } = useSelector((state) => state);

  function seeDetail(id) {
    navigate(`/classdetail/${id}`);
  }

  useEffect(() => {
    dispatch(fetchClassList());
  }, [dispatch]);

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
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-auto">
            <div className="inline-block min-w-full shadow rounded-md overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      NO
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      NAMA
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      TIPE
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      KATEGORI
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      TINGKAT
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      METODE
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      OPSI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classList.map((el, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="capitalize text-gray-900 whitespace-no-wrap text-center">
                          {index + 1}
                        </p>
                      </td>
                      <td className="capitalize px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {el.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {el.course_type.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {el.course_category.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center">
                          {el.course_level.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="capitalize text-gray-900 whitespace-no-wrap text-center">
                          {el.course_teach_method.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <div className="flex flex-row space-x-4">
                            <BsFillPencilFill
                              onClick={() => seeDetail(el.id)}
                            />
                            <BsFillSquareFill />
                            <BsEraserFill />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassList;
