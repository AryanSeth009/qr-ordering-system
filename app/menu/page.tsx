import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display">
      <div className="max-w-md mx-auto w-full flex flex-col min-h-[calc(100vh-57px)]">
        <header className="sticky top-[56px] md:top-[57px] z-40 bg-background-light/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-primary/10">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/5 rounded-full p-1 transition-colors">home</span>
            </Link>
            <h1 className="font-serif text-2xl font-bold text-primary tracking-tight">Cherry & Cream</h1>
          </div>
          <div className="relative">
            <Link href="/cart" className="flex items-center justify-center p-2 rounded-full hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-ink">shopping_bag</span>
            </Link>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">3</span>
          </div>
        </header>
        
        <div className="px-4 py-4">
          <div className="relative flex items-center group">
            <span className="material-symbols-outlined absolute left-4 text-primary/60">search</span>
            <input className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-stone-400 text-ink" placeholder="Search our delicious menu..." type="text"/>
          </div>
        </div>
        
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-primary text-white text-sm font-semibold shadow-md">All</button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-white text-ink border border-stone-200 text-sm font-medium">Coffee</button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-white text-ink border border-stone-200 text-sm font-medium">Tea</button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-white text-ink border border-stone-200 text-sm font-medium">Snacks</button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-white text-ink border border-stone-200 text-sm font-medium">Pastries</button>
        </div>
        
        <main className="grid grid-cols-2 gap-4 px-4 pb-28 flex-1">
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="aspect-square w-full bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnTLhiW94vu5scJqkuAGRzG75Y-2F32NUXI8wiv1Sh4ISxIH6TVqjWwD2ayktFc9dca8m3EEPIcehapmSXAd4MBJyL0GWXplBF-EnZhk-LYkGPhDDluBCE0IgNU79ybpbktTA_JMCp5234cTqLVsa5jhyIe3l0ZtMcSert2XLor-IJhYtXGkwBTnrQPcUtN-i1fjc3VPbyG9FXmN_AP_sVSvnvXQO1hf7TIWqeS7_I8mUMgppSOeea5DJ1du8PGqfqaXGlWVi7Hre-')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">Classic Latte</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Rich espresso with double steamed organic cream</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$5.50</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <div className="aspect-square w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwBc6vEPZVYV3gIn94njPaLlWdHih8HqhyzoQrJtYoBfNiCVhOirRyFdTqsnAHn07v7iwY4eqkKm9P6LRsjE7OOXjjvrUpc2e6SUsF3el1VnGXfr--35dCtD54jRcrVLsQYpVOzH_5PsJn2y2YKQD6S6hKMQv-YgkmWUWdvF1fqHmEzO3g1IS75d9t5ySoE7TKnEkuCMcycVbB3Xherru7yfXIyDeXTk7oqyZafBBd0cOpK-G1BMSs8u1QWQErQiBCk2GvuUaW_qe5')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">Ceremonial Matcha</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Premium grade stone-ground matcha with honey</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$6.00</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <div className="aspect-square w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_zJzicFXg6csfxB7TGTQUO3au24WGPaGziqCuW8-lnN_K4xbDtbqhUvPtCL9GqNqJ0p1zK4lzMrhlRRC08pKiNr0wQZyo23xqwudF89YMEvL778Mn-g-aIzsg3OAc9G3XP6H4dTw_kUcvFq9mrFZb49PRfXB7ISCDcZe8Ou-vIM6Alggn5lLLHPcjMCmMG88SfELBRjbe9wmA6SQMC699ZyPv2Rnw7JZGPoq01xAchEVYLoTo97ftx-6BLZIw8LdnlPuh3TRrV0Aw')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">Cherry Scone</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Buttery house-made pastry with fresh tart cherries</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$4.50</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <div className="aspect-square w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzBHZp7YSKDvDMTOM0MO_RBSltEtXX0HAjUc8J_fyexWE6iQ9Wn0b7ZFur3LWivpDbyQzmeyPlwTFB5YVi4S3MGaNQKUD4_uxkyMCC_G1zc3q6Yzs8qd5reKXTEPCOA2D91M95y499lJcc_j7UJ8B7bpMnGG14MhBusrZuSvTtmDLtNLes0I25g1dSJFvYIp87SzwcF1NWBX1eabZI9y9WDUAMluddHXo0JLQfmC8atjz_b6zQ8DbKlNoCavL5R2ig-sIGVwbOLanN')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">Avocado Toast</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Toasted sourdough with chili flakes and radish</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$12.00</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <div className="aspect-square w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9rycEafD14Wbp0ZG0qWMqbsOniBAnbsF0t4zTkKL7DKofa-t5X65XnzCKY673NWMKLcfaq_-VcK6UDrfiDWSbuF7CbIuW1cMYjtpIM3yTPhvmMWdQpvqxRkGFG8kHwK-X8hO0tE8XzON7ZLeBB23P-YLwoxzGkCiHcGOzx4FWmVs7BkZHuAB4bYskKa0WVRRGLz90uYYihVj-ruCfs8xIUK5E5Vsv08wy6Dida2JeFM3xzb1W2LbX8Rhcv-ztVhWD0kiKvFQInonU')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">Pain au Chocolat</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Twice-baked French pastry with dark chocolate</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$4.75</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <div className="aspect-square w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAECCbwf5wWhUEmxmckujrbMEIUZXRpuGYFRG6LBoN8340cFBAzL1zEdhrR0zuowlXAnf3r6Pa-PrPemspNMjaKqUtc3K8YidQuO1i8FK1PcyoY965uuiX0biwaGE3mbebZdX-z7VfAUJsQTPh0-2q5JG-8qYNbk2iqlMmdaBn27oTJ7bYJmH6YRmtv1RZ-zTGq0BksQWY7Po89X8NmW9oYdn8tQvMglfmdFNdiTGo5gba3dZ6xAa2ItC8IfufovGsUs14l9daH-tZw')"}}></div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-serif text-lg font-bold leading-tight text-ink">12hr Cold Brew</h3>
              <p className="text-xs text-stone-500 mt-1 line-clamp-2">Smooth, low-acid coffee steeped for 12 hours</p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-ink font-bold">$5.25</span>
                <button className="bg-primary hover:bg-primary/90 transition-colors text-white p-1.5 rounded-lg"><span className="material-symbols-outlined text-sm">add_shopping_cart</span></button>
              </div>
            </div>
          </div>
        </main>
        
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 pb-safe-area">
          <div className="flex justify-around items-center h-16 max-w-md mx-auto">
            <Link href="/menu" className="flex flex-col items-center gap-1 text-primary">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <p className="text-[10px] font-bold uppercase tracking-wider">Menu</p>
            </Link>
            <Link href="/order/123/status" className="flex flex-col items-center gap-1 text-stone-400 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">receipt_long</span>
              <p className="text-[10px] font-bold uppercase tracking-wider">Orders</p>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1 text-stone-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">favorite</span>
              <p className="text-[10px] font-bold uppercase tracking-wider">Saved</p>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1 text-stone-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">person</span>
              <p className="text-[10px] font-bold uppercase tracking-wider">Profile</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
