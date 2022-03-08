import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructureList } from "../store/actionCreator/actionCreator";
import { useNavigate } from "react-router-dom";
import { BsFillPencilFill, BsEraserFill } from "react-icons/bs";

function InstructureList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { instructureList, loading, error } = useSelector((state) => state);

  function seeDetail(id) {
    navigate(`/instructuredetail/${id}`);
  }

  useEffect(() => {
    dispatch(fetchInstructureList());
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
                      TOTAL KELAS
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-yellow-400 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      OPSI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {instructureList.map((el, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="capitalize text-gray-900 whitespace-no-wrap text-center">
                          {index + 1}
                        </p>
                      </td>
                      <td className="capitalize px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-row space-x-2 content-center">
                          <img
                            alt="profile"
                            src={el.avatar}
                            className="object-cover h-10 w-10 rounded-full"
                          />
                          <p className="mt-2 text-gray-900 whitespace-no-wrap text-start">
                            {el.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap text-center rounded-full">
                          {el.total_courses}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center">
                          <div className="flex flex-row space-x-4">
                            <BsFillPencilFill
                              onClick={() => seeDetail(el.id)}
                            />
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

export default InstructureList;
