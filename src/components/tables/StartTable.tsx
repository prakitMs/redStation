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
const invoices = [
  { time: "2025-04-08T00:00:00", pm2_5: 35 },
  { time: "2025-04-08T01:00:00", pm2_5: 38 },
  { time: "2025-04-08T02:00:00", pm2_5: 40 },
  { time: "2025-04-08T03:00:00", pm2_5: 42 },
  { time: "2025-04-08T04:00:00", pm2_5: 45 },
  { time: "2025-04-08T05:00:00", pm2_5: 47 },
  { time: "2025-04-08T06:00:00", pm2_5: 50 },
  { time: "2025-04-08T07:00:00", pm2_5: 55 },
  { time: "2025-04-08T08:00:00", pm2_5: 60 },
  { time: "2025-04-08T09:00:00", pm2_5: 58 },
  { time: "2025-04-08T10:00:00", pm2_5: 53 },
  { time: "2025-04-08T11:00:00", pm2_5: 50 },
  { time: "2025-04-08T12:00:00", pm2_5: 48 },
  { time: "2025-04-08T13:00:00", pm2_5: 45 },
  { time: "2025-04-08T14:00:00", pm2_5: 43 },
  { time: "2025-04-08T15:00:00", pm2_5: 40 },
  { time: "2025-04-08T16:00:00", pm2_5: 38 },
  { time: "2025-04-08T17:00:00", pm2_5: 36 },
  { time: "2025-04-08T18:00:00", pm2_5: 35 },
  { time: "2025-04-08T19:00:00", pm2_5: 33 },
  { time: "2025-04-08T20:00:00", pm2_5: 30 },
  { time: "2025-04-08T21:00:00", pm2_5: 28 },
  { time: "2025-04-08T22:00:00", pm2_5: 27 },
  { time: "2025-04-08T23:00:00", pm2_5: 26 },
  { time: "2025-04-09T00:00:00", pm2_5: 25 },
  { time: "2025-04-09T01:00:00", pm2_5: 24 },
  { time: "2025-04-09T02:00:00", pm2_5: 23 },
  { time: "2025-04-09T03:00:00", pm2_5: 22 },
  { time: "2025-04-09T04:00:00", pm2_5: 21 },
  { time: "2025-04-09T05:00:00", pm2_5: 20 },
  { time: "2025-04-09T06:00:00", pm2_5: 22 },
  { time: "2025-04-09T07:00:00", pm2_5: 24 },
  { time: "2025-04-09T08:00:00", pm2_5: 26 },
  { time: "2025-04-09T09:00:00", pm2_5: 28 },
  { time: "2025-04-09T10:00:00", pm2_5: 30 },
  { time: "2025-04-09T11:00:00", pm2_5: 33 },
  { time: "2025-04-09T12:00:00", pm2_5: 35 },
  { time: "2025-04-09T13:00:00", pm2_5: 38 },
  { time: "2025-04-09T14:00:00", pm2_5: 40 },
  { time: "2025-04-09T15:00:00", pm2_5: 42 },
  { time: "2025-04-09T16:00:00", pm2_5: 44 },
  { time: "2025-04-09T17:00:00", pm2_5: 46 },
  { time: "2025-04-09T18:00:00", pm2_5: 48 },
  { time: "2025-04-09T19:00:00", pm2_5: 50 },
  { time: "2025-04-09T20:00:00", pm2_5: 52 },
  { time: "2025-04-09T21:00:00", pm2_5: 53 },
  { time: "2025-04-09T22:00:00", pm2_5: 55 },
  { time: "2025-04-09T23:00:00", pm2_5: 56 },
  { time: "2025-04-10T00:00:00", pm2_5: 57 },
  { time: "2025-04-10T01:00:00", pm2_5: 58 },
  { time: "2025-04-10T02:00:00", pm2_5: 59 },
  { time: "2025-04-10T03:00:00", pm2_5: 60 },
  { time: "2025-04-10T04:00:00", pm2_5: 61 },
  { time: "2025-04-10T05:00:00", pm2_5: 62 },
  { time: "2025-04-10T06:00:00", pm2_5: 63 },
  { time: "2025-04-10T07:00:00", pm2_5: 64 },
  { time: "2025-04-10T08:00:00", pm2_5: 65 },
  { time: "2025-04-10T09:00:00", pm2_5: 66 },
];

const rowsPerPage = 20;

const StartTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(invoices.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = currentPage * rowsPerPage;
    const end = start + rowsPerPage;
    return invoices.slice(start, end);
  }, [currentPage]);

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
            <TableHead>Time</TableHead>
            <TableHead>PM2.5</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-white">
          {paginatedData.map((invoice) => (
            <TableRow key={invoice.time}>
              <TableCell className="font-medium">{invoice.time}</TableCell>
              <TableCell className="font-medium">{invoice.pm2_5}</TableCell>
            </TableRow>
          ))}
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

export default StartTable;
