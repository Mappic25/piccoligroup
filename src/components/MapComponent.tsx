'use client';

import { useEffect, useRef, useState } from "react";

export function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const markerLabel = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initializeMap = async () => {
      try {
        // Importa Leaflet dinamicamente
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");

        // Red marker icon for PCM srl
        const RedIcon = L.icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        // Inizializza la mappa - aggiungi null check
        if (!mapContainer.current) {
          throw new Error("Map container not found");
        }
        
        map.current = L.map(mapContainer.current).setView([41.975, 15.005], 18);

        // Definisci i layer disponibili
        const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19
        });

        const satelliteLayer = L.tileLayer(
          "https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
          {
            attribution: '&copy; Google',
            maxZoom: 20,
            subdomains: ['0', '1', '2', '3']
          }
        );

        // Aggiungi il layer predefinito (satellite)
        satelliteLayer.addTo(map.current);

        // Crea il controllo dei layer
        const baseLayers = {
          "Mappa stradale": osmLayer,
          "Satellite": satelliteLayer
        };

        L.control.layers(baseLayers, {}, { position: "bottomleft", collapsed: true }).addTo(map.current);

        // Rimuovi l'attribution
        map.current.attributionControl.remove();

        // Localizza i controlli zoom in italiano
        const zoomInControl = mapContainer.current?.querySelector('.leaflet-control-zoom-in');
        const zoomOutControl = mapContainer.current?.querySelector('.leaflet-control-zoom-out');
        if (zoomInControl) zoomInControl.setAttribute('title', 'Zoom avanti');
        if (zoomOutControl) zoomOutControl.setAttribute('title', 'Zoom indietro');

        // Crea il marker rosso
        const marker = L.marker([41.975, 15.005], { icon: RedIcon }).addTo(map.current);
        
        // Crea il label "PCM srl" con logo
        markerLabel.current = document.createElement("a");
        markerLabel.current.href = "https://maps.google.com/?q=Via+dei+Gelsi+22,+86039+Termoli,+Italy";
        markerLabel.current.target = "_blank";
        markerLabel.current.rel = "noopener noreferrer";
        markerLabel.current.className =
          "rounded p-1 transition-opacity duration-200 flex items-center justify-center border-2 border-primary hover:scale-110";
        markerLabel.current.style.backgroundColor = "rgba(255, 255, 255, 1)";
        markerLabel.current.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.1)";
        markerLabel.current.style.backdropFilter = "blur(10px)";
        markerLabel.current.style.cursor = "pointer";
        markerLabel.current.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out";
        
        const logoImg = document.createElement("img");
        logoImg.src = "/logo.png";
        logoImg.alt = "PCM srl - Apri su Google Maps";
        logoImg.title = "Clicca per aprire su Google Maps";
        logoImg.style.height = "28px";
        logoImg.style.width = "auto";
        logoImg.style.maxWidth = "55px";
        logoImg.style.filter = "brightness(0) drop-shadow(0 2px 6px rgba(0,0,0,0.4)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))";
        markerLabel.current.appendChild(logoImg);
        
        markerLabel.current.style.position = "absolute";
        markerLabel.current.style.whiteSpace = "nowrap";
        markerLabel.current.style.pointerEvents = "auto";
        markerLabel.current.style.zIndex = "500";
        markerLabel.current.style.transition = "opacity 0.2s ease-in-out";
        
        // Aggiungi il label al contenitore della mappa
        mapContainer.current.appendChild(markerLabel.current);

        
        // Funzione per aggiornare la posizione del label
        const updateLabelPosition = () => {
          if (map.current && markerLabel.current && mapContainer.current) {
            const currentZoom = map.current.getZoom();
            
            // Calcola la posizione del marker nelle coordinate del container
            const point = map.current.latLngToContainerPoint([41.975, 15.005]);
            
            // Calcola la posizione iniziale relative al container
            let left = point.x + 15;
            let top = point.y - 45;
            
            // Ottieni le dimensioni del label
            const labelWidth = markerLabel.current.offsetWidth || 80;
            const labelHeight = markerLabel.current.offsetHeight || 32;
            
            // Clamp la posizione ai bordi del container
            const containerWidth = mapContainer.current.offsetWidth;
            const containerHeight = mapContainer.current.offsetHeight;
            
            // Limite sinistro
            if (left < 5) {
              left = 5;
            }
            // Limite destro
            if (left + labelWidth > containerWidth - 5) {
              left = containerWidth - labelWidth - 5;
            }
            // Limite superiore
            if (top < 5) {
              top = 5;
            }
            // Limite inferiore
            if (top + labelHeight > containerHeight - 5) {
              top = containerHeight - labelHeight - 5;
            }
            
            // Posiziona il label in absolute
            markerLabel.current.style.left = left + "px";
            markerLabel.current.style.top = top + "px";
            
            // Mostra/nascondi il label in base al zoom
            if (currentZoom >= 12) {
              markerLabel.current.style.opacity = "1";
              markerLabel.current.style.pointerEvents = "auto";
            } else {
              // Nascondi il label quando lo zoom è troppo piccolo
              markerLabel.current.style.opacity = "0";
              markerLabel.current.style.pointerEvents = "none";
            }
          }
        };

        // Aggiunta un event listener al markerLabel per evitare che la mappa intercetti i click
        if (markerLabel.current) {
          markerLabel.current.addEventListener('click', (e) => {
            e.stopPropagation();
          });
        }

        // Aggiorna il label quando la mappa si muove o fa zoom
        map.current.on("move", updateLabelPosition);
        map.current.on("zoom", updateLabelPosition);
        map.current.on("zoomend", updateLabelPosition);
        map.current.on("load", updateLabelPosition);
        
        // Aggiorna la posizione iniziale con un delay
        setTimeout(() => {
          updateLabelPosition();
        }, 100);

        setIsLoading(false);
      } catch (error) {
        console.error("Errore nel caricamento della mappa:", error);
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="static aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-border shadow-lift"
      style={{ height: "320px", width: "320px" }}
    >
      {isLoading && (
        <div className="flex items-center justify-center h-full bg-muted">
          <span className="text-sm text-muted-foreground">Caricamento mappa...</span>
        </div>
      )}
    </div>
  );
}
