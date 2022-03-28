import Main from '../layout/Main';

export default function dashboard() {
  const IntakeType: Array<string> = [
    'tablet',
    'Capsule',
    'Injection',
    'Powder',
    'Syrup',
    'Cream',
    'oil',
  ];
  const Age: Array<string> = ['All', 'Child', 'Adult', 'Elderly'];
  const Priscription: Array<string> = ['yes', 'no'];
  const Brand: Array<string> = ['SBL', 'ADEL', 'Deve Herbs'];
  return (
    <Main>
      <section>
        <div className="px-3 md:px-36">
          <div className="flex justify-center">
            <div className="mb-3 w-full ">
              <div className="relative">
                <input
                  className="w-full rounded-lg border-2 border-gray-200 py-4 pl-3 pr-16 text-sm"
                  placeholder="Search For Medicine...."
                />
                <button
                  className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-blue-600 p-2 text-white"
                  type="button"
                >
                  <svg
                    className="h-4 w-4"
                    height="32px"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="32px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <desc />
                    <defs />
                    <g
                      fill="none"
                      fillRule="evenodd"
                      id="Page-1"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <g fill="#929292" id="icon-111-search">
                        <path
                          d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z"
                          id="search"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:sticky lg:top-4">
              <details
                open
                className="overflow-hidden rounded border border-gray-200"
              >
                <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                  <span className="text-sm font-medium">Toggle Filters</span>

                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form
                  action=""
                  className="border-t border-gray-200 lg:border-t-0"
                >
                  <fieldset>
                    <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                      Type
                    </legend>

                    <div className="space-y-2 px-5 py-6">
                      {IntakeType.map((d: string) => {
                        return (
                          <div className="flex items-center" key={d}>
                            <input
                              id="toy"
                              type="checkbox"
                              name="type[toy]"
                              className="h-5 w-5 rounded border-gray-300"
                            />

                            <label
                              htmlFor="toy"
                              className="ml-3 text-sm font-medium"
                            >
                              {d}
                            </label>
                          </div>
                        );
                      })}
                      <div className="pt-2">
                        <button
                          type="button"
                          className="text-xs text-gray-500 underline"
                        >
                          Reset Type
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <fieldset>
                      <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                        Age
                      </legend>

                      <div className="space-y-2 px-5 py-6">
                        {Age.map((d: string) => {
                          return (
                            <div key={d} className="flex items-center">
                              <input
                                id="3+"
                                type="checkbox"
                                name="age[3+]"
                                className="h-5 w-5 rounded border-gray-300"
                              />

                              <label
                                htmlFor="3+"
                                className="ml-3 text-sm font-medium"
                              >
                                {d}
                              </label>
                            </div>
                          );
                        })}

                        <div className="pt-2">
                          <button
                            type="button"
                            className="text-xs text-gray-500 underline"
                          >
                            Reset Age
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                    <button
                      name="reset"
                      type="button"
                      className="rounded text-xs font-medium text-gray-600 underline"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <span className="hidden sm:inline">Showing </span>6 of 24
                  Products
                </p>

                <div className="ml-4">
                  <label htmlFor="SortBy" className="sr-only">
                    Sort
                  </label>

                  <select
                    id="SortBy"
                    name="sort_by"
                    className="h-6 rounded border-2 border-gray-200 bg-white text-sm"
                  >
                    <option>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}
