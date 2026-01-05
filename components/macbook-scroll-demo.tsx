import { MacbookScroll } from "@/components/ui/macbook-scroll"

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={<span className="text-balance">BacaBersama — Empowering Young Readers with AI</span>}
        src="/bacabersama-app-interface-with-colorful-letters-an.jpg"
        showGradient={false}
      />
    </div>
  )
}
