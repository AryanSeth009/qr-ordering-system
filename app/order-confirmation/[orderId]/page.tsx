import Link from "next/link";
import Image from "next/image";

export default function OrderSuccess({ params }: { params: { orderId: string } }) {
  const orderId = params.orderId || "1234";

  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display">
      <div className="w-full max-w-md mx-auto bg-background-light flex flex-col items-center text-center pb-24">
        <div className="mb-8 mt-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary !text-6xl" style={{fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48"}}>check_circle</span>
          </div>
        </div>
        
        <h1 className="font-serif text-ink text-4xl font-bold mb-3">Order Confirmed!</h1>
        <p className="text-muted text-base font-normal leading-relaxed px-6 mb-10">
          Your order has been sent to the kitchen and is being prepared.
        </p>
        
        <div className="w-full bg-white/50 border border-primary/10 rounded-xl p-6 mb-10 shadow-sm backdrop-blur-sm mx-4">
          <div className="flex justify-between items-center border-b border-primary/5 pb-4 mb-4">
            <div className="text-left">
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-1">Order Number</p>
              <p className="text-ink text-xl font-bold">#{orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-1">Status</p>
              <div className="flex items-center gap-1 justify-end">
                <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                <p className="text-primary text-sm font-bold">In Progress</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary">schedule</span>
            </div>
            <div className="text-left">
              <p className="text-muted text-xs font-medium">Estimated Prep Time</p>
              <p className="text-ink font-bold">15-20 mins</p>
            </div>
          </div>
        </div>
        
        <div className="w-full px-4 mb-10">
          <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-lg">
            <img alt="Coffee and pastry" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgvaFDJ-obR8bMgcW9kDTjbIm1OL3sPjZVrChq7D5BmutaaHlGWEKxJbbMBFJ0j5GWeu-dnx2y9Ino8h6BRuHA7NvqkErnh8bpcENuEsJJy-b_8WOOfdPYsk5DGQaFZpImNvLQoB9srrsjA9KBCK_yJ2F4DG4AGyWX_-BcMXyuWabjj4ZnrX-Yp8NZrex005nXHDe63R4-iV71RnAfsnkuRjq_28VhkMmpGgo6L9qNcav0kci2XFjU-lzt5oNLaSkn0BB7BSpXjo7H" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"></div>
          </div>
        </div>
        
        <div className="w-full space-y-3 px-4 mb-12">
          <Link href={`/order/${orderId}/status`} className="w-full flex justify-center items-center bg-primary text-background-light py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 transition-colors">
            Track Your Order
          </Link>
          <Link href="/menu" className="w-full flex justify-center items-center bg-transparent border-2 border-ink text-ink py-4 rounded-xl font-bold hover:bg-ink/5 transition-colors">
            Back to Menu
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-primary/10 px-4 pb-4 pt-3 flex justify-around items-center z-20">
        <Link href="/menu" className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined">coffee</span>
          <p className="text-[10px] font-bold uppercase tracking-tighter">Menu</p>
        </Link>
        <Link href={`/order/${orderId}/status`} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>receipt_long</span>
          <p className="text-[10px] font-bold uppercase tracking-tighter">Orders</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors">
          <span className="material-symbols-outlined">favorite</span>
          <p className="text-[10px] font-bold uppercase tracking-tighter">Favorites</p>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors">
          <span className="material-symbols-outlined">person</span>
          <p className="text-[10px] font-bold uppercase tracking-tighter">Profile</p>
        </Link>
      </div>
    </div>
  );
}
