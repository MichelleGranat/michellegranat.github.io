import { Facebook, Github, Linkedin } from 'lucide-react'
import { Button } from '../../ui/button'


function Socials() {
  return (
    <div className='flex gap-x-4 mb-4'>
        <a href='https://www.facebook.com/profile.php?id=61550612655858' target='_blank'>
            <Button size="icon" className='w-12 h-12'>
                <Facebook className='w-5'/>
            </Button>
        </a>
        <a href='https://www.linkedin.com/in/michelle-granat-b82a08296/' target='_blank'>
        <Button size="icon" className='w-12 h-12'>
            <Linkedin className='w-5'/>
        </Button>
        </a>
        <a href='https://github.com/MichelleGranat' target='_blank'>
            <Button size="icon" className='w-12 h-12'>
                <Github className='w-5'/>
            </Button>
        </a>
    </div>

  )
}

export default Socials