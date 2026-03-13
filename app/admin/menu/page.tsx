import Link from "next/link";
import Image from "next/image";

export default function AdminMenu() {
  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display text-slate-900">
      <div className="flex h-[calc(100vh-57px)] overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-primary/10 flex flex-col shrink-0 hidden md:flex">
          <div className="p-6 border-b border-primary/5">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div>
                <h1 className="text-lg font-bold leading-none">RestoAdmin</h1>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Management Portal</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </Link>
            <Link href="/admin/menu" className="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg transition-colors">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-sm font-semibold">Menu</span>
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="text-sm font-semibold">Orders</span>
            </Link>
            <Link href="/admin/qr-codes" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">qr_code_2</span>
              <span className="text-sm font-semibold">QR Codes</span>
            </Link>
            <Link href="/admin/kitchen" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">monitor_heart</span>
              <span className="text-sm font-semibold">KDS</span>
            </Link>
            <div className="pt-4 pb-2">
              <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Account</p>
            </div>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">Settings</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-primary/5">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/5">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden border-2 border-primary/20">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARyzFB4PGd5nMWdhGEKr3lgELoAuZ3ttcGG7r938uURta2pe1y1oFrhd_mTLB5Jue591hL8I__AiLb4jUQOf_qZoJ2qKFm0fA0CWhII4hINrZK0g2ieB5X19SlRlwYfktt5aydC17omg3QBXkwSPkUvYYhEhH_vCUeXn0ezA62d7kYDrnUT9bY6PWUnwC0JZ-KzpE5ky3ImYzuqlLJrdA11uh-D6eYv48lk5AWTFnpJuqNuyGSQOxcVVnckBi-dlidR49vJTtLEcrW"/>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Alex Morgan</p>
                <p className="text-[10px] text-slate-500 truncate uppercase font-bold">Manager</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden relative bg-background-light">
          {/* Header */}
          <header className="h-16 bg-white border-b border-primary/10 flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative max-w-md w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" placeholder="Search menu items..." type="text"/>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="size-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition-all shadow-sm">
                <span className="material-symbols-outlined text-xl">add</span>
                <span>Add New Item</span>
              </button>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {/* Tabs & Filter Section */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-end justify-between border-b border-primary/10 pb-1">
                <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                  <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">All Items</button>
                  <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors whitespace-nowrap">Starters</button>
                  <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors whitespace-nowrap">Main Course</button>
                  <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors whitespace-nowrap">Desserts</button>
                  <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors whitespace-nowrap">Beverages</button>
                </div>
                <div className="pb-3 hidden md:block">
                  <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm leading-none">filter_list</span>
                    Sort By: Name
                  </button>
                </div>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-primary/5 shadow-sm group hover:shadow-md transition-all overflow-hidden relative">
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gourmet classic cheeseburger with sesame bun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzRNbVp02nhWkahDhRq3FNRAa4127cRkr7Vn8K8ZQzKh8z1Jlu-zek9MGfHmSC6GPgW3DVC7UBGG9ganqdNINlkVjeO7itVp74GWqZARUieAlBs-Zj1e9vwMX_E1fx2YciIhrUvpvMZBSAVrOA9F77Qrtec8u3dFGcLAjftHAq4HyGf6Lw_J4WlavbndscscrnBitO7r7hxOCGVG8AesWuCrymEPvBG7_iDCypuclbWaBzNwxGHwjWwX_njRM7qooluZL6TSaS9Rhk"/>
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="size-8 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-slate-800 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">Main Course</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-[180px]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 line-clamp-1">Classic Wagyu Burger</h3>
                    <span className="font-bold text-primary shrink-0 ml-2">$18.50</span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 flex-grow">A premium wagyu beef patty topped with truffle aioli, aged cheddar, and caramelized onions.</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Available</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">SKU: BURG-001</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-primary/5 shadow-sm group hover:shadow-md transition-all overflow-hidden relative">
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fresh salmon fillet with roasted vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFJbHeIojbB78zU2KUIUI0e9UN6L4xi1Z-d-LtG9l3Kigdw_iR-iCYb7Lm6WGnMwJm9P0pufsBMoLUREIYsCwbJpTfxh6Q3MOPKSvDwgQLoMZdom6IEYPh7UY3-LDNoVela4Vq8Va2qmraK3L939UDdKeA5_KPsXgk5IRNJpsbZM8X_vtw4sPEU2R5yoEBBFMF0I7SFJGhmhKfEpB8OKrOVLr9GFCRsINVnALhy7LaOdYtUD7Jl-wjMTcrh_L9GbRNaGeiQbSlbrq4"/>
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="size-8 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-slate-800 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">Main Course</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-[180px]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 line-clamp-1">Herb Crusted Salmon</h3>
                    <span className="font-bold text-primary shrink-0 ml-2">$24.00</span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 flex-grow">Atlantic salmon with a crust of fresh parsley, dill and lemon zest, served with asparagus.</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Available</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">SKU: FISH-024</div>
                  </div>
                </div>
              </div>

              {/* Card 3 (Sold Out) */}
              <div className="bg-white rounded-xl border border-primary/5 shadow-sm group hover:shadow-md transition-all overflow-hidden relative">
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden grayscale">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Rich chocolate lava cake on a plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANRamulBve3UIyrNjSUMFFxWjHRmbQx_6orkdzS7evrYUE7P2TwPi5M4uDTjmBT53VQCOG9dc8fHWRPVrTxGCzS3fKJ8C8Q96X1KbkUmJzv18AlJ7-FXw-O-090Wh4lRul7dDvOM4swonCSwKyWpjxjz_6JRIxNco21b4tgI9uit71VdhR9dYza5LyypiWVeEt76UbVq0_jhZqNnpv5QPq3lbRQVHsjAHjplP6ctwhM0_YxfLi2OZIYRB13SXr8sal6BLZjB3wR33Q"/>
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="size-8 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-slate-800 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-0">
                    <span className="text-white font-bold text-sm tracking-widest uppercase border border-white/50 px-3 py-1 rounded backdrop-blur-sm">Sold Out</span>
                  </div>
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">Desserts</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-[180px]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 opacity-60 line-clamp-1">Dark Lava Cake</h3>
                    <span className="font-bold text-primary opacity-60 shrink-0 ml-2">$12.00</span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 flex-grow opacity-60">Warm chocolate cake with a molten dark chocolate center, served with vanilla bean gelato.</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Out of Stock</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">SKU: DESS-009</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-primary/5 shadow-sm group hover:shadow-md transition-all overflow-hidden relative">
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fresh garden salad with feta and olives" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxY7_06UJXf7clgTWDwySydm6FLgz9EK82NPkaEfUpl_mcc5Wu-1klc3KHkMr0BNnzbvMhRJGN-FVyqjU94KPmZtTgwNnJ6E-flfQA43VNUi--eMJjSL9dnXKOiZ7ykYQwWKJeQnROeeYDpQwA8SY20d24AMEjrTr0t9XExVqhJPasL9xYtA9cji0FUiTFQcDMFGQTF3ubtN6ribr8csLjcFMDSWQyFoU0HXU4udYtFf19jyBgpmHDXeDCJf2PhM8KZH0jbWRFpHaW"/>
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="size-8 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-slate-800 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">Starters</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-[180px]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 line-clamp-1">Mediterranean Salad</h3>
                    <span className="font-bold text-primary shrink-0 ml-2">$14.00</span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 flex-grow">A fresh mix of seasonal greens, kalamata olives, feta cheese, and balsamic vinaigrette.</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Available</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400">SKU: STAR-012</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
