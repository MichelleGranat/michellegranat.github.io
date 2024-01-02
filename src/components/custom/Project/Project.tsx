import { Badge } from "@/components/ui/badge"
import { Component } from "lucide-react"
import placeholder from "@/assets/placeholder.jpg"

type projectProps = {
    title: string,
    shortDescription: string,
    description: string
}

function Project({title, shortDescription, description}: projectProps) {
  return (
    <div className='flex justify-center'>
        <div className="flex gap-10 p-10 m-16 shadow-md rounded-xl border border-slate-200 bg-white">
            <img src={placeholder} alt="Project Image" className="rounded-xl object-cover w-80 h-80"/>
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {shortDescription}
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {description}
                    </p>
                </div>
                <div className="flex gap-x-2">
                    <Badge>
                        <Component className="w-4 mr-2"/>
                        Tech Name
                    </Badge>
                    <Badge>
                        <Component className="w-4 mr-2"/>
                        Tech Name
                    </Badge>
                    <Badge>
                        <Component className="w-4 mr-2"/>
                        Tech Name
                    </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project