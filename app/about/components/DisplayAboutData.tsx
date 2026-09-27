import BaseContanier from '@/app/common/base/BaseContanier';
import { AboutDTO } from '@/app/types/about/AboutDTO';

function DisplayData({content,title,icon:Icon}:AboutDTO) {
  return (
    <BaseContanier maxWidth="max-w-3xl">
      <div className="flex flex-row gap-6">
        <div className="w-12 h-12 bg-gray-200 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white  flex justify-center items-center rounded-full ">
          <Icon />
        </div>
        <h1 className=" font-bold  text-3xl">{title}</h1>
      </div>
      <p className="text-blue-900 group-hover:text-white hover:cursor-text font-sans">{content}</p>
    </BaseContanier>
  )
}

export default DisplayData
