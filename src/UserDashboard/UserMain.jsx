import ApplicationHistory from "./UserComponent/ApplicationHistory";
import Hero from "./UserComponent/Hero";
import MyApplication from "./UserComponent/MyApplication";
import Notifications from "./UserComponent/Notifications";
import ScholarshipApplication from "./UserComponent/ScholarshipApplication";
import ScholarshipLists from "./UserComponent/ScholarshipLists";
import SortSearchFilter from "./UserComponent/SortSearchFilter";

export default function UserMain() {
  return (
    <section className="grid size-full grid-cols-[3fr_1.08fr] gap-4 p-4">
      <div className="space-y-11 pb-8">
        <Hero />

        <ScholarshipLists />

        <MyApplication />

        <ScholarshipApplication />
      </div>

      <div className="space-y-6 pb-4">
        <SortSearchFilter />

        <Notifications />

        <ApplicationHistory />
      </div>
    </section>
  );
}
