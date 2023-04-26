import { useState } from "react";

const DeleteInfo = () => {
  const [mobile, setMobile] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
    <p className="text-center font-bold text-4xl">Request for deleting your data</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-bold mb-2"
          >
            Mobile:
          </label>
          <input
            id="mobile"
            type="text"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="reason"
            className="block text-gray-700 font-bold mb-2"
          >
            Reason:
          </label>
          <input
            id="reason"
            type="text"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteInfo;
