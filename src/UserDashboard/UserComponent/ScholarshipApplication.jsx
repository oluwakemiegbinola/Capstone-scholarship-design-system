import { Search } from "lucide-react";

export default function ScholarshipApplication() {
  return (
    <div className="space-y-4 text-[13px]">
      <p className="text-[15px] font-bold">Scholarship Applications</p>

      <div className="flex h-[117px] items-center justify-between rounded-md border-l-4 border-[#38CCC7] bg-white px-8 py-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-bold">Search your applications</p>

            <div className="flex w-[369px]">
              <input
                type="text"
                id="searchApplication"
                className="w-full rounded-l-sm bg-[#ebedff] p-1 outline-none"
              />

              <label
                htmlFor="searchApplication"
                className="rounded-r-sm bg-[#d2d6ff] px-4 py-2"
              >
                <Search size={19} />
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <label htmlFor="submitted" className="flex items-center gap-2">
              <input type="checkbox" id="submitted" className="size-3.5" />
              <span className="font-medium">Submitted (4)</span>
            </label>

            <label htmlFor="withdrawn" className="flex items-center gap-2">
              <input type="checkbox" id="withdrawn" className="size-3.5" />
              <span className="font-medium">Withdrawn (2)</span>
            </label>

            <label
              htmlFor="deadline passed"
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                id="deadline passed"
                className="size-3.5"
              />
              <span className="font-medium">Deadline passed (10)</span>
            </label>
          </div>
        </div>

        <div className="space-y-4 text-[13px]">
          <div className="flex flex-col justify-center gap-2 rounded-md bg-[#FF841F] p-4 text-white">
            <p className="text-3xl font-bold">02</p>
            <p className="text-balance">Offered Scholarship</p>
          </div>
        </div>
      </div>
    </div>
  );
}
