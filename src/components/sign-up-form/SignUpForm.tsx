"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    zipCode: z.string().min(1, "Zip Code is required"),
    province: z.string().min(1, "Province is required"),
    district: z.string().min(1, "District is required"),
    subDistrict: z.string().min(1, "Sub-district is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      zipCode: "",
      province: "",
      district: "",
      subDistrict: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };
  // const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedDistrict, setSelectedDistrict] = useState("");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="30000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* จังหวัด */}
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province</FormLabel>
                <FormControl>
                  <div className="w-full max-w-xs">
                    <select className="w-full border px-3 py-2 rounded">
                      <option value="">เลือกตัวเลือก</option>
                      <option value="1">ตัวเลือกที่ 1</option>
                      <option value="2">ตัวเลือกที่ 2</option>
                    </select>
                  </div>
                  {/* <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setSelectedProvince(e.target.value);
                      setSelectedDistrict(""); // reset อำเภอเมื่อเปลี่ยนจังหวัด
                      form.setValue("district", "");
                      form.setValue("subDistrict", "");
                    }}
                    className="input-style"
                  >
                    <option value="">Select province</option>
                    {Object.keys(locationData).map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* อำเภอ */}
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <FormControl>
                  <div className="w-full max-w-xs">
                    <select className="w-full border px-3 py-2 rounded">
                      <option value="">เลือกตัวเลือก</option>
                      <option value="1">ตัวเลือกที่ 1</option>
                      <option value="2">ตัวเลือกที่ 2</option>
                    </select>
                  </div>
                  {/* <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setSelectedDistrict(e.target.value);
                      form.setValue("subDistrict", "");
                    }}
                    className="input-style"
                    disabled={!selectedProvince}
                  >
                    <option value="">Select district</option>
                    {selectedProvince &&
                      Object.keys(locationData[selectedProvince] || {}).map(
                        (district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        )
                      )}
                  </select> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ตำบล */}
          <FormField
            control={form.control}
            name="subDistrict"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-District</FormLabel>
                <FormControl>
                  <div className="w-full max-w-xs">
                    <select className="w-full border px-3 py-2 rounded">
                      <option value="">เลือกตัวเลือก</option>
                      <option value="1">ตัวเลือกที่ 1</option>
                      <option value="2">ตัวเลือกที่ 2</option>
                    </select>
                  </div>

                  {/* <select
                    {...field}
                    className="input-style"
                    disabled={!selectedDistrict}
                  >
                    <option value="">Select sub-district</option>
                    {selectedProvince &&
                      selectedDistrict &&
                      (
                        locationData[selectedProvince]?.[selectedDistrict] || []
                      ).map((subDistrict) => (
                        <option key={subDistrict} value={subDistrict}>
                          {subDistrict}
                        </option>
                      ))}
                  </select> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Re-Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Sign up
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
