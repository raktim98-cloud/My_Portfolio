



function SocialList({item}) {
  return (
    <li className="flex flex-col items-center justify-center gap-2">
        <a href={item.link} target="blank">
            <div className="size-[70px]">
            <img className="w-full object-cover rounded-[5px]" src={item.icon} alt="logo" />
            </div>
            </a>
        <h5 className="my-5 text-[12px] text-white">{item.text}</h5>
    </li>
  )
}

export default SocialList