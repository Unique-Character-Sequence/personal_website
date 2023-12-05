type props_I = { activeTab: string, selectTab: (tab: string) => void, children: string }

const TabButton = ({ activeTab = "Toolkit", selectTab, children }: props_I) => {
    const buttonClasses = activeTab.toLowerCase() === children.toLowerCase()
        ? "text-white bg-neutral-800 border-radius-full rounded-full sm:bg-inherit py-2 sm:py-0 sm:rounded-none sm:border-b-4 sm:border-purple-500"
        : "text-[#ADB7BE]"

    return (
        <button onClick={() => selectTab(children)}>
            <p className={`sm:mr-3 sm:h-[35px] font-semibold hover:text-white transition-all duration-150 border-purple-500 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton