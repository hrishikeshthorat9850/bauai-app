"use client";
import * as Dialog from "@radix-ui/react-dialog";

export default function DeleteItemModal({ isOpen, setIsOpen, itemId, handleDelete }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="text-red-600 mt-2">Delete</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed bg-white p-6 rounded-md w-96 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-semibold mb-4">Are you sure?</Dialog.Title>
          <Dialog.Description className="mb-4">This action cannot be undone.</Dialog.Description>
          <div className="flex justify-between">
            <button
              onClick={() => handleDelete(itemId)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
            <button onClick={() => setIsOpen(false)} className="bg-gray-200 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
