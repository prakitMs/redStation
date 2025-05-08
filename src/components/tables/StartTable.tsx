"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { getDateOnly } from "../utils/format";
interface TableProps {
  title: string;
  unit: string;
  data?: { time: string; value: number }[];
  date: string | DateRange | undefined;
}

// const dateStart =
const rowsPerPage = 20;

export const StartTable = ({ data, title, unit, date }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil((data?.length || 0) / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    return (data || []).slice(start, end);
  }, [currentPage, data]);

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < pageCount - 1) setCurrentPage(currentPage + 1);
  };
  const dateFrom = (date as DateRange).from;
  const dateTo = (date as DateRange).to;
  const Start_Day_MOUNT_YEAR = getDateOnly(dateFrom);
  const Stop_Day_MOUNT_YEAR = getDateOnly(dateTo);
  return (
    <div>
      <div className="w-72 h-6 bg-slate-500 rounded-sm ml-2 flex items-center justify-center text-white">
        {Start_Day_MOUNT_YEAR} - {Stop_Day_MOUNT_YEAR}
      </div>

      <div className="bg-slate-800 border-solid rounded-lg w-[70vw]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>{title}</TableHead>
              <TableHead>Unit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
            {paginatedData.map((data) => {
              return (
                <TableRow key={data.time}>
                  <TableCell className="font-medium">{data.time}</TableCell>
                  <TableCell className="font-medium">{data?.value}</TableCell>
                  <TableCell className="font-medium">{unit}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center mt-4">
          <Button onClick={goToPrevious} disabled={currentPage === 0}>
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {pageCount}
          </span>
          <Button onClick={goToNext} disabled={currentPage === pageCount - 1}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
