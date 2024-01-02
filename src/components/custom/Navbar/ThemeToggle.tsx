import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

function ThemeToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode" />
      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  )
}

export default ThemeToggle