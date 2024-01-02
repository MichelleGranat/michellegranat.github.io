import { Button } from "@/components/ui/button"

function Links() {
  return (
    <div className='flex'>
        <Button variant="link" className="underline">Portfolio</Button>
        <Button variant="link">Blog</Button>
    </div>
  )
}

export default Links