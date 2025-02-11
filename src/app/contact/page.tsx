import MyContactButton from "@/components/hero/myContact";

export default function page() {
  return (
    <div className="w-full flex flex-col h-[500px] justify-center items-center gap-2 px-2">
      <p>Feel free to contact me, i cant wait to do collaboration to make interesting things</p>
      <p>Click one of this button to reach me, I will immediately contact you back when notified.</p>
      <div>
        <MyContactButton />
      </div>
    </div>
  )
}
