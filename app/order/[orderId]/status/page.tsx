import Link from "next/link";
import Image from "next/image";

export default function OrderTracking({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId || "1234";

  return (
    <div className="flex-col min-h-screen bg-[#f8f5f5] pt-[56px] md:pt-[57px] flex font-display">
      <div className="relative mx-auto w-full max-w-md bg-[#f8f5f5] min-h-[calc(100vh-57px)] flex flex-col shadow-2xl overflow-x-hidden">
        <header className="flex items-center p-4 sticky top-0 bg-[#f8f5f5]/80 backdrop-blur-md z-10">
          <Link href={`/order-confirmation/${orderId}`} className="size-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-ink">Track Order</h1>
          <button className="size-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors text-primary">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </header>

        <main className="flex-1 px-4 pb-28">
          <div className="mt-4 bg-white rounded-xl overflow-hidden shadow-sm border border-primary/5">
            <div className="h-48 w-full bg-cover bg-center relative" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlnQL9PXw6tpsDNIihngCZ94O9TnrD68HhT-sRIdMhY-F2PgeoVZUr2ECoZkmXKbjMuXsV67ZPUps_v4-7ut2rG_aKRzfkS9oJj8-U-XCgEiftdBqPBCMLvOgtehRZl74UTuoOoMDQmLq2M28qhkxAsJBrqp1nC75tqcgQ7YOKzRkvmGs36N4bNFdmMoyXdgxoCCFerwkXbosQ_2Q8qJmiSzlI0IDHNkrv8y6uMC7S1YjqXxowPgDZCwWiDn3w5Ewgi_3O2gFR-F4f')"}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-2">In Progress</span>
                <h2 className="text-2xl font-bold mt-1">Order #{orderId}</h2>
              </div>
            </div>
            <div className="p-5 flex justify-between items-center">
              <div>
                <p className="text-slate-500 text-sm">Estimated Delivery</p>
                <p className="text-xl font-bold text-primary italic font-lora">8 minutes</p>
              </div>
              <Link href="/menu" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">restaurant_menu</span>
                View Menu
              </Link>
            </div>
          </div>

          <div className="mt-8 px-2">
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-lora italic text-xl text-slate-800 font-bold">Current Status</h3>
              <span className="text-primary font-bold text-sm">40% Complete</span>
            </div>
            <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden relative">
              <div className="h-full bg-primary rounded-full progress-shimmer" style={{width: "40%"}}></div>
            </div>
            <p className="mt-3 text-sm text-slate-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-primary">schedule</span>
              Your chef is carefully plating your dishes.
            </p>
          </div>

          <div className="mt-10 space-y-0 relative px-2">
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
            
            <div className="relative flex gap-4 pb-8">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined">check</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-lora text-lg leading-tight font-bold text-ink">Received</h4>
                <p className="text-sm text-slate-500">Order confirmed at 12:05 PM</p>
              </div>
            </div>
            
            <div className="relative flex gap-4 pb-8">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white ring-4 ring-primary/20">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-lora text-lg leading-tight text-primary font-bold">Preparing</h4>
                <p className="text-sm text-slate-600">Est. completion: 12:20 PM</p>
              </div>
            </div>
            
            <div className="relative flex gap-4 pb-8 opacity-50">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-lora text-lg leading-tight font-bold text-ink">Ready</h4>
                <p className="text-sm text-slate-500">Wait for server</p>
              </div>
            </div>
            
            <div className="relative flex gap-4 pb-4 opacity-50">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                <span className="material-symbols-outlined">flatware</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-lora text-lg leading-tight font-bold text-ink">Served</h4>
                <p className="text-sm text-slate-500">Enjoy your meal</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden shrink-0 border-2 border-primary">
              <img alt="Chef" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMfHi1W2C8c0SC7SH-AQngqTC0URrLs31wNTbaTTBS4hdMFxs_hgZpXQ4DpSOk15VBQO2yQ3MniVSuw60l0uBW1fqSquMg3XOqUZmnND9P9SKgXgVW0jtka2OhaLFDQS3sil0yDv6iagwRP8Ud2sh-SmaN_538-YMp74wAAEXGrjh0Iq8MllaTFOzlEJFAhgzTBXAhMoNyvLG_d5d-MsCJDYBGcqYNKCe1wUXhnnJuq1o0K9LASS-ViLchxI8AMhXGkg_nL5OkrXAY" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Your Chef</p>
              <p className="text-lg font-lora font-bold text-ink">Chef Marco Rossi</p>
            </div>
            <button className="size-10 rounded-full bg-primary hover:bg-primary/90 transition-colors text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
            </button>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white/90 backdrop-blur-lg border-t border-slate-200 flex justify-around items-center py-2 pb-8 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <Link href="/menu" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Home</span>
          </Link>
          <Link href={`/order/${orderId}/status`} className="flex flex-col items-center gap-1 text-primary transition-colors">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>receipt_long</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter text-primary font-bold">Orders</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Explore</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium uppercase tracking-tighter">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
