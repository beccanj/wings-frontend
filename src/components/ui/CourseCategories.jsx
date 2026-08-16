import Buttons from "./Buttons";

const CourseCategories = ({
    categories,
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className="mb-7 overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max items-center gap-4">
                {categories.map((category) => {
                    const isActive = activeCategory === category;

                    return (
                        <Buttons
                            key={category}
                            text={category}
                            onClick={() => onCategoryChange(category)}
                            variant={isActive ? "primary" : "borderless"}
                            className={`
                                rounded-[12px]
                                px-6
                                py-3
                                text-sm
                                font-medium
                                whitespace-nowrap
                                ${
                                    isActive
                                        ? "shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                                        : ""
                                }
                            `}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CourseCategories;