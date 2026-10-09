import { useState } from "react";
import { X, Image as ImageIcon, Sparkles } from "lucide-react";
import { galleryImages } from "@/data/departmentData";
import MoreSubNav from "@/components/more/MoreSubNav";

const categories = ["all", "labs", "events", "students", "campus", "faculty"] as const;

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  src?: string;
}

const Gallery = () => {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images: GalleryItem[] = galleryImages;
  const filtered = filter === "all" ? images : images.filter(img => img.category === filter);
  const activeItem = images.find(g => g.id === lightbox);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Memories</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Gallery</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                  filter === c ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry-like grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => {
              const heights = ["h-56", "h-64", "h-52", "h-72", "h-60", "h-56"];
              return (
                <div
                  key={img.id}
                  className="break-inside-avoid bg-card border border-border rounded-lg overflow-hidden cursor-pointer group relative shadow-sm card-hover"
                  onClick={() => setLightbox(img.id)}
                >
                  <div className={`${heights[i % heights.length]} relative overflow-hidden bg-secondary flex items-center justify-center`}>
                    {img.src ? (
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/5 via-secondary to-accent/5 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <ImageIcon className="w-6 h-6 text-primary/60" />
                        </div>
                        <span className="font-display font-bold text-base text-foreground/80 leading-snug">
                          {img.title}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-accent tracking-wider mt-1">
                          {img.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/75 transition-colors flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/20 px-2 py-0.5 rounded-full inline-block mb-1">
                        {img.category}
                      </span>
                      <p className="text-sm font-body font-semibold text-primary-foreground">{img.title}</p>
                      <p className="text-xs text-primary-foreground/80 font-body">{img.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MoreSubNav />

      {/* Lightbox */}
      {lightbox !== null && activeItem && (
        <div className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground hover:opacity-80 transition-opacity" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="bg-card rounded-lg overflow-hidden max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="max-h-[70vh] bg-secondary flex items-center justify-center overflow-hidden">
              {activeItem.src ? (
                <img src={activeItem.src} alt={activeItem.title} className="w-full h-full object-contain max-h-[60vh]" />
              ) : (
                <div className="h-64 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-primary/5 via-secondary to-accent/5">
                  <ImageIcon className="w-12 h-12 text-primary/40 mb-3" />
                  <span className="font-display font-bold text-xl text-foreground mb-1">
                    {activeItem.title}
                  </span>
                  <span className="text-xs uppercase font-bold text-accent tracking-wider">
                    {activeItem.category}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                {activeItem.category}
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">{activeItem.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
