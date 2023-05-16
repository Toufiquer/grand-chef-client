import React from "react";

const UpdatePost = () => {
  return (
    <div className={` container mx-auto`}>
      <div className="mt-20 mb-3">
        <h2 className={` font-thin text-6xl text-center`}>Update Post</h2>
      </div>
      <div class="mx-auto max-w-lg border border-solid border-current p-4 rounded-lg">
        <form>
          <div class="mb-6">
            <label
              for="success"
              class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Your name
            </label>
            <input
              type="text"
              id="success"
              class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="Success input"
            />
          </div>
          <input
            type="submit"
            value="Update Post"
            class="text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
