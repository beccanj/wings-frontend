import { ChevronLeft, ChevronRight } from "lucide-react";
import Buttons from "./Buttons";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            {/* Previous */}
            <Buttons
                icon={<ChevronLeft size={16} />}
                onClick={() => onPageChange(currentPage - 1)}
                variant="pagination"
                className="
                    h-10
                    w-10
                    rounded-md
                    p-0
                    text-[#4B5563]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            />

            {/* Pages */}
            {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = currentPage === page;

                return (
                    <Buttons
                        key={page}
                        text={page}
                        onClick={() => onPageChange(page)}
                        variant={isActive ? "primary" : "pagination"}
                        className="
                           
                            rounded-md
                            
                            text-sm
                            font-bold
                        "
                    />
                );
            })}

            {/* Ellipsis */}
            <span className="px-1 text-sm text-[#667085]">
                ...
            </span>

            {/* Next */}
            <Buttons
                icon={<ChevronRight size={16} />}
                onClick={() => onPageChange(currentPage + 1)}
                variant="pagination"
                className="
                    h-10
                    w-10
                    rounded-md
                    p-0
                    text-[#4B5563]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    font-bold
                "
            />
        </div>
    );
};

export default Pagination;