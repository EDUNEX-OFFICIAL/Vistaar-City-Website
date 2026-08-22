"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Mail, MessageCircle, Clock, Building2 } from "lucide-react";
import {
  PlotCity,
  PlotRecord,
  PlotStatus,
  allPlots,
  cityConfigs,
  getCityPlotStats,
  headOfficeContact,
  plotsByCity,
} from "@/lib/all-plots";
import FullPlotDetailModal from "@/components/plots/FullPlotDetailModal";

const cities: PlotCity[] = ["Patna", "Muzaffarpur", "Raxaul"];
const PAGE_SIZE = 24;

export default function PlotsPageContent() {
  const [activeCity, setActiveCity] = useState<PlotCity>("Patna");
  const [statusFilter, setStatusFilter] = useState<PlotStatus | "All">("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedPlot, setSelectedPlot] = useState<PlotRecord | null>(null);

  const stats = getCityPlotStats(activeCity);

  const filteredPlots = useMemo(() => {
    let list = plotsByCity[activeCity];
    if (statusFilter !== "All") list = list.filter((p) => p.status === statusFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.plotNumber.toLowerCase().includes(q) ||
          p.block.toLowerCase().includes(q) ||
          p.sector.includes(q)
      );
    }
    return list;
  }, [activeCity, statusFilter, search]);

  const totalPages = Math.ceil(filteredPlots.length / PAGE_SIZE);
  const paginatedPlots = filteredPlots.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCityChange = (city: PlotCity) => {
    setActiveCity(city);
    setPage(1);
    setSearch("");
    setStatusFilter("All");
  };

  const cityConfig = cityConfigs.find((c) => c.city === activeCity)!;

  return (
    <>
      <section className="pt-10 pb-8 md:pt-12 md:pb-10 bg-forest-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <span className="text-[10px] uppercase text-white/50 font-bold tracking-widest mb-3 sm:mb-4 block">Inventory</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">All Plots</h1>
          <p className="text-white/80 text-base sm:text-lg font-light max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Browse plots in each location — Patna, Muzaffarpur & Raxaul. Click any plot for full details, map & sales contact.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
            <div className="bg-white/10 rounded-sm px-4 sm:px-5 py-2.5 sm:py-3 border border-white/20 min-w-[120px]">
              <div className="text-xl sm:text-2xl font-bold">{allPlots.length}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider">Total Plots</div>
            </div>
            <div className="bg-white/10 rounded-sm px-4 sm:px-5 py-2.5 sm:py-3 border border-white/20 min-w-[120px]">
              <div className="text-xl sm:text-2xl font-bold">3</div>
              <div className="text-white/60 text-xs uppercase tracking-wider">Locations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCity === city
                    ? "bg-forest-900 text-white shadow-md"
                    : "bg-sand-100 text-charcoal hover:bg-sand-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { label: "Total", value: stats.total, color: "text-charcoal" },
              { label: "Available", value: stats.available, color: "text-forest-800" },
              { label: "Reserved", value: stats.reserved, color: "text-yellow-700" },
              { label: "Sold", value: stats.sold, color: "text-red-600" },
            ].map((s) => (
              <div key={s.label} className="rounded-sm border border-gray-100 bg-ivory p-3 sm:p-4 text-center">
                <div className={`text-xl sm:text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search plot number, block, sector..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full rounded-sm border border-gray-200 pl-10 pr-4 py-2.5 text-sm focus:border-forest-900 focus:outline-none"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as PlotStatus | "All");
                setPage(1);
              }}
              className="rounded-sm border border-gray-200 px-4 py-2.5 text-sm focus:border-forest-900 focus:outline-none"
            >
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
              <option value="Sold">Sold</option>
            </select>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Showing {paginatedPlots.length} of {filteredPlots.length} plots in <strong>{activeCity}</strong> — {cityConfig.projectName}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {paginatedPlots.map((plot) => (
              <button
                key={plot.id}
                onClick={() => setSelectedPlot(plot)}
                className={`text-left rounded-sm border p-2.5 sm:p-3 transition-all hover:shadow-md hover:-translate-y-0.5 touch-manipulation ${
                  plot.status === "Available"
                    ? "border-forest-200 bg-forest-50/50 hover:border-forest-900"
                    : plot.status === "Reserved"
                      ? "border-yellow-200 bg-yellow-50/50"
                      : "border-red-200 bg-red-50/40 opacity-80"
                }`}
              >
                <div className="text-xs font-bold text-forest-900 mb-0.5">{plot.plotNumber}</div>
                <div className="text-[10px] text-gray-500 mb-1">Blk {plot.block} · Sec {plot.sector}</div>
                <div className="text-[10px] font-medium text-charcoal mb-1">{plot.size}</div>
                <div className="text-[10px] font-bold text-forest-900 mb-2">₹ {plot.price}</div>
                <span
                  className={`inline-block rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                    plot.status === "Available"
                      ? "bg-forest-600 text-white"
                      : plot.status === "Reserved"
                        ? "bg-yellow-600 text-white"
                        : "bg-red-600 text-white"
                  }`}
                >
                  {plot.status}
                </span>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 rounded-sm border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500 px-3">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded-sm border border-gray-200 text-sm disabled:opacity-40 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-10 md:py-16 bg-sand-100 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-4 block">Sales & Support</span>
            <h2 className="font-serif text-3xl font-bold text-forest-900 mb-4">Who Will Help You Buy?</h2>
            <p className="text-charcoal/70 text-sm">
              All plots are sold exclusively through Vistar City authorised sales desks. Each location has a dedicated relationship manager to guide you from enquiry to documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {cityConfigs.map((config) => (
              <div key={config.city} className="bg-white rounded-sm border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-forest-800" />
                  <h3 className="font-bold text-forest-900">{config.city}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-3">{config.soldBy}</p>
                <p className="text-sm font-bold mb-0.5">{config.salesContact.name}</p>
                <p className="text-xs text-gray-500 mb-4">{config.salesContact.role}</p>
                <div className="space-y-2 text-xs">
                  <a href={`tel:${config.salesContact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-forest-900">
                    <Phone className="h-3.5 w-3.5" /> {config.salesContact.phone}
                  </a>
                  <a href={`mailto:${config.salesContact.email}`} className="flex items-center gap-2 hover:text-forest-900">
                    <Mail className="h-3.5 w-3.5" /> {config.salesContact.email}
                  </a>
                  <a href={`https://wa.me/${config.salesContact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-forest-900">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-forest-900 text-white rounded-sm p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <Building2 className="h-8 w-8 mb-4 text-white/70" />
                <h3 className="font-serif text-2xl font-bold mb-2">{headOfficeContact.name}</h3>
                <p className="text-white/70 text-sm mb-4">{headOfficeContact.role}</p>
                <p className="flex items-start gap-2 text-sm text-white/80 mb-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {headOfficeContact.address}
                </p>
                <p className="flex items-center gap-2 text-sm text-white/80">
                  <Clock className="h-4 w-4" /> {headOfficeContact.hours}
                </p>
              </div>
              <div className="space-y-3">
                <a href={`tel:${headOfficeContact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 bg-white/10 rounded-sm px-4 py-3 hover:bg-white/20 transition-colors">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="text-xs text-white/60">Call</div>
                    <div className="font-bold">{headOfficeContact.phone}</div>
                  </div>
                </a>
                <a href={`mailto:${headOfficeContact.email}`} className="flex items-center gap-3 bg-white/10 rounded-sm px-4 py-3 hover:bg-white/20 transition-colors">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="text-xs text-white/60">Email</div>
                    <div className="font-bold">{headOfficeContact.email}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${headOfficeContact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 rounded-sm px-4 py-3 hover:bg-white/20 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <div>
                    <div className="text-xs text-white/60">WhatsApp</div>
                    <div className="font-bold">{headOfficeContact.whatsapp}</div>
                  </div>
                </a>
                <a href="/#contact" className="block text-center bg-white text-forest-900 rounded-sm py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 mt-2">
                  Send Enquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullPlotDetailModal
        plot={selectedPlot}
        cityPlots={plotsByCity[activeCity]}
        onClose={() => setSelectedPlot(null)}
      />
    </>
  );
}
