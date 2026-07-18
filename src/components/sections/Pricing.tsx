import { Button } from "../ui/Button"

export default function Pricing() {
  return (
    <section className="bg-[var(--sand)]" id="pricing">
  <div className="max-w-[var(--maxw)] mx-auto px-6 max-[620px]:px-4">
    <div className="max-w-[580px] mb-[40px]"><p className="text-[11px] tracking-[0.18em] uppercase text-[var(--clay)] font-bold">Membership</p><h2 className="text-[clamp(25px,3.3vw,38px)] mt-[9px]">Pricing built around how often you move</h2></div>
    <div className="grid grid-cols-3 gap-[18px] max-[960px]:grid-cols-1 max-[960px]:max-w-[400px] max-[620px]:max-w-none">
      <div className="bg-[var(--cream)] border-[1.5px] border-solid border-[var(--line)] rounded-[8px] p-[28px_24px] flex flex-col gap-[14px] relative transition duration-220 ease-[var(--ease)] hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.2)]">
        <h3 className="text-[19px]">Starter</h3><div className="font-['Fraunces',serif] text-[34px]">৳[Price]<small className="text-[12.5px] font-['Inter',sans-serif] opacity-60"> / mo</small></div>
        <ul className="list-none flex flex-col gap-[7px] text-[13px]"><li className="before:content-['✓__'] before:text-[var(--sage)]">8 classes / month</li><li className="before:content-['✓__'] before:text-[var(--sage)]">Group &amp; private booking</li><li className="before:content-['✓__'] before:text-[var(--sage)]">1 free cancellation / 4 classes</li></ul>
        <Button variant="primary" size="md" fullWidth >Choose Plan</Button>
      </div>
      <div className="bg-[var(--sage-dk)] text-[#fff] border-[var(--sage-dk)]   rounded-[8px] p-[28px_24px] flex flex-col gap-[14px] relative transition duration-220 ease-[var(--ease)]    hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.2)]]">
        <span className="absolute top-[-10px] right-[18px] bg-[var(--clay)] text-white text-[10px] font-bold tracking-[0.07em] uppercase px-[9px] py-[4px] rounded-[3px]">Most Popular</span>
        <h3 className="text-[19px]">Active</h3><div className="font-['Fraunces',serif] text-[34px]">৳[Price]<small className="text-[12.5px] font-['Inter',sans-serif] opacity-60"> / mo</small></div>
        <ul className="list-none flex flex-col gap-[7px] text-[13px]"><li className="before:content-['✓__'] before:text-[var(--sage)] group-[.feat]/card:before:text-[#b0d8a4]">12 classes / month</li><li className="before:content-['✓__'] before:text-[var(--sage)] group-[.feat]/card:before:text-[#b0d8a4]">Priority slot booking</li><li>1 free cancellation / 4 classes</li></ul>
        <Button variant="white" fullWidth >Choose Plan</Button>
      </div>
      <div className="bg-[var(--cream)] border-[1.5px] border-solid border-[var(--line)] rounded-[8px] p-[28px_24px] flex flex-col gap-[14px] relative transition duration-220 ease-[var(--ease)]      hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.2)]">
        <h3 className="text-[19px]">Unlimited+</h3><div className="font-['Fraunces',serif] text-[34px]">৳[Price]<small className="text-[12.5px] font-['Inter',sans-serif] opacity-60"> / mo</small></div>
        <ul className="list-none flex flex-col gap-[7px] text-[13px]"><li className="before:content-['✓__'] before:text-[var(--sage)]">16 classes / month</li><li className="before:content-['✓__'] before:text-[var(--sage)]">Ladies-only slot access</li><li className="before:content-['✓__'] before:text-[var(--sage)]">1 free cancellation / 4 classes</li></ul>
        <Button variant="primary" size="md" fullWidth >Choose Plan</Button>
      </div>
    </div>
    <div className="mt-[22px] bg-[var(--cream)] border-[1.5px] border-dashed border-[var(--sage)] p-[14px_18px] rounded-[4px] text-[13px] flex gap-[9px]"><span>↺</span><div><b>Cancellation Policy:</b> 1 free cancellation for every 4 classes booked. Credits tracked automatically in your dashboard.</div></div>
    <div className="flex gap-[10px] flex-wrap mt-[24px]"><span className="border-[var(--sage)] text-[var(--sage-dk)]">● Beginner</span><span className="border-[var(--clay)] text-[var(--clay)]">● Intermediate</span></div>
  </div>
</section>
  )
}
