import React, { useState } from "react";
import { Download } from "lucide-react";

const initialFiles = [
  {
    name: "Egbuna Princess/ Recommendation Letter.pdf",
    type: "pdf",
    progress: 100,
    status: "ready",
  },

];

const FileIcon = () => (
  <div className="w-8 h-10 flex items-center justify-center bg-red-500 text-white rounded">
    PDF
  </div>
);

export default function CompletedPDFs() {
  const [downloaded, setDownloaded] = useState([]);

  const handleDownload = (fileName) => {
    if (!downloaded.includes(fileName)) {
      setDownloaded([...downloaded, fileName]);
    }
  };

  // Show only files that are PDFs, have status 'ready' and are downloaded
  const completedPDFs = initialFiles.filter(
    (file) => file.type === "pdf" && file.status === "ready" && downloaded.includes(file.name)
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Completed PDF Files</h2>

        <div className="space-y-4">
          {initialFiles.map((file, idx) => {
            if (
              file.type === "pdf" &&
              file.status === "ready" &&
              !downloaded.includes(file.name)
            ) {
              return (
                <div key={idx} className="flex items-start space-x-3">
                  <FileIcon />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{file.name}</span>
                      <button
                        onClick={() => handleDownload(file.name)}
                        className="flex items-center space-x-1 text-sm text-blue-500 hover:underline"
                      >
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="h-2 bg-blue-400 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Display downloaded PDFs */}
        {completedPDFs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-md font-semibold mb-2">Downloaded & Marked Completed</h3>
            <div className="space-y-3">
              {completedPDFs.map((file, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FileIcon />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-blue-600 text-sm font-semibold">Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
