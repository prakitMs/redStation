import SignInForm from "@/components/sign-in-form"; // ปรับ path ตามโครงสร้างโปรเจกต์ของคุณ

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
      <SignInForm />
    </div>
  );
}
