import { Search } from "lucide-react";

export default function ScholarshipApplication() {
  return (
    <div className="w-full space-y-4 text-[13px]">
      <p className="text-[15px] font-bold">Scholarship Applications</p>

      <div className="flex h-[117px] items-center justify-between rounded-md border-l-4 border-[#FF841F] bg-white p-8">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-bold">Search your applications</p>

            <div className="flex bg-[#]">
              <input
                type="text"
                id="searchApplication"
                className="rounded-l-sm bg-[#ebedff] p-1"
              />

              <label
                htmlFor="searchApplication"
                className="rounded-r-sm bg-[#d2d6ff] p-1"
              >
                <Search />
              </label>
            </div>
          </div>

          <div>
            <p className="text-[17px] font-bold">
              Ghana Stem Excellence Scholarship
            </p>
            <p>Ghana Education Trust Fund (GETFund)</p>
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
