"use client";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export default function ToastNotification({ message, open, setOpen }) {
  return (
    <Toast.Provider>
      <Toast.Root open={open} onOpenChange={setOpen} className="fixed top-4 right-4 p-4 bg-blue-600 text-white rounded-md">
        <Toast.Title className="font-bold">Notification</Toast.Title>
        <Toast.Description>{message}</Toast.Description>
        <Toast.Action asChild altText="Close">
          <button className="absolute top-2 right-2 text-white">X</button>
        </Toast.Action>
      </Toast.Root>

      <Toast.Viewport className="fixed top-4 right-4 space-y-4" />
    </Toast.Provider>
  );
}
