import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"

function SelectLanguage() {
    const [language, setLanguage] = useState("english")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                    <ChevronDownIcon className="ml-2.5"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                    <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="español">Español</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="hebrew">Hebrew</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SelectLanguage