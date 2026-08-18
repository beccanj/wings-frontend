import DashboardLayout from "../../../components/DashboardLayout";

import { useAuth } from '../../../features/auth/components/Authcontext'
import Buttons from "../../../components/ui/Buttons";
import { Calendar, Download } from "lucide-react";
import PageHeader from "../../../components/layout/PageHeader";
import nitaIcon from "../../../assets/nita.png"
import SearchBar from "../../../components/ui/SearchBar";
import courseImage from "../../../assets/buttons/training.jpg";
import CourseCategories from "../../../components/ui/CourseCategories";
import CourseCard from "../../../components/ui/CourseCard";
import FloatingChatButton from "../../../components/ui/FloatingChatButton";
import { useState } from "react";
import Pagination from "../../../components/ui/Pagination";

const categories = [
    "All",
    "Child Care",
    "First Aid & Safety",
    "Early Care",
    "Culinary Arts",
];

const courses = [
    {
        id: 1,
        title: "Basic First Aid for Domestic Workers",
        description:
            "Essential lifesaving skills including CPR and wound management in emergencies.",
        category: "First Aid & Safety",
        image: courseImage,
        duration: "22:00",
        completed: true,
    },
    {
        id: 2,
        title: "Safe Handling of Kitchen Appliances",
        description:
            "Proper operation and maintenance tips for modern microwave ovens and appliances.",
        category: "Culinary Arts",
        image: courseImage,
        duration: "22:00",
        completed: false,
    },
    {
        id: 3,
        title: "Deep Cleaning Techniques for Hardwood",
        description:
            "The ultimate guide to preserving delicate wooden floors with safe cleaning techniques.",
        category: "Early Care",
        image: courseImage,
        duration: "22:00",
        completed: true,
    },
    {
        id: 4,
        title: "Developmental Play for Toddlers",
        description:
            "Activities designed to stimulate cognitive growth and fine motor development.",
        category: "Child Care",
        image: courseImage,
        duration: "22:00",
        completed: true,
    },
    {
        id: 5,
        title: "Basic First Aid for Domestic Workers",
        description:
            "Essential lifesaving skills including CPR and wound management in emergencies.",
        category: "First Aid & Safety",
        image: courseImage,
        duration: "22:00",
        completed: true,
    },
    {
        id: 6,
        title: "Safe Handling of Kitchen Appliances",
        description:
            "Proper operation and maintenance tips for modern microwave ovens and appliances.",
        category: "Culinary Arts",
        image: courseImage,
        duration: "22:00",
        completed: false,
    },
    {
        id: 7,
        title: "Deep Cleaning Techniques for Hardwood",
        description:
            "The ultimate guide for preserving delicate wooden floors with safe cleaning methods.",
        category: "Early Care",
        image: courseImage,
        duration: "22:00",
        completed: false,
    },
    {
        id: 8,
        title: "Safe Handling of Kitchen Appliances",
        description:
            "Proper operation and maintenance tips for modern microwave ovens.",
        category: "Culinary Arts",
        image: courseImage,
        duration: "22:00",
        completed: false,
    },
];


const Training = () => {
     const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCourses =
        activeCategory === "All"
            ? courses
            : courses.filter(
                  (course) => course.category === activeCategory
              );

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <DashboardLayout >

            <PageHeader
                title="Training Resources"
                subtitle="Enhance your knowledge and skills with our free training videos."
            >
            </PageHeader>
            {/* box message */}
            <div className="flex flex-col items-center border border-[#24ad9e]/60 rounded-[12px] bg-[#E4FCEC] p-6 mt-8" >
                <div className="flex flex-row justify-between gap-5">
                    <img src={nitaIcon} alt="" className="h-[52px] w-[52px] shrink-0  object-cover" />

                    <div className="flex flex-col gap-2">

                        <p className="font-semibold text-base">NITA Certified Domestic Care Training</p>

                        <p className="font-medium text-xs">Looking for certified training? Learn about NITA-accredited domestic worker courses that provide official certification recognized across Kenya.</p>
                        <div className="flex items-start "><Buttons
                            type='submit'

                            className=" text-sm py-3 px-10 font-bold shadow-[0px_10px_15px_-3px_rgba(0,35,111,0.2),0px_4px_6px_-4px_rgba(0,35,111,0.2)] bg-gradient-to-br from-[#005D53] to-[#3C817A] rounded-[12px]"
                            text='Learn More About Certification'

                        /></div>

                    </div>


                </div>

            </div>

            {/* searcbar */}
            <div className="mt-8 mb-4 p-4 bg-[#F2F4F3] flex items-center rounded-[16px]">
                <SearchBar
                    variant="training"
                    placeholder="Search for training topics..."
                    className='bg-white'
                />
            </div>
            {/* course content */}
              {/* Categories */}
            <CourseCategories
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
            />

            {/* Course Grid */}
            <div
                className="
                    grid
                    grid-cols-1
                    gap-x-7
                    gap-y-8
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                "
            >
                {filteredCourses.map((course) => (
                    <CourseCard
                        key={course.id}
                        {...course}
                    />
                ))}
            </div>

            {/* Pagination */}
             <Pagination
                currentPage={currentPage}
                totalPages={3}
                onPageChange={setCurrentPage}
            /> 

            {/* Floating chat */}
            <FloatingChatButton />

            



        </DashboardLayout>
    );
};
export default Training;