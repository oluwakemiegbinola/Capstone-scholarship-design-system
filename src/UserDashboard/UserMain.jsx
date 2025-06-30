import ApplicationHistory from "./UserComponent/ApplicationHistory";
import Notifications from "./UserComponent/Notifications";
import SortSearchFilter from "./UserComponent/SortSearchFilter";

export default function UserMain() {
  return (
    <section className="grid size-full grid-cols-[3fr_1.08fr] gap-4 p-4">
      <div>1</div>

      <div className="space-y-6">
        <SortSearchFilter />

        <Notifications />

        <ApplicationHistory />
      </div>
    </section>
  );
}
