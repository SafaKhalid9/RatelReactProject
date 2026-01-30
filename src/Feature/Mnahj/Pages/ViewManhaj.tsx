import { useParams } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import { Button } from "@/Components/ShadCn/button";
import { Download } from "lucide-react";
import { useManhajDetails } from "../Services/manhaj.service";
import { downloadManhajPdf } from "../Services/manhaj.service";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { IMAGE_BASE } from "@/Constant/route";

const ViewManhaj = () => {
  const { id } = useParams();
  const { data: details, isLoading } = useManhajDetails(Number(id));
  const [isDownloading, setIsDownloading] = useState(false);

  const resolveImageUrl = (url?: string | null) => {
    if (!url) return "/manhaj.jpg";

    const fixedUrl = url.replace("/Images/", "/images/");

    return fixedUrl.startsWith("http") ? fixedUrl : IMAGE_BASE + fixedUrl;
  };

  if (isLoading)
    return <div className="p-10 text-center">جاري التحميل ...</div>;

  if (!details)
    return (
      <div className="p-10 text-center text-red-500">
        لم يتم العثور على تفاصيل المنهج
      </div>
    );

  const imageUrl = resolveImageUrl(details.imageUrl);
  const pdfUrl = details.pdfFilePath
    ? details.pdfFilePath.startsWith("http")
      ? details.pdfFilePath
      : IMAGE_BASE + details.pdfFilePath
    : null;
  const handleDownload = async () => {
    if (!details || isDownloading) return;

    try {
      setIsDownloading(true);
      await downloadManhajPdf(details.manhajId, details.name);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء تحميل الملف");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-(--background-page) min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-5xl bg-(--white-color) rounded-2xl border-t-8 border-secondary px-10 pb-10">
        <CustomFormTitle title={`منهج ${details.name}`} />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 text-(--font-title-label-color)">
            <p className="text-center text-xl">
              <span className="font-semibold">المؤلف:</span>{" "}
              {details.authorName}
            </p>

            <div className="flex justify-evenly gap-8">
              <p className="text-xl">
                <span className="font-semibold">عدد الدروس:</span>{" "}
                {details.numberOfLessons}
              </p>

              <p className="text-xl">
                <span className="font-semibold">الفئة المستهدفة:</span>{" "}
                {details.targetAudience}
              </p>
            </div>
            <div className="mt-6">
              <p className="font-semibold mb-3 text-center text-xl">
                أهداف المنهج
              </p>

              <div
                className="
      p-4
      min-h-[120px]
      max-h-60
      overflow-y-auto
    "
              >
                {details.goals ? (
                  <p className="text-base leading-relaxed whitespace-pre-wrap text-center">
                    {details.goals}
                  </p>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                    لا توجد أهداف مضافة لهذا المنهج
                  </div>
                )}
              </div>
            </div>
            {pdfUrl && (
              <div className="flex justify-center mt-6">
                <Button
                  disabled={isDownloading}
                  onClick={handleDownload}
                  className={`
        flex gap-2 text-lg px-6 py-5 rounded-2xl shadow-xl
        text-white bg-(--primary)
        hover:bg-(--light-green) hover:text-(--primary)
        transition duration-300
        ${isDownloading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
      `}
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="animate-spin" size={22} />
                      جاري تحميل الملف...
                    </>
                  ) : (
                    <>
                      <Download size={22} />
                      تحميل ملف المنهج
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-center h-full items-center">
            <div className="relative group w-[260px] h-[300px] rounded-2xl  flex items-center justify-center overflow-hidden">
              <a href={pdfUrl!} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt={details.name}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = "/manhaj.jpg")
                  }
                  className={`max-w-full max-h-full
                  object-contain
                ${pdfUrl ? "cursor-pointer transition duration-300 group-hover:opacity-70" : ""}                  
        `}
                />
                {pdfUrl && (
                  <div
                    className="
          absolute inset-0
          flex items-center justify-center
          bg-black/50
          text-white text-lg font-semibold
          opacity-0 group-hover:opacity-100
          transition
        "
                  >
                    فتح ملف منهج {details.name}
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewManhaj;
