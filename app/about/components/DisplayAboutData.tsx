import BaseContanier from '@/app/common/BaseContanier';
import { AboutDTO } from '@/app/types/about/AboutDTO';

function DisplayData({content,title,icon:Icon}:AboutDTO) {
  return (
    <BaseContanier maxWidth="max-w-3xl">
      <div className="flex flex-row gap-4">
        <div className="w-12 h-12 bg-yellow-600 text-white  flex justify-center items-center rounded-full ">
          <Icon />
        </div>
        <h1 className=" font-bold text-3xl">{title}</h1>
      </div>
      <p className="text-blue-900 hover:cursor-text font-sans">{content}</p>
    </BaseContanier>
  )
}

export default DisplayData
