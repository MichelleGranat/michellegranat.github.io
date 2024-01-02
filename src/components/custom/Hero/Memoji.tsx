import memoji from "@/assets/memoji.png"

function Memoji() {
  return (
    <div className="w-fit border-8 border-slate-600 rounded-full">
        <div className="flex justify-center w-56 h-56  m-12">
            <img src={memoji} className="h-56"/>
        </div>
    </div>
  )
}

export default Memoji