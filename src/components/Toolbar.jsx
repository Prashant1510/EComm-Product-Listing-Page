import React, { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const sortOptions = ["Name", "Price", "Popularity"];
const showOptions = [6, 12, 24];

function Toolbar({ itemCount = 13, onSortChange, onShowChange }) {
  const [sort, setSort] = useState(sortOptions[0]);
  const [show, setShow] = useState(showOptions[0]);
  const [view, setView] = useState("grid");

  return (
    <div className="bg-gray-50 rounded flex items-center py-3 px-2 gap-6 text-sm justify-between w-full">
      <span className="ml-2">{itemCount} Items</span>

      {/* First Dropdown */}
      <div className="flex items-center gap-2">
        <span>Sort By</span>
        <div className="relative">
          <select
            value={sort}
            onChange={e => {
              setSort(e.target.value);
              onSortChange && onSortChange(e.target.value);
            }}
            className="pl-2 pr-7 py-1 border border-gray-100 rounded bg-white focus:outline-none appearance-none text-gray-900"
            style={{ minWidth: 80 }}
          >
            {sortOptions.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-2 top-2 pointer-events-none" />
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="flex items-center gap-2">
        <span>Show</span>
        <div className="relative">
          <select
            value={show}
            onChange={e => {
              setShow(Number(e.target.value));
              onShowChange && onShowChange(Number(e.target.value));
            }}
            className="pl-2 pr-7 py-1 border border-gray-100 rounded bg-white focus:outline-none appearance-none text-gray-900"
            style={{ minWidth: 48 }}
          >
            {showOptions.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-2 top-2 pointer-events-none" />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* View Mode Switch */}
      <ToggleButtonGroup
      value={view}
      exclusive
      onChange={(e, newView) => {
        if (newView !== null) setView(newView);
      }}
      aria-label="view mode toggle"
      className="mr-2 "
      size="small"
    >
      <ToggleButton value="grid" aria-label="grid view">
        <ViewModuleIcon className={view == 'grid'? 'text-blue-300': 'text-gray-300'} fontSize="small" />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list view">
        <ViewListIcon className={view == 'list'? 'text-blue-300': 'text-gray-300'} fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}

export default Toolbar;
