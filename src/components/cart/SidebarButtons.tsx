
interface SidebarButtonsProps{
text: string
}

const SidebarButtons = ({text}: SidebarButtonsProps) => {
  return (
    <button className='border border-black rounded-2xl py-1 px-4'>
        {text}
    </button>
  )
}

export default SidebarButtons