import Link from "next/link";

export default function AdminLogin() {
  return (
    <div className="flex-col min-h-screen bg-[#fdfaf3] pt-[56px] md:pt-[57px] flex font-display">
      <main className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-[460px] flex flex-col gap-8">
          <div className="text-center space-y-2">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary tracking-tight">Cherry & Cream Admin</h1>
            <p className="text-slate-500 text-base font-medium">Secure Portal Access</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(153,0,3,0.08)] border border-primary/5 cursor-default overflow-hidden">
            <div className="h-32 w-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhINQeLDwKbHFrMazbGt912U_mM07nhM7alslUBLi8GBIMIpelMudyK2QP-fRyU5Eh6EV72g6YqUGy4QqKT2PVmGeecYksQSfnOM9LWQ_-K9SvKKii-qI-LgEZtSqTZRKW7z-7yZpNLH0xXfqsfr2TlXqhiiVqVpJ32qdGo2F0BArNRJAe4cr8-HCCdgaggbIysDP2Ab-0du69xKdZJoyFDZe_KqPj7kZoxkhNvckW2YBpNBIUyT_q6xb9vXzLu1M1fHkmbZ_yf-6n')"}}>
              <div className="w-full h-full bg-primary/20 backdrop-brightness-75"></div>
            </div>
            
            <div className="p-8 md:p-10 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
                <p className="text-slate-500 text-sm">Enter your administrative credentials</p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Username</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                    <input className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="j.smith@cherrycream.com" type="text" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700">Password</label>
                    <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                    <input className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="••••••••••••" type="password" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 px-1">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary/30 size-4 accent-primary" type="checkbox" />
                  <label className="text-sm text-slate-600 cursor-pointer">Remember this device for 30 days</label>
                </div>
                
                <Link href="/admin" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4">
                  <span>Access Dashboard</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center text-slate-400 text-xs font-medium uppercase tracking-widest">
            Authorized Personnel Only • System ID: CC-772
          </div>
        </div>
      </main>
    </div>
  );
}
