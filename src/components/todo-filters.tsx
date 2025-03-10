import { clsx } from "ts-clsx";
import type { VisibilityType } from "../types";
import { useVisibility } from "./todo-provider";

export default function TodoFilters() {
  const filters: VisibilityType[] = ["all", "active", "completed"];
  return (
    <ul className="filters">
      {filters.map((filter) => (
        <Filter key={filter} filter={filter} />
      ))}
    </ul>
  );
}

function Filter({ filter }: { filter: VisibilityType }) {
  const { visibility, setVisibility } = useVisibility();
  return (
    <li>
      <a
        className={clsx({ selected: visibility === filter })}
        // biome-ignore lint/a11y/useValidAnchor:
        onClick={() => setVisibility(filter)}
      >
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </a>
    </li>
  );
}
