import { useParamsStore } from "@/hooks/useParamsStore";
import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";

const pageSizeButtons = [4, 8, 12];
const orderButtons = [
  {
    label: "Aphabetical",
    icon: AiOutlineSortAscending,
    value: "make",
  },
  {
    label: "End date",
    icon: AiOutlineClockCircle,
    value: "endingSoon",
  },
  {
    label: "Recently added",
    icon: BsFillStopCircleFill,
    value: "new",
  },
];

const filterButtons = [
  {
    label: "Live Auction",
    icon: GiFlame,
    value: "live",
  },
  {
    label: "Ending  < 6 hours",
    icon: GiFinishLine,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BsStopwatchFill,
    value: "finished",
  },
];

const Filters = () => {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter By</span>
        <Button.Group>
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? "red" : "gray"}`}
            >
              {label}
              <Icon className="ml-1 mr-3 h-4 w-4" />
            </Button>
          ))}
        </Button.Group>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order By</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? "red" : "gray"}`}
            >
              {label}
              <Icon className="ml-1 mr-3 h-4 w-4" />
            </Button>
          ))}
        </Button.Group>
      </div>
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <Button.Group>
          {pageSizeButtons.map((value, index) => (
            <Button
              key={index}
              className="focus:ring-0"
              onClick={() => setParams({ pageSize: value })}
              color={`${pageSize === value ? "red" : "gray"}`}
            >
              {value}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
};

export default Filters;
