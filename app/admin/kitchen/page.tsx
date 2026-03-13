import Link from "next/link";
import Image from "next/image";

export default function AdminKitchen() {
  return (
    <div className="flex-col min-h-[100vh] bg-background-light pt-[56px] md:pt-[57px] flex font-display text-slate-900">
      <div className="flex flex-col h-[calc(100vh-57px)]">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-primary/10">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-3xl">restaurant</span>
              <h1 className="font-serif text-2xl font-bold tracking-tight">Culinara KDS</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin/kitchen" className="text-primary font-bold border-b-2 border-primary pb-1 text-sm">Active Orders</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-primary transition-colors text-sm">Completed</Link>
              <Link href="#" className="text-slate-500 font-medium hover:text-primary transition-colors text-sm">Inventory</Link>
              <Link href="/admin" className="text-slate-500 font-medium hover:text-primary transition-colors text-sm">Dashboard</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="pl-10 pr-4 py-2 bg-background-light border-none outline-none rounded-lg focus:ring-2 focus:ring-primary/50 w-64 text-sm" placeholder="Search orders..." type="text"/>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block group-hover:text-primary transition-colors">
                <p className="text-xs font-bold">Station 01</p>
                <p className="text-[10px] text-slate-500">Main Kitchen</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Sub-Header / Filters */}
        <div className="px-6 py-3 bg-white/50 backdrop-blur-sm border-b border-primary/5 flex items-center justify-between">
          <div className="flex gap-2 shrink-0 overflow-x-auto no-scrollbar pb-1 max-w-[60vw]">
            <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold whitespace-nowrap shadow-sm">All Orders (12)</button>
            <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Dine-in (8)</button>
            <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">Takeaway (4)</button>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 shrink-0">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span> System Online</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Last updated: Just now</span>
          </div>
        </div>

        {/* Main Orders Grid */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            
            {/* New Order Card */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden new-order-glow h-fit transition-transform hover:-translate-y-1">
              <div className="bg-primary px-4 py-3 flex justify-between items-center text-white shadow-sm">
                <h3 className="font-serif font-bold text-lg">Table #12</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/25 px-2 py-1 rounded shadow-inner">New Order</span>
              </div>
              <div className="p-4 flex-1">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start group hover:bg-slate-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">2x Caffè Latte</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">Bev</span>
                  </div>
                  <div className="flex justify-between items-start group hover:bg-slate-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">1x Avocado Toast</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">Food</span>
                  </div>
                  <p className="text-[11px] font-medium text-primary italic px-3 py-2 bg-primary/5 rounded border-l-2 border-primary mt-2">Extra chili flakes on toast</p>
                </div>
                <div className="flex items-center gap-2 text-primary mb-4 bg-primary/5 p-2 rounded-lg justify-center border border-primary/10">
                  <span className="material-symbols-outlined text-lg animate-pulse">timer</span>
                  <span className="text-xl font-bold font-mono">01:45</span>
                </div>
              </div>
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button className="bg-primary text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95">Start</button>
                <button className="bg-slate-100 text-slate-400 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide cursor-not-allowed border border-slate-200">Ready</button>
              </div>
            </div>

            {/* Active Order Card */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border-2 border-slate-200 h-fit transition-transform hover:-translate-y-1">
              <div className="bg-slate-100 px-4 py-3 flex justify-between items-center text-slate-700 border-b border-slate-200">
                <h3 className="font-serif font-bold text-lg text-slate-800">Table #05</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/50 px-2 py-1 rounded text-slate-600">Preparing</span>
              </div>
              <div className="p-4 flex-1">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start -mx-2 px-2 py-1 rounded bg-green-50/50 border border-green-100">
                    <span className="text-sm font-bold text-slate-400 leading-tight line-through">1x Flat White</span>
                    <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                  </div>
                  <div className="flex justify-between items-start group hover:bg-slate-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">1x Almond Croissant</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">Bake</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-4 bg-slate-50 p-2 rounded-lg justify-center border border-slate-200">
                  <span className="material-symbols-outlined text-lg">timer</span>
                  <span className="text-xl font-bold font-mono">04:20</span>
                </div>
              </div>
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button className="bg-slate-100 text-slate-500 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide cursor-not-allowed border border-slate-200">Started</button>
                <button className="bg-green-600 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-green-700 transition-colors shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1">
                  Ready <span className="material-symbols-outlined text-[14px]">done</span>
                </button>
              </div>
            </div>

            {/* Delayed Order Card */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border-2 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] h-fit transition-transform hover:-translate-y-1">
              <div className="bg-orange-500 px-4 py-3 flex justify-between items-center text-white shadow-sm">
                <h3 className="font-serif font-bold text-lg">Table #08</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 bg-white/25 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">warning</span> Delayed
                </span>
              </div>
              <div className="p-4 flex-1 bg-orange-50/30">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start group hover:bg-orange-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">3x Cappuccino</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">Bev</span>
                  </div>
                  <div className="flex justify-between items-start group hover:bg-orange-50 -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">2x Buttermilk Pancakes</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">Food</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-600 mb-4 bg-orange-100/50 p-2 rounded-lg justify-center border border-orange-200">
                  <span className="material-symbols-outlined text-lg animate-pulse">timer</span>
                  <span className="text-xl font-bold font-mono">08:45</span>
                </div>
              </div>
              <div className="p-4 pt-0 grid grid-cols-2 gap-2 bg-orange-50/30">
                <button className="bg-slate-100 text-slate-400 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide cursor-not-allowed border border-slate-200">Started</button>
                <button className="bg-primary text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95">Ready</button>
              </div>
            </div>

            {/* Another Order Card (Takeaway) */}
            <div className="flex flex-col bg-slate-50/50 rounded-xl overflow-hidden border-2 border-slate-200 border-dashed h-fit hover:border-solid transition-all">
              <div className="bg-slate-700 px-4 py-3 flex justify-between items-center text-white shadow-sm">
                <h3 className="font-serif font-bold text-lg">Order #1042</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">local_mall</span> Takeaway
                </span>
              </div>
              <div className="p-4 flex-1">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start group hover:bg-white -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">4x Blueberry Muffins</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-200/50 px-1.5 py-0.5 rounded">Bake</span>
                  </div>
                  <div className="flex justify-between items-start group hover:bg-white -mx-2 px-2 py-1 rounded transition-colors">
                    <span className="text-sm font-bold text-slate-900 leading-tight">1x Earl Grey Tea</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold bg-slate-200/50 px-1.5 py-0.5 rounded">Bev</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-4 bg-white p-2 rounded-lg justify-center border border-slate-200">
                  <span className="material-symbols-outlined text-lg">timer</span>
                  <span className="text-xl font-bold font-mono">12:15</span>
                </div>
              </div>
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <button className="bg-primary text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95">Start</button>
                <button className="bg-slate-200 text-slate-400 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide cursor-not-allowed border border-slate-300">Ready</button>
              </div>
            </div>

            {/* Queue Order */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 h-fit opacity-80 hover:opacity-100 transition-opacity">
              <div className="bg-slate-50 px-4 py-3 flex justify-between items-center text-slate-500 border-b border-slate-200">
                <h3 className="font-serif font-bold text-lg">Table #21</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1">Queue</span>
              </div>
              <div className="p-4 flex-1">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-slate-600 leading-tight">1x Iced Lemon Tea</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-slate-600 leading-tight">1x Signature Burger</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg justify-center">
                  <span className="material-symbols-outlined text-lg">timer</span>
                  <span className="text-xl font-bold font-mono">00:30</span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-slate-200 text-slate-600 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-slate-300 transition-colors">Accept Order</button>
              </div>
            </div>

          </div>
        </main>

        {/* Footer Stats Bar */}
        <footer className="px-6 py-4 bg-white border-t border-primary/10 flex items-center justify-between text-sm shadow-[0_-4px_20px_rgba(0,0,0,0.02)] hidden sm:flex z-10">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Active</span>
              <span className="font-bold text-slate-900 text-base">08 Orders</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Avg. Time</span>
              <span className="font-bold text-slate-900 text-base flex items-center gap-1">
                4m 12s <span className="material-symbols-outlined text-[14px] text-green-500">trending_down</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Delayed</span>
              <span className="font-bold text-orange-500 text-base flex items-center gap-1">
                01 Order <span className="material-symbols-outlined text-[14px]">warning</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-lg font-bold text-xs hover:bg-slate-100 transition-colors border border-slate-200 text-slate-700">
              <span className="material-symbols-outlined text-sm">settings</span>
              Kitchen Settings
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-bold text-xs hover:bg-primary/90 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-sm">history</span>
              Order History
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
