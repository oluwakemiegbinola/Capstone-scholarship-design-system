import Notifications from "./UserComponent/Notifications";
import SortSearchFilter from "./UserComponent/SortSearchFilter";

export default function UserMain() {
  return (
    <section className="grid size-full grid-cols-[3fr_1fr] gap-4 p-4">
      <div>1</div>

      <div className="space-y-8">
        <SortSearchFilter />

        <Notifications />
      </div>
    </section>
  );
}
