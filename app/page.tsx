import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10 hidden md:flex items-center justify-between px-8 py-3 shadow-sm">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">restaurant</span>
          </div>
          <span className="font-serif text-2xl font-bold text-primary">Cherry & Cream</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/menu" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Menu</Link>
          <Link href="/cart" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Cart</Link>
          <Link href="/checkout" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Checkout</Link>
          <Link href="/order-confirmation/123" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Order Success</Link>
          <Link href="/order/123/status" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Track Order</Link>
          <div className="w-px h-5 bg-primary/20 mx-2"></div>
          <Link href="/admin/login" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Admin Login</Link>
          <Link href="/admin" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Dashboard</Link>
          <Link href="/admin/menu" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">Menu Mgmt</Link>
          <Link href="/admin/kitchen" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">KDS</Link>
          <Link href="/admin/qr-codes" className="nav-btn px-4 py-2 rounded-lg text-sm font-semibold text-ink/70 hover:text-primary hover:bg-primary/5">QR Codes</Link>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen pt-0 font-display">
        {/* Hero */}
        <section className="hero-bg min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Restaurant Management System
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
              Cherry & Cream
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              A complete restaurant management platform — from customer ordering to kitchen display, all in one elegant system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/menu?table=1" className="bg-white text-primary font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-all shadow-2xl shadow-black/30 flex items-center gap-2">
                <span className="material-symbols-outlined">restaurant_menu</span>
                Browse Menu
              </Link>
              <Link href="/admin/login" className="bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                <span className="material-symbols-outlined">shield_person</span>
                Admin Portal
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest">Explore All Screens</span>
            <span className="material-symbols-outlined animate-bounce">expand_more</span>
          </div>
        </section>

        {/* Screens Grid */}
        <section className="bg-background-light py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">All Screens</h2>
              <p className="text-muted text-lg">Click any card to explore that part of the system</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Customer Screens */}
              <div className="col-span-full mb-2">
                <h3 className="font-serif text-2xl font-bold text-primary border-b border-primary/20 pb-3">Customer Experience</h3>
              </div>
              
              <Link href="/menu" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#EFE6DE] to-[#d4c5bb] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-7xl opacity-30 group-hover:scale-110 transition-transform">restaurant_menu</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Mobile</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Customer Menu</h4>
                  <p className="text-muted text-sm mt-1">Browse menu items, search, filter by category</p>
                </div>
              </Link>

              <Link href="/cart" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#EFE6DE] to-[#d4c5bb] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-7xl opacity-30 group-hover:scale-110 transition-transform">shopping_bag</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Mobile</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Your Cart</h4>
                  <p className="text-muted text-sm mt-1">Review items, adjust quantities, add notes</p>
                </div>
              </Link>

              <Link href="/checkout" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#EFE6DE] to-[#d4c5bb] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-7xl opacity-30 group-hover:scale-110 transition-transform">credit_card</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Mobile</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Checkout</h4>
                  <p className="text-muted text-sm mt-1">Payment method selection & order confirmation</p>
                </div>
              </Link>

              <Link href="/order-confirmation/123" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#EFE6DE] to-[#d4c5bb] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-7xl opacity-30 group-hover:scale-110 transition-transform">check_circle</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Mobile</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Order Confirmed</h4>
                  <p className="text-muted text-sm mt-1">Success screen with order number & wait time</p>
                </div>
              </Link>

              <Link href="/order/123/status" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#EFE6DE] to-[#d4c5bb] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-7xl opacity-30 group-hover:scale-110 transition-transform">receipt_long</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Mobile</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Order Tracking</h4>
                  <p className="text-muted text-sm mt-1">Live status with progress & chef details</p>
                </div>
              </Link>

              {/* Admin Screens */}
              <div className="col-span-full mb-2 mt-6">
                <h3 className="font-serif text-2xl font-bold text-primary border-b border-primary/20 pb-3">Admin & Operations</h3>
              </div>

              <Link href="/admin/login" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#230f0f] to-[#3d1a1a] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-white/20 text-7xl group-hover:scale-110 transition-transform">lock</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Web</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Admin Login</h4>
                  <p className="text-muted text-sm mt-1">Secure portal access for staff</p>
                </div>
              </Link>

              <Link href="/admin" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#230f0f] to-[#3d1a1a] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-white/20 text-7xl group-hover:scale-110 transition-transform">dashboard</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Web</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Admin Dashboard</h4>
                  <p className="text-muted text-sm mt-1">Revenue, orders, kitchen status overview</p>
                </div>
              </Link>

              <Link href="/admin/menu" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#230f0f] to-[#3d1a1a] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-white/20 text-7xl group-hover:scale-110 transition-transform">menu_book</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Web</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Menu Management</h4>
                  <p className="text-muted text-sm mt-1">Add, edit & manage menu items</p>
                </div>
              </Link>

              <Link href="/admin/kitchen" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#230f0f] to-[#3d1a1a] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-white/20 text-7xl group-hover:scale-110 transition-transform">restaurant</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Web</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">Kitchen Display (KDS)</h4>
                  <p className="text-muted text-sm mt-1">Real-time kitchen order management</p>
                </div>
              </Link>

              <Link href="/admin/qr-codes" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group">
                <div className="h-40 bg-gradient-to-br from-[#230f0f] to-[#3d1a1a] flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-white/20 text-7xl group-hover:scale-110 transition-transform">qr_code_2</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-ink/10 text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Web</span>
                  </div>
                  <h4 className="font-bold text-lg text-ink">QR Code Manager</h4>
                  <p className="text-muted text-sm mt-1">Generate & export QR codes per table</p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1210] text-white/40 py-8 px-6 text-center text-sm">
          <p className="font-serif text-white/60 text-lg mb-2">Cherry & Cream Group</p>
          <p>© 2024 — All rights reserved</p>
        </footer>
      </div>
    </>
  );
}
