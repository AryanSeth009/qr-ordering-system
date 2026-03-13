import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display">
      <div className="flex h-[calc(100vh-57px)] overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-primary/10 shrink-0 hidden lg:flex flex-col">
          <div className="p-6 border-b border-primary/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold leading-none text-ink">La Cerise</h1>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Admin Panel</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm">Dashboard</span>
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink/70 hover:bg-primary/5 cursor-pointer">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="text-sm">Orders</span>
            </Link>
            <Link href="/admin/menu" className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink/70 hover:bg-primary/5 cursor-pointer">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-sm">Menu</span>
            </Link>
            <Link href="/admin/qr-codes" className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink/70 hover:bg-primary/5 cursor-pointer">
              <span className="material-symbols-outlined">qr_code_2</span>
              <span className="text-sm">QR Codes</span>
            </Link>
            <Link href="/admin/kitchen" className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink/70 hover:bg-primary/5 cursor-pointer">
              <span className="material-symbols-outlined">monitor_heart</span>
              <span className="text-sm">KDS</span>
            </Link>
          </nav>
          
          <div className="p-4 border-t border-primary/10">
            <div className="flex items-center gap-3 px-2">
              <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary/20" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr14X3kCUrxkbo-FoRRqPZlaNF6UTxtoW1u7g8eyJAXN1MP__9LulGmUsyJlKf9fv6wL642YaAcOZ4-GtT2MjNYrHQjgwsgCHrYQKkg_KPa1ufrqb5wFtxzsu0i9hJI8oFGlLBiRKtS_aIP59Y-ij_5eGQgt2mTUSm0SyW-y4NT1TicZkZHzwpTVU0WUIURsnB7flR4Qfz44qXeKF1USgNNgubE2bmQLx_o86iUly_aJSvsJ6ZaHbi-bAoA2Q4iL4hQCMW6X3Yd-WH')"}}></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate text-ink">Julian Casablancas</p>
                <p className="text-xs text-ink/60">Head Manager</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <header className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-1">Dashboard Overview</h2>
              <p className="text-ink/60">Real-time performance metrics for today</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-primary/10 rounded-lg text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                Oct 24, 2023
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Report
              </button>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all group-hover:scale-110"></div>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">Today's Revenue</p>
              <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-4xl font-bold text-ink">$1,240</h3>
                <span className="text-green-600 text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>12.5%
                </span>
              </div>
              <p className="text-xs text-ink/40 mt-4">Compared to $1,102 yesterday</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all group-hover:scale-110"></div>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">Active Orders</p>
              <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-4xl font-bold text-ink">8</h3>
                <span className="text-primary text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>3%
                </span>
              </div>
              <p className="text-xs text-ink/40 mt-4">4 orders in preparation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all group-hover:scale-110"></div>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">Kitchen Status</p>
              <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-4xl font-bold text-ink">14m</h3>
                <span className="text-ink/60 text-sm font-medium">avg wait</span>
              </div>
              <p className="text-xs text-ink/40 mt-4">Within target threshold</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-primary/10 flex justify-between items-center">
                <h4 className="font-serif text-2xl font-bold text-ink">Latest Orders</h4>
                <Link href="/admin/orders" className="text-primary text-sm font-bold hover:underline">View All</Link>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left">
                  <thead className="bg-primary/5 text-ink/60 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Order ID</th>
                      <th className="px-6 py-4 font-semibold">Table #</th>
                      <th className="px-6 py-4 font-semibold">Total</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    <tr className="hover:bg-primary/[0.02]">
                      <td className="px-6 py-4 font-bold text-ink">#8842</td>
                      <td className="px-6 py-4">Table 12</td>
                      <td className="px-6 py-4 font-bold">$84.50</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary text-white">Preparing</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="material-symbols-outlined text-ink/40 hover:text-primary">more_horiz</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/[0.02]">
                      <td className="px-6 py-4 font-bold text-ink">#8841</td>
                      <td className="px-6 py-4">Table 05</td>
                      <td className="px-6 py-4 font-bold">$126.20</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Received</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="material-symbols-outlined text-ink/40 hover:text-primary">more_horiz</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/[0.02]">
                      <td className="px-6 py-4 font-bold text-ink">#8840</td>
                      <td className="px-6 py-4">Takeaway</td>
                      <td className="px-6 py-4 font-bold">$42.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary text-white">Preparing</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="material-symbols-outlined text-ink/40 hover:text-primary">more_horiz</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-primary/[0.02]">
                      <td className="px-6 py-4 font-bold text-ink">#8839</td>
                      <td className="px-6 py-4">Table 02</td>
                      <td className="px-6 py-4 font-bold">$215.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Received</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="material-symbols-outlined text-ink/40 hover:text-primary">more_horiz</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm flex flex-col">
              <h4 className="font-serif text-2xl font-bold text-ink mb-6">Popular Items</h4>
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0 border border-primary/5" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkiC2ImuctiCdlVNC7w17ZhVmTN_44XAzDpTPmUIwYgtKKcXLRygA5_hdQ8rack4aCsdcK7J6YPUEYYMRqOCwjgjT4Hz6Rg3X_Pa8Id-H_CBinUNZ7zzpzsUYiWtNVWpMUL9aX3wTIgJ-CxnitkMZFqF6TAyEMxbGXFffVHly3JCWYRbf1yEhFXCXxRfN7nJps7k6zLmb7YgVZqk3IcidAaWmNL0r2qM56b0RTRu2XrU-n49cQ-DbNIrDY8_Jg6Nz1LqXjdho6x2YV')"}}></div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ink">Truffle Pasta</p>
                    <p className="text-xs text-ink/60">42 orders today</p>
                    <div className="w-full bg-primary/10 h-1 rounded-full mt-2">
                      <div className="bg-primary h-full rounded-full" style={{width: "85%"}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0 border border-primary/5" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt8_KJnJHK29QikMfYLe_giATCv3w98T6QAV2D5Mdk8-Y4Am2YrvmePY-IgSmFeVLsSwydmQGFRR9Qvak2XWWTF_ZaG5MrNKzFBOnqv3kxm3FsBD7MEW162NGX4QStYjk4NQg-KDJ_VrSJWeXEXlUa15QAYO8u2ySbEHNTMU64j6NfunfwAXIx2rkUnY3vPZUBcv57V-JGNur4PXZR4wyxImCFo5aJxUl-kC2YEPtahXrEaUT-WegNqpQgkzeyyDZQ4YgBlBgglfod')"}}></div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ink">Margherita Pizza</p>
                    <p className="text-xs text-ink/60">38 orders today</p>
                    <div className="w-full bg-primary/10 h-1 rounded-full mt-2">
                      <div className="bg-primary h-full rounded-full" style={{width: "76%"}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0 border border-primary/5" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoev5GXgN5zA9CiOaYjjG5mIVCKX_G99rmLDgpAd-HmIhAdh7ljgxhPVrnDA1hNdRBjnAVVnAiZ830mhflUjN8AmzKm6nPvTh9FmTOUe-s7Q6JMqXbFoJzTsmS6D9A-o4Zjuv5fVwRaVeKbs1gqlMxBslVEE86s3iK_bF2jpJLTPMmu0lo5wdIEIQgIPKzXml3xWhFx9-_nQ-IT7i6uF4jz97jJhiM0m-gAhl-JgEvQ9DCGX_L6Lh29XTD6IkU4rzTtVc2a77rliYV')"}}></div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ink">Classic Burger</p>
                    <p className="text-xs text-ink/60">31 orders today</p>
                    <div className="w-full bg-primary/10 h-1 rounded-full mt-2">
                      <div className="bg-primary h-full rounded-full" style={{width: "62%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/admin/menu" className="w-full mt-8 py-3 text-sm font-bold border border-primary/20 text-primary rounded-lg hover:bg-primary/5 transition-colors text-center inline-block">
                Full Menu Analytics
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
