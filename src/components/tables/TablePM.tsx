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
interface TablePMProps {
  title: string;
  unit: string;
  data?: { time: string; value: number }[];
}

const rowsPerPage = 20;

export const TablePM = ({ data, title, unit }: TablePMProps) => {
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

  return (
    <div>
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
            const dateObj = new Date(data?.time);

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
  );
};
