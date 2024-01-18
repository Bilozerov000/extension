export default function EmptyState() {
  return (
    <div className="flex gap-5 flex-col justify-center items-center h-full w-full">
      <div className="icon">
        <i className="codicon codicon-cloud-upload text-white !text-[40px]" />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <div className="text-xl font-bold text-white">Upload Your PDF File</div>
        <div className="text-[#A0A0A0] font-medium text-sm">
          Easily start creating your first component. <br />
          Select or drag and drop a PDF file (up to 5 MB).
        </div>
      </div>
    </div>
  );
}
