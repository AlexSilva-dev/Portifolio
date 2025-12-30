<template>
  <div class="relative py-24 flex flex-col items-center">
    <!-- Blobs decorativos de fundo aumentados -->
    <div class="organic-blob bg-primary w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-20"></div>
    <div class="organic-blob bg-purple-600 w-[600px] h-[500px] top-[30%] left-1/2 -translate-x-1/2 opacity-20"></div>
    <div class="organic-blob bg-accent w-[500px] h-[400px] bottom-[10%] left-1/2 -translate-x-1/2 opacity-20"></div>

    <div class="hex-grid w-full max-w-4xl mx-auto flex flex-col gap-32">
      <div class="relative w-full flex flex-col items-center">
        <div
          class="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-primary/40 rotate-[-90deg] whitespace-nowrap tracking-widest uppercase font-bold">
          Languages</div>
        <div class="hex-row">
          <div class="hexagon-wrapper">
            <div class="hexagon hex-core">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-primary mb-3">code</span>
                <span class="text-white text-lg font-bold">Kotlin</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-primary w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper mt-16">
            <div class="hexagon hex-core">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-blue-400 mb-3">coffee</span>
                <span class="text-white text-lg font-bold">Java</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-blue-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hex-row">
          <div class="hexagon-wrapper -mt-2">
            <div class="hexagon hex-core">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-yellow-400 mb-3">javascript</span>
                <span class="text-white text-lg font-bold">Javascript</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-yellow-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full flex justify-center">
        <div
          class="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-mono text-purple-500/40 rotate-90 whitespace-nowrap tracking-widest uppercase font-bold">
          Multiplatform</div>
        <div class="hex-row items-start">
          <div class="hexagon-wrapper mt-16">
            <div class="hexagon hex-kmp">
              <div class="hex-content">
                <span class="material-symbols-outlined text-5xl text-green-400 mb-3">widgets</span>
                <span class="text-white text-lg font-bold">Compose</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-green-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper z-10 -mt-2">
            <div class="hexagon hex-kmp">
              <div class="hex-content">
                <span class="material-symbols-outlined text-7xl text-purple-500 mb-3">layers</span>
                <span class="text-white text-xl font-bold uppercase tracking-tighter">KMP</span>
                <span class="text-[12px] text-slate-400 italic font-medium">Unified</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-purple-500 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper mt-16">
            <div class="hexagon hex-kmp">
              <div class="hex-content">
                <span class="material-symbols-outlined text-5xl text-orange-400 mb-3">http</span>
                <span class="text-white text-lg font-bold">Ktor</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-orange-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full flex flex-col items-center">
        <div
          class="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-accent/40 rotate-[-90deg] whitespace-nowrap tracking-widest uppercase font-bold">
          Backend</div>
        <div class="hex-row">
          <div class="hexagon-wrapper">
            <div class="hexagon hex-fs">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-green-500 mb-3">spa</span>
                <span class="text-white text-lg font-bold leading-tight">Spring<br />Boot</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-green-500 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper mt-16">
            <div class="hexagon hex-fs">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-orange-400 mb-3">http</span>
                <span class="text-white text-lg font-bold">Ktor</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-orange-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hex-row">
          <div class="hexagon-wrapper -mt-2">
            <div class="hexagon hex-fs">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-accent mb-3">deployed_code</span>
                <span class="text-white text-lg font-bold">Docker</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-accent w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper mt-14 -ml-4">
            <div class="hexagon hex-fs">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-orange-400 mb-3">database</span>
                <span class="text-white text-lg font-bold">SQL</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-orange-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Linha Boas Práticas -->
      <div class="relative w-full flex flex-col items-center">
        <div
          class="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-mono text-green-400/40 rotate-90 whitespace-nowrap tracking-widest uppercase font-bold">
          Best Practices</div>
        <div class="hex-row">
          <div class="hexagon-wrapper">
            <div class="hexagon hex-bp">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-green-400 mb-3">architecture</span>
                <span class="text-white text-sm font-bold leading-tight">Clean<br />Arch</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-green-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="hexagon-wrapper mt-16">
            <div class="hexagon hex-bp">
              <div class="hex-content">
                <span class="material-symbols-outlined text-6xl text-green-400 mb-3">verified</span>
                <span class="text-white text-sm font-bold leading-tight">SOLID</span>
                <div class="prof-bar-mini">
                  <div class="prof-fill-mini bg-green-400 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hex-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.hex-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: -45px;
}

.hexagon-wrapper {
  width: 170px;
  height: 195px;
  position: relative;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.5));
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10;
}

.hexagon-wrapper:hover {
  transform: translateY(-10px) scale(1.08);
  z-index: 20;
}

.hexagon {
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
}

.hexagon::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: #0f172a;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 1;
}

.hex-core {
  background: linear-gradient(135deg, var(--color-primary), #112240);
}

.hex-kmp {
  background: linear-gradient(135deg, #bc13fe, #ccd6f6);
}

.hex-fs {
  background: linear-gradient(135deg, var(--color-accent), #fb923c);
}

.hex-bp {
  background: linear-gradient(135deg, #10b981, #112240);
}

.hex-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
}

.organic-blob {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  border-radius: 50%;
}

.prof-bar-mini {
  height: 4px;
  width: 60px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 12px;
  border-radius: 2px;
}

.prof-fill-mini {
  height: 100%;
  border-radius: 2px;
}
</style>
