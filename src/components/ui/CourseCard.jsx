import { CheckCircle, Play } from "lucide-react";
import playButton from '../../assets/buttons/play.svg'

const CourseCard = ({
    title,
    description,
    image,
    duration,
    completed = false,
}) => {
    return (
        <article className="group min-w-0">
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center  ">
                        <img src={playButton} alt="" />
                    </div>
                </div>

                {/* Completed badge */}
                {completed && (
                    <div className="absolute right-1 top-1 flex items-center gap-1 rounded-md bg-[#C7F7B5] px-2 py-1 text-[11px] font-semibold text-[#277321]">
                        <CheckCircle size={13} />
                        Done
                    </div>
                )}

                {/* Duration */}
                <span className="absolute bottom-1 right-1 rounded-md bg-black/75 px-2 py-1 text-[10px] font-semibold text-white">
                    {duration}
                </span>
            </div>

            {/* Content */}
            <div className="mt-2">
                <h3 className="line-clamp-2 text-[15px] font-bold leading-[18px] text-[#17202A]">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-[18px] text-[#667085]">
                    {description}
                </p>
            </div>
        </article>
    );
};

export default CourseCard;