
interface SidebarButtonsProps{
text: string
onClick?: () => void
}

const SidebarButtons = ({text,onClick}: SidebarButtonsProps) => {
  return (
    <button className='border border-black rounded-2xl py-1 px-4' onClick={onClick}>
        {text}
    </button>
  )
}

export default SidebarButtons