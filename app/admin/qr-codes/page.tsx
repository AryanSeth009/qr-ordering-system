import Link from "next/link";
import Image from "next/image";

export default function AdminQRCodes() {
  return (
    <div className="flex-col min-h-screen bg-background-light pt-[56px] md:pt-[57px] flex font-display text-slate-900 antialiased">
      <div className="flex h-[calc(100vh-57px)] overflow-hidden">
        {/* SideNavBar */}
        <aside className="w-64 flex-shrink-0 border-r border-primary/10 bg-white hidden md:flex flex-col">
          <div className="p-6 flex flex-col h-full border-b border-primary/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">qr_code_2</span>
              </div>
              <div>
                <h1 className="text-slate-900 text-lg font-bold leading-none">TableQR</h1>
                <p className="text-primary/60 text-xs font-medium">Admin Suite</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </Link>
            <Link href="/admin/qr-codes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">qr_code</span>
              <span className="text-sm font-semibold">QR Codes</span>
            </Link>
            <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-semibold">Orders</span>
            </Link>
            <Link href="/admin/menu" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span className="text-sm font-semibold">Menu</span>
            </Link>
            <div className="pt-4 pb-2">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">Settings</p>
            </div>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-semibold">General Settings</span>
            </Link>
          </nav>
          
          <div className="p-4 border-t border-primary/10">
            <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-lg">person</span>
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate text-slate-800">Resto Manager</p>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Premium Plan</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background-light p-4 md:p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-serif mb-1">QR Code Management</h2>
                <p className="text-slate-500 mt-1 max-w-xl text-sm">Manage and export high-resolution custom QR codes for each physical table. Customers can scan to view the menu and place orders.</p>
              </div>
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap border border-transparent">
                <span className="material-symbols-outlined text-xl">add_circle</span>
                <span>New Table QR</span>
              </button>
            </div>

            {/* Filters & Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 mt-2 mr-2">
                  <span className="material-symbols-outlined !text-6xl text-slate-900">table_restaurant</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Tables</p>
                <p className="text-3xl font-black text-slate-900">10</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full flex items-center justify-center -mr-2 -mt-2"></div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Active Codes</p>
                <p className="text-3xl font-black text-primary">10</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 mt-2 mr-2">
                  <span className="material-symbols-outlined !text-6xl text-slate-900">qr_code_scanner</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Scans (Today)</p>
                <p className="text-3xl font-black text-slate-900 flex items-center gap-2">
                  142 <span className="text-sm text-green-500 font-bold bg-green-50 px-2 py-0.5 rounded flex items-center"><span className="material-symbols-outlined text-[12px] mr-0.5">trending_up</span>+12%</span>
                </p>
              </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-slate-700">Generated Codes</h3>
                <div className="flex gap-2">
                  <button className="text-xs font-bold text-primary border border-primary/20 px-3 py-1.5 rounded bg-white hover:bg-primary hover:text-white transition-colors">Export All (ZIP)</button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-primary/5 bg-slate-50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">Table #</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">QR Preview</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    
                    {/* Rows */}
                    {[1,2,3,4,5,6,7, 8, 9, 10].map((num) => (
                      <tr key={num} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">T{num}</div>
                            <span className="text-sm font-bold text-slate-900">Table {num}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-1 rounded border border-green-200 text-[10px] font-bold bg-green-50 text-green-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-12 h-12 bg-white rounded-lg p-1.5 border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                            <img alt={`QR code for table ${num}`} className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSXqmV06G5w5dWXec6ScTE2Kc0DqgE7gRu8cCO8T8KAI-_sYOph5YjRU9KUm-PgkPtCu9lzrZu4JKnq7raMbrfNnOyrKg4nZNSiRcjlN62W5oe_S2HV6ZGePcTqncEVzRSDbUvbf2q5JAEpd4BSdbMnyRNvtHH8IP5cl59WJCm4IQtAiHpBSen7VA9PMu4uPE_6TrV37CYK_J3g1Scl8fhb7eWRS_MUWQgcm4QcOSuhnSLvzYzka5Z5CdmLLNZZaN2aWg2AWbOrTaF"/>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 text-primary transition-colors" title="Download PNG">
                              <span className="material-symbols-outlined text-[18px]">image</span>
                            </button>
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 text-primary transition-colors" title="Download SVG">
                              <span className="material-symbols-outlined text-[18px]">data_object</span>
                            </button>
                            <span className="w-px h-4 bg-slate-200 mx-1"></span>
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              
              {/* Footer Pagination */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium">Showing <span className="font-bold text-slate-700">1</span> to <span className="font-bold text-slate-700">10</span> of <span className="font-bold text-slate-700">10</span> results</p>
                <div className="flex gap-1.5">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed text-sm hover:bg-slate-50">
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs shadow-sm">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-xs font-bold">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-sm">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
