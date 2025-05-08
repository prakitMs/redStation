import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // ปรับเส้นทางตามที่ใช้งาน

export const AlertNotFound = () => {
  const handleRefresh = () => {
    window.location.reload(); // รีเฟรชหน้าปัจจุบัน
  };

  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Data not found!!!!</AlertTitle>
      <AlertDescription>The date you selected has no data.</AlertDescription>

      <button
        onClick={handleRefresh}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </Alert>
  );
};
