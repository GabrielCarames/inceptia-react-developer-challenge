import { ShowSidebarButtonProps } from "@/types/interfaces"

export default function ShowSidebarButton({
  openSidebar,
  setOpenSidebar,
  className
}: ShowSidebarButtonProps) {
  return (
    <button
      className={`flex justify-center items-center border border-persian-green rounded-lg hover:bg-persian-green ${
        className ? className : ""
      }`}
      onClick={() => setOpenSidebar(!openSidebar)}
    >
      <span
        className={`${
          openSidebar
            ? "icon-[ic--baseline-keyboard-double-arrow-left]"
            : "icon-[ic--baseline-keyboard-double-arrow-right]"
        } size-7`}
      />
    </button>
  )
}
