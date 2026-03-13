import Link from "next/link";
import Image from "next/image";

export default function MobileCheckout() {
  return (
    <div className="flex-col min-h-screen bg-cream pt-[56px] md:pt-[57px] flex font-display">
      <div className="relative flex min-h-[calc(100vh-57px)] w-full flex-col max-w-md mx-auto bg-cream pb-32">
        <header className="sticky top-0 z-10 bg-cream/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-primary/10">
          <Link href="/cart" className="flex size-10 items-center justify-center rounded-full hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined text-ink">arrow_back</span>
          </Link>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-ink">Checkout</h1>
          <div className="size-10"></div>
        </header>

        <main className="flex-1 px-4 py-6 space-y-6">
          <section className="bg-white/50 rounded-xl p-4 border border-primary/5">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">table_restaurant</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-primary/60">Dining Detail</p>
                <p className="text-lg font-bold text-ink">Table Number: Table 4</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold px-1 text-ink">Order Summary</h2>
            <div className="bg-white/80 rounded-xl border border-primary/5 overflow-hidden">
              <details className="group" open>
                <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                  <span className="font-semibold text-ink">Items (2)</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-4 pb-4 space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-cream overflow-hidden">
                        <img alt="Cherry Danish" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2prl0l3_CmpzkrM3cR9sg6zNnJeWCDUER1dhCHiAVGVhkuvpSv-bBahwpeuBz8d5T3QXch_Tx5264W37xi2-HDpeZIxKAtGbBTGIUxDKBKHy79NmJVsKcT_lO5WDgpOpoPSMDB4t7sqdgSz3DNTDPjhUFxTeVqWkcmE39Cp53DmpMtXLqUMHCW_mLNEczwPa_2FYnas1u24ob0H3_EUyrN8pTjb6fTGDMIIk9LY_k1aC0gPFX-qXllzYdgpgPYEzvYRq7Pjdon89" />
                      </div>
                      <div>
                        <p className="font-medium text-ink">Cherry Danish</p>
                        <p className="text-xs text-primary/70">Pastry</p>
                      </div>
                    </div>
                    <p className="font-semibold text-ink">$5.50</p>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-cream overflow-hidden">
                        <img alt="Flat White" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsihaUT1pNNM3Ds4s-9uZ7JWYDfZLWY36ntYRcmjKIqxYnZ-CGb54SLCuQZVMNywkaXwK3ebLlQ33L0ZeorhT2FyOOgJUDiK0jgqEXI2moCSGH57nIbNVs6WXH5mskgR_n8f27ixWo7Sfx9cJ9Ehn99WkxfoCPF-bsmR-KaNX00ZvGN2djGT9wxQKooFRth0r97ow8iq00azwqbvj_F_JXy1a99SMkhaYBk-n4WFwhAgDHQwMZaaXSbZm1cg0NSxC67m25QRvNXlFH" />
                      </div>
                      <div>
                        <p className="font-medium text-ink">Flat White</p>
                        <p className="text-xs text-primary/70">Large • Oat Milk</p>
                      </div>
                    </div>
                    <p className="font-semibold text-ink">$5.85</p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold px-1 text-ink">Payment Method</h2>
            <div className="space-y-3 text-ink">
              <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-white cursor-pointer relative">
                <input className="text-primary focus:ring-primary size-5 accent-primary" name="payment" type="radio" defaultChecked />
                <div className="flex items-center gap-3 flex-1">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  <span className="font-medium text-ink">Pay at Counter</span>
                </div>
              </label>
              
              <label className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white/60 cursor-pointer hover:bg-white transition-colors">
                <input className="text-primary focus:ring-primary size-5 accent-primary" name="payment" type="radio" />
                <div className="flex items-center gap-3 flex-1">
                  <span className="material-symbols-outlined text-primary text-ink/70">credit_card</span>
                  <span className="font-medium text-ink">Credit/Debit Card</span>
                </div>
              </label>
              
              <label className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white/60 cursor-pointer hover:bg-white transition-colors">
                <input className="text-primary focus:ring-primary size-5 accent-primary" name="payment" type="radio" />
                <div className="flex items-center gap-3 flex-1">
                  <span className="material-symbols-outlined text-primary text-ink/70">contactless</span>
                  <span className="font-medium text-ink">Apple / Google Pay</span>
                </div>
              </label>
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-lg border-t border-primary/10 p-4 pb-8 space-y-4 shadow-2xl z-20">
          <div className="flex items-center justify-between px-2">
            <div>
              <p className="text-sm font-medium text-primary/70">Total Amount</p>
              <p className="text-2xl font-bold text-ink">$11.35</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-tighter text-ink/40">Includes $0.85 Tax</p>
            </div>
          </div>
          <Link href="/order-confirmation/123" className="w-full flex justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
            Confirm & Place Order
          </Link>
        </footer>
      </div>
    </div>
  );
}
