type props_I = { activeTab: string, selectTab: (tab: string) => void, children: string }

const TabButton = ({ activeTab = "Toolkit", selectTab, children }: props_I) => {
    const buttonClasses = activeTab.toLowerCase() === children.toLowerCase()
        ? "text-white border-b-2 border-purple-500"
        : "text-[#ADB7BE]"

    return (
        <button onClick={() => selectTab(children)}>
            <p className={`mr-3 font-semibold hover:text-white transition-all duration-150 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton