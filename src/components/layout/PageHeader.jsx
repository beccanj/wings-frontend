export default function PageHeader({
    title,
    subtitle,
    children,
}) {
    return (
        <div
            className="flex
                flex-col
                
                md:flex-row
                md:items-center
                md:justify-between "
        >
            <div>

                <h1
                    className="font-semibold text-2xl/9 font-nunito text-primary"
                >
                    {title}
                </h1>

                <p
                    className="text-mutedText font-inter text-base font-medium"
                >
                    {subtitle}
                </p>

            </div>

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                   
                   
                  
                "
            >
                {children}
            </div>

            {/* for example buttons
            <Buttons
                              text="Last 30 days"
                              variant="outline2"
                              iconPosition="left"
                              icon=<Calendar size={18} />
                              className="md:px-4 md:py-3 text-sm font-medium rounded-[12px] bg-white border-borderColor"
                            />
            
                            <Buttons
                              text="Export Report"
                              variant="primary"
                              iconPosition="left"
                              icon=<Download size={18} />
                              className="md:px-4 md:py-3 text-sm font-medium rounded-[12px]"
                            /> */}

        </div>
    );
}