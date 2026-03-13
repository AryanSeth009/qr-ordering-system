import Link from "next/link";

export default function MobileCart() {
  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display">
      <div className="relative flex h-auto min-h-[calc(100vh-57px)] w-full flex-col max-w-md mx-auto bg-white shadow-xl overflow-x-hidden">
        <div className="sticky top-0 z-10 flex items-center bg-white/80 backdrop-blur-md p-4 justify-between border-b border-primary/10">
          <Link href="/menu" className="text-slate-900 flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-primary/5 rounded-full transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">My Cart</h2>
          <div className="size-10"></div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-40">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-900 text-xl font-bold leading-tight">Order Details</h3>
            <span className="text-primary text-sm font-semibold px-3 py-1 bg-primary/10 rounded-full">2 Items</span>
          </div>
          
          <div className="flex gap-4 p-3 bg-white rounded-xl border border-primary/5 shadow-sm">
            <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxGuIxiOEr9D8C4euoK_bp52Jj2XmKpwRmUF2hpigYMkLECE2kdXFq2lwsNyEHnDnajzRdqgFOL4xB2NZ3P2PGdMqD-RO7zG6LbVULdB5xJ8Yb6bEgwx5PLHoQ2XkmimigTozmb9Jxn6J-4oMKGymA1ssYsSgHjJECpniVcFymVdekOzOz2Dvof1MPhI3ifzcX5F5R7srPKz-OTfY5e1X_lwjAeqRR96iliqjbX6Px3fT0uy6mdpLUVkvx_VrHvE-AVwnxLGLwrLQC')"}}></div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-base font-bold leading-tight">Espresso</p>
                  <p className="text-slate-500 text-sm font-normal">Double Shot</p>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-primary text-base font-bold">$6.00</p>
                <div className="flex items-center gap-3 bg-background-light p-1 rounded-lg border border-primary/10">
                  <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm text-primary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                  <span className="text-sm font-bold w-4 text-center">2</span>
                  <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm text-primary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[18px]">add</span></button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 p-3 bg-white rounded-xl border border-primary/5 shadow-sm">
            <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdFPYjzs2qQ7ycPqPJryb8jbc6HOxErAuPtGkJfqX4crPjsbxBU7P7E-HdqdyAhz7SP31-VQkYWWj2WhRIEuvOzvf12AbHEOeGnfSZvUl3p9LzTvToWXwmyQdGlXzMCGz8Zipkb0lcRk3JYWO1OanMqYfBmwOtPmR5XV3A6ZvbMaBbge8TghsxzYoYPYcM7b8i7fOCUTIF9M-1giN8-QWqTRBf5Rhjf3HTWHmqjFJ3SLJv3HgCtCI41pXKAK_HxnTszh7RHYtp7noq')"}}></div>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-base font-bold leading-tight">Croissant</p>
                  <p className="text-slate-500 text-sm font-normal">Butter Flaky</p>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-primary text-base font-bold">$4.50</p>
                <div className="flex items-center gap-3 bg-background-light p-1 rounded-lg border border-primary/10">
                  <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm text-primary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                  <span className="text-sm font-bold w-4 text-center">1</span>
                  <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white shadow-sm text-primary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[18px]">add</span></button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-slate-900 text-sm font-bold mb-2">Special Instructions</p>
            <textarea className="w-full bg-white border border-primary/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40" placeholder="Add a note (e.g. no sugar, extra hot)..." rows={2}></textarea>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-primary/10 p-4 pb-8 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm"><span className="text-slate-500">Table Number</span><span className="font-bold text-slate-900 flex items-center gap-1"><span className="material-symbols-outlined text-sm">table_restaurant</span>Table 4</span></div>
            <div className="flex justify-between items-center text-sm"><span className="text-slate-500">Subtotal</span><span className="font-medium text-slate-900">$10.50</span></div>
            <div className="flex justify-between items-center text-sm"><span className="text-slate-500">Tax</span><span className="font-medium text-slate-900">$0.85</span></div>
            <div className="flex justify-between items-center pt-2 border-t border-primary/5">
              <span className="text-base font-bold text-slate-900">Total Amount</span>
              <span className="text-xl font-bold text-primary">$11.35</span>
            </div>
          </div>
          <Link href="/checkout" className="w-full bg-primary hover:bg-primary/90 transition-colors text-background-light py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2">
            <span>Place Order</span><span className="material-symbols-outlined">shopping_bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
