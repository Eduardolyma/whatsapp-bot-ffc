# Base leve do Node
FROM node:18-slim

# Variáveis do Puppeteer para funcionar no Railway
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Instala Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    xdg-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Cria pasta e copia arquivos
WORKDIR /app
COPY . .

# Instala dependências
RUN npm install

# Inicia o bot
CMD ["node", "index.js"]