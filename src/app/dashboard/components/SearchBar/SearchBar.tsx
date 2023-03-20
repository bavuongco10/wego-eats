import Form from "@/app/dashboard/components/SearchBar/Form";

const SearchBar = ({ categoryId }: { categoryId: string }) => {
  return (
    <Form categoryId={categoryId}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          name="search"
          type="search"
          className="block p-2 pl-10 h-10 leading-10 text-black border border-gray-50 rounded-xl focus:ring-mainYellow focus:border-mainYellow"
          placeholder="Enter restaurant name.."
        />
      </div>
    </Form>
  );
};

export default SearchBar;
