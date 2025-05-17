// import ReceiptList from "@/components/ReceiptList";

import PDFDropzone from "@/components/pdf-dropzone";

function Receipts() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        My Receipts
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Upload and manage your receipts here.
      </p>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {" "}
        </h1>
        <PDFDropzone />

        {/* <ReceiptList /> */}
      </div>
    </div>
  );
}

export default Receipts;
