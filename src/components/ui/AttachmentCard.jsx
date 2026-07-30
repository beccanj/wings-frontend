import { FileText, Download } from "lucide-react";
import document from "../../assets/buttons/document.svg"
const AttachmentCard = ({
    fileName,
    fileSize,
    fileType = "pdf",
}) => {
    const icon = {
        pdf: FileText,
        doc: FileText,
        docx: FileText,
    };

    const Icon = icon[fileType] || FileText;

    return (



        <div className="border-l-3 border-l-4 border-solid border-[rgba(0,93,83,0.2)]
                        bg-white shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-t-2xl rounded-r-2xl py-3 px-5 w-full 
                        flex flex-row items-center justify-between w-full gap-6 ">
            
            <div className="flex flex-row justify-between items-center gap-3  ">
                    <img src={document} alt="" />            
                <div className="flex flex-col items-start" >
                    <h4 className="text-sm font-bold text-primary">
                        {fileName}
                    </h4>

                    <p className=" text-xs text-[#94A3B8]">
                        {fileSize}
                    </p>
                </div>
            </div>

            <div className="flex justify-end w-full">
                         <Download color="#94A3B8" size={18} />

            </div>

            {/* <button
                className="
                        rounded-lg
                        p-2
                        text-[#94A3B8]
                        transition
                        hover:bg-[#F3F4F6]
                        hover:text-primary
                    "
            >
               
            </button> */}
        </div>



    );
};

export default AttachmentCard;